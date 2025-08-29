import { VideoExpansion } from "@/comps/hero";
import Results from "@/comps/results";
import ServicesSection from "@/comps/services";
import SocialsSection from "@/comps/socials";

export default function Page() {
    return (
        <main>
            <VideoExpansion />
            <ServicesSection />
            <Results />
            {/* <BookAppointment/> */}
            <SocialsSection />
        </main>
    )
}