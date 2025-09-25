"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function setConsent(value: "granted" | "denied") {
  // 12 months, SameSite=Lax
  document.cookie = `brio_consent=${value}; Max-Age=${
    3600 * 24 * 365
  }; Path=/; SameSite=Lax`;
  window.dispatchEvent(
    new CustomEvent("brio-consent-changed", { detail: { status: value } })
  );
}

function getConsent(): "granted" | "denied" | null {
  const m = document.cookie.match(/(?:^|; )brio_consent=(granted|denied)/);
  return (m?.[1] as any) ?? null;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const c = getConsent();
    setVisible(c == null);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-4 left-4 right-4 sm:right-4 sm:left-auto z-50
        max-w-md rounded-2xl shadow-xl border border-white/15
        bg-brio-blue text-white
        backdrop-blur supports-[backdrop-filter]:bg-brio-blue/95
      "
      role="dialog"
      aria-live="polite"
      aria-label="Consimțământ cookie pentru analitice"
    >
      <div className="p-4">
        <p className="text-sm leading-relaxed">
          Folosim cookie-uri doar pentru{" "}
          <strong className="font-semibold">
            analitice (Google Analytics)
          </strong>
          . Acceptați colectarea anonimă pentru a ne îmbunătăți serviciile?
        </p>

        <div className="mt-3 flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => {
              setConsent("granted");
              setVisible(false);
            }}
            className="
              inline-flex justify-center items-center rounded-lg
              bg-white text-gray-900 hover:bg-white/90
              px-4 py-2 text-sm font-medium
            "
          >
            Accept
          </button>

          <button
            onClick={() => {
              setConsent("denied");
              setVisible(false);
            }}
            className="
              inline-flex justify-center items-center rounded-lg
              border border-white/30 text-white bg-brio-blue-dark/90 hover:bg-brio-blue-dark
              px-4 py-2 text-sm font-medium
            "
          >
            Refuz
          </button>

          <Link
            href="/politica-cookies"
            className="ml-auto text-xs underline underline-offset-4 text-white/80 hover:text-white"
          >
            Află mai multe
          </Link>
        </div>
      </div>
    </div>
  );
}
