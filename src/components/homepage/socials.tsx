import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/constants";
import { Icon } from "@iconify/react";

export default function SocialsSection() {
  return (
    <section className="py-16 bg-brio-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Urmărește-ne călătoria de curățare online!
        </h2>
        <p className="text-xl text-blue-100 mb-8 text-pretty">
          Rămâi la curent cu cele mai recente lucrări, sfaturi de curățare și
          conținut din culise. Alătură-te comunității noastre de clienți
          mulțumiți!
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              asChild
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <Icon icon={social.icon} className="mr-2 h-5 w-5" />
                {social.name}
              </a>
            </Button>
          ))}
        </div>

        <p className="text-blue-100 text-sm">
          {"Etichetează-ne în postările tale cu #BrioClean!"}
        </p>
      </div>
    </section>
  );
}
