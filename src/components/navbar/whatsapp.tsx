"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/40712345678" // 👈 replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:hidden bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50"
    >
      <MessageCircle size={24} />
    </Link>
  );
}
