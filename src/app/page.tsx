import { VideoExpansion } from "@/components/homepage/hero";
import HomeClient from "./page.client";
import { homePageMeta } from "@/lib/metadatas";

export const metadata = homePageMeta

export default function Page() {
  return (
    <main>
      <VideoExpansion />
      <HomeClient />
    </main>
  );
}
