"use client";
import dynamic from "next/dynamic";

const ServicesSection = dynamic(
  () => import("@/components/homepage/services"),
  {
    ssr: false,
    loading: () => <section style={{ minHeight: 480 }} />,
  }
);

const Results = dynamic(() => import("@/components/homepage/results"), {
  ssr: false,
  loading: () => <section style={{ minHeight: 480 }} />,
});

const Testimonials = dynamic(
  () => import("@/components/homepage/testimonials"),
  {
    ssr: false,
    loading: () => <section style={{ minHeight: 420 }} />,
  }
);

const SocialsSection = dynamic(() => import("@/components/homepage/socials"), {
  ssr: false,
  loading: () => <section style={{ minHeight: 280 }} />,
});

export default function HomeClient() {
  return (
    <>
      <ServicesSection />
      <Results />
      <Testimonials />
      <SocialsSection />
    </>
  );
}
