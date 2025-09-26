import Breadcrumbs from "@/components/breadcrumbs";
import { contact } from "@/lib/constants";
import { normPhone } from "@/lib/helpers";
import { contactPageMeta } from "@/lib/metadatas";
import React from "react";

export const metadata = contactPageMeta;

export default function ContactPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-start justify-center max-w-5xl w-full mx-auto p-10 text-gray-800">
      <Breadcrumbs
        items={[{ label: "Acasă", href: "/" }, { label: "Contact" }]}
        className="sr-only mb-3 flex justify-center md:justify-start"
      />
      <span className="px-2 py-1 text-xs border border-gray-300 rounded-full">
        Contactează-ne
      </span>
      <h1 className="text-4xl font-bold text-left mt-4">
        Ne bucurăm să auzim recenziile voastre!
      </h1>
      <p className="text-left mt-4">
        Ne puteți găsi și la{" "}
        <a
          href={`mailto:${contact.email}`}
          className="text-brio-blue-dark hover:underline"
        >
          {contact.email}
        </a>
      </p>
      <div className="grid md:grid-cols-3 mt-16">
        <div className="py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="256"
            height="258"
            viewBox="0 0 256 258"
            className="bg-brio-green p-2.5 aspect-square rounded-full size-10"
          >
            <defs>
              <linearGradient
                id="SVGBRLHCcSy"
                x1="50%"
                x2="50%"
                y1="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#1faf38" />
                <stop offset="100%" stopColor="#60d669" />
              </linearGradient>
              <linearGradient
                id="SVGHW6lecxh"
                x1="50%"
                x2="50%"
                y1="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#f9f9f9" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
            </defs>
            <path
              fill="url(#SVGBRLHCcSy)"
              d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
            />
            <path
              fill="url(#SVGHW6lecxh)"
              d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
            />
            <path
              fill="#fff"
              d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
            />
          </svg>
          <p className="text-lg font-bold mt-2">WhatsApp</p>
          <p className="text-gray-700 mt-1 mb-4">
            Vă răspundem în cel mai scurt timp posibil.
          </p>
          <a
            href={`https://wa.me/${normPhone()}`}
            className="text-brio-blue-dark font-semibold"
          >
            {contact.phone}
          </a>
        </div>
        <div>
          <svg
            className="bg-brio-orange/80 p-2.5 aspect-square rounded-full size-10"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.875 19.125H21.75V9.309a1.125 1.125 0 0 0-.375-2.184h-3.75V4.809a1.125 1.125 0 0 0-.375-2.184H3.75a1.125 1.125 0 0 0-.375 2.184v14.316H2.25a1.125 1.125 0 1 0 0 2.25h20.625a1.125 1.125 0 1 0 0-2.25M19.5 9.375v9.75h-1.875v-9.75zm-13.875-4.5h9.75v14.25h-1.5V15a1.125 1.125 0 0 0-1.125-1.125h-4.5A1.125 1.125 0 0 0 7.125 15v4.125h-1.5zm6 14.25h-2.25v-3h2.25zM6.75 7.5a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 6.75 7.5m4.5 0a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 0 1 0 2.25h-.75A1.125 1.125 0 0 1 11.25 7.5m-4.5 3.75a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 1 1 0 2.25h-.75A1.125 1.125 0 0 1 6.75 11.25m4.5 0a1.125 1.125 0 0 1 1.125-1.125h.75a1.125 1.125 0 1 1 0 2.25h-.75a1.125 1.125 0 0 1-1.125-1.125"
              fill="currentColor"
            />
          </svg>
          <p className="text-lg font-bold mt-2">Orele de lucru</p>
          <p className="text-gray-700 mt-1 mb-4">
            Vezi programul de lucru mai jos:
          </p>
          <span className="text-brio-blue font-semibold">
            Lun - Sâm: 08.00 - 20.00 <br />
            Dum - închis
          </span>
        </div>
        <div>
          <svg
            className="text-white bg-brio-blue-dark p-2.5 aspect-square rounded-full size-10"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m19 13.513-4.415-1.98-.017-.007a1.87 1.87 0 0 0-1.886.243l-2.091 1.781c-1.22-.66-2.478-1.91-3.14-3.113l1.787-2.125q.043-.051.08-.108a1.88 1.88 0 0 0 .148-1.782L7.488 2A1.88 1.88 0 0 0 5.539.89 5.65 5.65 0 0 0 .625 6.5c0 7.651 6.224 13.875 13.875 13.875a5.65 5.65 0 0 0 5.61-4.914A1.88 1.88 0 0 0 19 13.513m-4.5 4.612A11.64 11.64 0 0 1 2.875 6.5a3.4 3.4 0 0 1 2.67-3.332l1.764 3.938-1.796 2.14q-.044.051-.08.108a1.88 1.88 0 0 0-.12 1.841c.883 1.808 2.702 3.615 4.529 4.5a1.88 1.88 0 0 0 1.845-.136q.055-.036.105-.08l2.102-1.787 3.938 1.763a3.4 3.4 0 0 1-3.332 2.67"
              fill="currentColor"
            />
          </svg>
          <p className="text-lg font-bold mt-2">Sună-ne direct</p>
          <p className="text-gray-500 mt-1 mb-4">
            Răspundem doar în timpul programului de muncă.
          </p>
          <a
            href={`tel:${contact.phone}`}
            className="text-brio-blue-dark font-semibold"
          >
            {contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
