"use client";

import { useEffect } from "react";

type Props = { gtmId: string };

function getConsent(): "granted" | "denied" | null {
  const m = document.cookie.match(/(?:^|; )brio_consent=(granted|denied)/);
  return (m?.[1] as any) ?? null;
}

function loadGTM(id: string) {
  if (document.getElementById("brio-gtm")) return;

  // Init dataLayer
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ "brio.consentLoadedAt": Date.now() });

  // Inject GTM <script>
  const s = document.createElement("script");
  s.id = "brio-gtm";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.appendChild(s);

  // (Optional) noscript fallback (rarely needed in SPA)
  const ns = document.createElement("noscript");
  ns.id = "brio-gtm-noscript";
  ns.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.appendChild(ns);
}

export default function GTMWithConsent({ gtmId }: Props) {
  useEffect(() => {
    const c = getConsent();
    if (c === "granted") loadGTM(gtmId);

    // Listen for future changes from the banner
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as {
        status: "granted" | "denied";
      };
      if (detail?.status === "granted") loadGTM(gtmId);
      if (detail?.status === "denied") {
        // If you wish, you could remove GTM nodes here.
      }
    };
    window.addEventListener("brio-consent-changed", onChange as any);
    return () =>
      window.removeEventListener("brio-consent-changed", onChange as any);
  }, [gtmId]);

  return null;
}
