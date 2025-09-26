import { bookingMeta } from "@/lib/metadatas";
import ProgramareClient from "./page.client";

export const dynamic = "force-dynamic";

export const metadata = bookingMeta;

export default function ProgramarePage() {
  return <ProgramareClient />;
}
