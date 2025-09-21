import { VideoExpansion } from "@/components/homepage/hero";
import ServicesSection from "@/components/homepage/services";
import Results from "@/components/homepage/results";
import SocialsSection from "@/components/homepage/socials";

export default function Page() {
  return (
    <main> 
      <VideoExpansion />
      <ServicesSection />
      <Results />
      <SocialsSection />
    </main>
  );
}
