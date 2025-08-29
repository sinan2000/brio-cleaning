import { LayoutGridDemo } from "./grid";

export default function Results() {
  return (
    <section className="py-20 bg-brio-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See the Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Real results from real clients. Experience the BrioCleaning
            transformation.
          </p>
        </div>
      </div>

      <LayoutGridDemo />
    </section>
  );
}
