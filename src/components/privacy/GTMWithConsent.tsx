"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

function getConsent(): "granted" | "denied" | null {
  const m = document.cookie.match(/(?:^|; )brio_consent=(granted|denied)/);
  return (m?.[1] as any) ?? null;
}

export default function GTMWithConsent({ gtmId }: { gtmId: string }) {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);

  useEffect(() => {
    setConsent(getConsent());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as {
        status: "granted" | "denied";
      };
      if (detail?.status) setConsent(detail.status);
    };
    window.addEventListener("brio-consent-changed", onChange as any);
    return () =>
      window.removeEventListener("brio-consent-changed", onChange as any);
  }, []);

  if (consent !== "granted") return null;

  return (
    <>
      {/* dataLayer init + GTM bootstrap */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ 'brio.consentLoadedAt': Date.now() });
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');
        `}
      </Script>

      {/* Optional <noscript> fallback – fine to omit on SPAs */}
      {/* Put in <body> if you want it: */}
      {/* <noscript><iframe src={"https://www.googletagmanager.com/ns.html?id=" + gtmId}
          height="0" width="0" style={{display:"none",visibility:"hidden"}} /></noscript> */}
    </>
  );
}
