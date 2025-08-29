import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Music } from "lucide-react";

export default function SocialsSection() {
  const socialLinks = [
    {
      name: "TikTok",
      icon: Music,
      href: "https://www.tiktok.com/@briocleaningtimisoara",
      color: "hover:text-black",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/BrioCleaningTm",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/briocleaningtm/",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <section className="py-16 bg-brio-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
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
                <social.icon className="mr-2 h-5 w-5" />
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
