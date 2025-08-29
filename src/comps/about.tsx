import { CheckCircle } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="/about-us.jpg"
          alt="BrioCleaning team at work"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
      <div>
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
          Excelență în curățenie, dedicare pentru tine
        </h3>
        <p className="text-gray-600 mb-6 text-pretty">
          Angajamentul nostru față de calitate depășește curățarea de suprafață. Înțelegem
          că fiecare țesătură, fiecare vehicul și fiecare spațiu comercial are
          nevoi unice. De aceea, am dezvoltat tehnici specializate și
          folosim doar cele mai bune produse ecologice pentru a asigura rezultate
          remarcabile, protejând în același timp sănătatea dumneavoastră și mediul.
        </p>
        <div className="space-y-3">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-brio-blue mr-3" />
            <span className="text-gray-700">
              Profesioniști certificați în curățenie
            </span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-brio-blue mr-3" />
            <span className="text-gray-700">Echipamente de ultimă generație</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-brio-blue mr-3" />
            <span className="text-gray-700">Complet asigurați și garantați</span>
          </div>
        </div>
      </div>
    </div>
  );
}
