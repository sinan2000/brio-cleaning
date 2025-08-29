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
          Excellence in Every Detail
        </h3>
        <p className="text-gray-600 mb-6 text-pretty">
          Our commitment to quality goes beyond surface cleaning. We understand
          that every fabric, every vehicle, and every commercial space has
          unique needs. That's why we've developed specialized techniques and
          use only the finest eco-friendly products to ensure outstanding
          results while protecting your health and the environment.
        </p>
        <div className="space-y-3">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-brio-blue mr-3" />
            <span className="text-gray-700">
              Certified cleaning professionals
            </span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-brio-blue mr-3" />
            <span className="text-gray-700">State-of-the-art equipment</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-brio-blue mr-3" />
            <span className="text-gray-700">Fully insured and bonded</span>
          </div>
        </div>
      </div>
    </div>
  );
}
