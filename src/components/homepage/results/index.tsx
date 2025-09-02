import BeforeAfterMasonry from "./BeforeAfterMasonry";
import diff1 from "@/assets/results/diff1.jpg";
import diff2 from "@/assets/results/diff2.jpg";
import diff3 from "@/assets/results/diff3.jpg";
import diff4 from "@/assets/results/diff4.jpg";
import diff5 from "@/assets/results/diff5.jpg";
import diff6 from "@/assets/results/diff6.jpg";

const items = [
  { src: diff1, alt: "Canapea" },
  { src: diff2, alt: "Scaune auto" },
  { src: diff3, alt: "Canapea" },
  { src: diff4, alt: "Canapea" },
  { src: diff5, alt: "Saltea" },
  { src: diff6, alt: "Canapea" },
];

export default function Results() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vezi Diferența
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Rezultate reale de la clienți reali. Experimentează transformarea
            BrioCleaning.
          </p>
        </div>
      </div>

      <BeforeAfterMasonry items={items} />
    </section>
  );
}
