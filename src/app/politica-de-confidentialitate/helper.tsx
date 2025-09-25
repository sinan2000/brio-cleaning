"use client";

export default function ResetConsentLink({
  className = "",
  children = "Schimbă preferințele cookie",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        document.cookie = "brio_consent=; Max-Age=0; Path=/; SameSite=Lax";
        if (typeof window !== "undefined") location.reload();
      }}
      className={`underline underline-offset-4 ${className}`}
    >
      {children}
    </button>
  );
}
