"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons"; // optional if you have one

const whatsappHref =
  "https://wa.me/40787675225?text=" +
  encodeURIComponent(
    "salut! aș dori o ofertă pentru curățare fotolii și scaune"
  );

export default function Ctas() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {/* WhatsApp (external) */}
      <Button
        asChild
        className="h-10 px-4 bg-[#25D366] hover:bg-[#1ebe57] text-white"
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrie-ne pe WhatsApp"
        >
          {/* Replace with your svg if you like */}
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            aria-hidden="true"
          >
            <title>WhatsApp</title>
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.01C.122 5.281 5.403 0 12.057 0c3.174 0 6.167 1.237 8.413 3.484A11.82 11.82 0 0124 11.944c-.003 6.654-5.284 11.935-11.94 11.935a11.9 11.9 0 01-6.085-1.62L.057 24zm6.597-3.807c1.766.995 3.006 1.591 5.45 1.591 5.437 0 9.86-4.42 9.863-9.857.002-5.46-4.415-9.89-9.87-9.89-5.44 0-9.86 4.43-9.86 9.87 0 2.363.823 4.55 2.2 6.29l-.14.5  -.94 3.44 3.3-.94zM18.52 14.4c-.077-.128-.282-.205-.59-.358-.308-.154-1.82-.897-2.102-.998-.282-.103-.487-.154-.692.154-.205.308-.795.998-.974 1.203-.179.205-.359.23-.667.077-.308-.154-1.3-.479-2.476-1.528-.915-.815-1.532-1.82-1.71-2.128-.179-.308-.019-.475.135-.628.138-.137.308-.358.462-.538.154-.179.205-.308.308-.513.103-.205.051-.385-.026-.538-.077-.154-.692-1.67-.948-2.29-.249-.598-.503-.517-.692-.526l-.59-.01c-.205 0-.538.077-.82.385-.282.308-1.077 1.05-1.077 2.561 0 1.512 1.103 2.972 1.256 3.179.154.205 2.174 3.32 5.27 4.655.737.318 1.312.508 1.76.651.74.236 1.414.203 1.946.123.593-.088 1.82-.744 2.078-1.462.256-.718.256-1.333.179-1.462z" />
          </svg>
          WhatsApp
        </a>
      </Button>

      {/* Programare (internal) */}
      <Button
        asChild
        className="h-10 px-6 bg-brio-blue-dark/90 hover:bg-brio-blue-dark text-white"
      >
        <Link
          href={{
            pathname: "/programari",
            query: { s: "curatare-fotolii-scaune" },
          }}
          aria-label="Programează-te acum pentru curățare fotolii și scaune"
        >
          Programează-te
        </Link>
      </Button>
    </div>
  );
}
