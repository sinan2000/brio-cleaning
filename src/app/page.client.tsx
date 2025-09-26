"use client";
import dynamic from "next/dynamic";

const Testimonials = dynamic(
  () => import("@/components/homepage/testimonials"),
  {
    ssr: false,
    loading: () => <section style={{ minHeight: 420 }} />,
  }
);

export default function HomeClient() {
  return <Testimonials />;
}
