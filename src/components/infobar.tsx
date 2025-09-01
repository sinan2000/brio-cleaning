import Link from "next/link";

export default function InfoBar() {
  return (
    <div className="sm:hidden bg-brio-blue text-white text-center text-sm py-2 px-4">
      <Link
        href="/#programari"
        className="font-medium underline underline-offset-2 hover:text-brio-blue-dark transition-colors"
      >
        Programează-te acum →
      </Link>
    </div>
  );
}
