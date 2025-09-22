"use client";
import React from "react";
import { motion } from "motion/react";
import { timeAgo } from "@/lib/helpers";

import asset1 from "@/assets/reviews/1.jpg";
import asset2 from "@/assets/reviews/2.png";
import asset3 from "@/assets/reviews/3.jpg";
import asset4 from "@/assets/reviews/4.png";
import asset5 from "@/assets/reviews/5.jpg";
import asset6 from "@/assets/reviews/6.png";
import asset7 from "@/assets/reviews/7.jpg";
import asset8 from "@/assets/reviews/8.png";
import asset9 from "@/assets/reviews/9.jpg";
import asset10 from "@/assets/reviews/10.png";
import asset11 from "@/assets/reviews/11.jpg";
import asset12 from "@/assets/reviews/12.png";
import Image from "next/image";
import { FacebookIcon, GoogleIcon } from "../icons";

const testimonials = [
  {
    text: "Recomand cu drag. De câțiva ani, ne ajută periodic cu igienizarea canapelelor, saltelelor și covoarelor. Pentru soțul meu, care este alergic, este un must have 😍. Iar canapelele de cabinetul psihologic sunt mereu în stare perfectă.",
    image: asset1, //"/reviews/1.jpg",
    name: "Iasmina Loredana Groza",
    role: "30 August 2025",
    source: "fb",
  },
  {
    text: "The best!",
    image: asset2, // "/reviews/2.png",
    name: "Adelina Bagrin",
    role: timeAgo("2025-8"),
    source: "go",
  },
  {
    text: "Recomand! Servicii excelente, calitate, seriozitate!",
    image: asset3, //"/reviews/3.jpg",
    name: "Paula Andreea",
    role: "9 August 2025",
    source: "fb",
  },
  {
    text: "Am apelat la serviciile Brio Cleaning pentru curățarea și igienizarea canapelei și a saltelei, iar experiența a fost excelentă de la început până la final. Echipa a dat dovadă de profesionalism maxim, punctualitate și atenție la detalii. Rezultatul final a depășit așteptările mele — totul arată și se simte impecabil. Comunicarea a fost clară, iar intervenția promptă. Recomand cu încredere Brio Cleaning tuturor celor care caută servicii de curățenie de înaltă calitate!",
    image: asset4, // "/reviews/4.png",
    name: "Beatrice B",
    role: "a month ago",
    source: "go",
  },
  {
    text: "Recomand cu incredere BrioCleaning Timisoara, servicii profesionale de calitate, implicare , atentie la detalii , seriozitate , nota 10 + . Multumesc !",
    image: asset5, //
    name: "Mariana Fulga",
    role: "8 August 2025",
    source: "fb",
  },
  {
    text: "Profesioniști, punctuali și atenți la detalii! Mobila mea n-a mai fost atât de curată de mult timp. Recomand cu încredere serviciile lor — curățenie impecabilă și o echipă amabilă!",
    image: asset6,
    name: "Zinaida Bacalov",
    role: "a month ago",
    source: "go",
  },
  {
    text: "Recomand! Seriozitate si calitate a serviciilor!",
    image: asset7,
    name: "Andrei Sgură",
    role: "25 Iulie 2025",
    source: "fb",
  },
  {
    text: "Servicii excelente, produse de calitate si profesionalism din partea staff-ului. Recomand cu incredere!",
    image: asset8,
    name: "Giulia Rossana",
    role: "a month ago",
    source: "go",
  },
  {
    text: "Recomand! Profesionalism, punctualitate, oameni faini.",
    image: asset9,
    name: "Marius Marius",
    role: "19 Iulie 2025",
    source: "fb",
  },
  {
    text: "Recomand cu încredere serviciile lor - rapid, eficient și la un preț corect. Cu siguranță voi apela din nou!",
    image: asset10,
    name: "Simion Bacalov",
    role: "a month ago",
    source: "go",
  },
  {
    text: "Recomand cu cea mai mare placere!",
    image: asset11,
    name: "Andreea Andre",
    role: "4 Martie 2025",
    source: "fb",
  },
  {
    text: "Am apelat la Brio Cleaning pentru curățarea canapelei și sunt foarte mulțumit. Domnul care a venit a lucrat atent, nu s-a grăbit și a scos pete vechi de luni de zile. A folosit soluții fără miros puternic și a lăsat locul curat. Cu siguranță voi apela din nou",
    image: asset12,
    name: "Andrei Mestereaga",
    role: "a month ago",
    source: "go",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-0.5 px-1 rounded-lg">Recenzii</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter mt-5">
            Ce recenzii avem?
          </h2>
          <p className="text-center mt-5 opacity-75">
            Vezi împreună cu noi ce scor avem atât pe Google Maps, unde avem 5
            stele, cât și pe Facebook!
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(
                ({ text, image, name, role, source }, i) => (
                  <div
                    className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                    key={i}
                  >
                    <div>{text}</div>

                    <div className="flex items-center justify-between mt-5">
                      <div className="flex items-center gap-2">
                        <Image
                          src={image}
                          alt={name}
                          placeholder="blur"
                          width={40}
                          height={40}
                          className="rounded-full"
                          quality={60}
                          sizes="40px"
                          loading="lazy"
                        />
                        <div className="flex flex-col">
                          <div className="font-medium tracking-tight leading-5">
                            {name}
                          </div>
                          <div className="leading-5 opacity-60 tracking-tight">
                            {role}
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0">
                        {source === "go" ? (
                          <GoogleIcon /> // styled Google
                        ) : (
                          <FacebookIcon /> // styled Facebook
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
