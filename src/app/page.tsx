import { VideoExpansion } from "@/components/homepage/hero";
import { homePageMeta } from "@/lib/metadatas";
import HomeClient from "./page.client";
import ServicesSection from "@/components/homepage/services";
import Results from "@/components/homepage/results";
import SocialsSection from "@/components/homepage/socials";

export const metadata = homePageMeta;

export default function Page() {
  return (
    <main>
      <VideoExpansion />
      <ServicesSection />
      <Results />
      <HomeClient />
      <SocialsSection />
    </main>
  );
}
