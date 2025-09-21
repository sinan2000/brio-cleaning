import photo from "@/assets/hero/about-us.jpg";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <Image
          src={photo}
          alt="BrioCleaning la lucru"
          className="rounded-lg shadow-lg w-full h-auto"
          priority
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Excelență în curățenie, dedicare pentru tine
        </h3>
        <p className="text-muted-foreground mb-6 text-pretty">
          Angajamentul nostru față de calitate depășește curățarea de suprafață.
          Fiecare țesătură, fiecare vehicul și fiecare spațiu are nevoi unice.
          De aceea folosim tehnici specializate și soluții ecologice pentru
          rezultate remarcabile, protejând sănătatea ta și mediul.
        </p>
        <div className="space-y-3">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-brio-green mr-3" />
            <span className="text-foreground">Profesioniști certificați</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-brio-green mr-3" />
            <span className="text-foreground">
              Echipamente de ultimă generație
            </span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-brio-green mr-3" />
            <span className="text-foreground">
              Complet asigurați și garantați
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
