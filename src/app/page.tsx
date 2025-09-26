import { VideoExpansion } from "@/components/homepage/hero";
import { homePageMeta } from "@/lib/metadatas";

export const metadata = homePageMeta

export default function Page() {
  return (
    <main>
      <VideoExpansion />
    </main>
  );
}
