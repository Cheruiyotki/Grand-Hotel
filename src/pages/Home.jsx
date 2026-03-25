import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import { rooms } from "../data/hotelData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };
const featuredSuites = rooms.slice(0, 4);

export default function Home() {
  const [activeSuite, setActiveSuite] = useState(0);
  const storyReveal = useScrollReveal();
  const suitesReveal = useScrollReveal();
  const suite = featuredSuites[activeSuite];

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={transition}
      className="pt-20"
    >
      <section
        className="relative isolate flex min-h-[82vh] items-center px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(10,18,31,0.78), rgba(10,18,31,0.35)), url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-7xl py-20 text-platinum">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-platinum/85">Nairobi, Kenya</p>
          <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">
            Luxury Hospitality Curated For Modern Travelers
          </h1>
          <p className="mt-6 max-w-2xl text-base text-platinum/85 md:text-lg">
            Aurelia Grand blends timeless architecture with contemporary wellness, dining, and suite
            experiences.
          </p>
        </div>

        <div className="absolute inset-x-4 -bottom-16 mx-auto max-w-5xl rounded-3xl border border-white/40 bg-white/90 p-5 shadow-luxe backdrop-blur-sm sm:inset-x-6 lg:inset-x-8">
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_160px_auto]">
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
              Check In
              <input type="date" className="field mt-2" />
            </label>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
              Check Out
              <input type="date" className="field mt-2" />
            </label>
            <label className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
              Guests
              <select className="field mt-2">
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
              </select>
            </label>
            <div className="flex items-end">
              <Button className="w-full">Check Availability</Button>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        ref={storyReveal.ref}
        initial="hidden"
        animate={storyReveal.controls}
        variants={storyReveal.variants}
        className="mx-auto mt-28 grid max-w-7xl gap-10 px-4 sm:px-6 md:mt-32 md:grid-cols-2 md:items-center lg:px-8"
      >
        <div className="overflow-hidden rounded-3xl shadow-luxe">
          <img
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80"
            alt="Hotel lobby"
            className="h-[420px] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Our Story"
            title="Where Elegant Design Meets Warm, Personal Service"
            description="Founded on the belief that luxury should feel calm and human, Aurelia Grand was crafted as a sanctuary for travelers who appreciate details."
          />
          <p className="text-sm leading-relaxed text-slate-700">
            Every floor is composed around natural light, tactile materials, and intentional silence.
            From our spa therapies to our late-night dining menu, each moment is designed for comfort
            and sophistication.
          </p>
          <Button variant="secondary">Explore Our Philosophy</Button>
        </div>
      </motion.section>

      <motion.section
        ref={suitesReveal.ref}
        initial="hidden"
        animate={suitesReveal.controls}
        variants={suitesReveal.variants}
        className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Featured Suites"
            title="Signature Stays Designed For Elevated Comfort"
            description="Curated suites with generous layouts, refined textures, and thoughtful amenities."
          />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setActiveSuite((previous) =>
                  previous === 0 ? featuredSuites.length - 1 : previous - 1,
                )
              }
              className="rounded-full border border-deepblue/20 bg-white p-3 text-deepblue transition hover:bg-deepblue hover:text-platinum"
              aria-label="Previous suite"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveSuite((previous) => (previous + 1) % featuredSuites.length)
              }
              className="rounded-full border border-deepblue/20 bg-white p-3 text-deepblue transition hover:bg-deepblue hover:text-platinum"
              aria-label="Next suite"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="panel mt-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={suite.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5 }}
              className="grid gap-8 p-6 md:grid-cols-2 md:p-8"
            >
              <img
                src={suite.image}
                alt={suite.title}
                className="h-72 w-full rounded-2xl object-cover md:h-[360px]"
                loading="lazy"
              />
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-deepblue/70">Suite Spotlight</p>
                  <h3 className="mt-3 text-3xl text-deepblue">{suite.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">{suite.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">Nightly Rate</p>
                    <p className="mt-2 text-xl font-semibold text-deepblue">${suite.pricePerNight}</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">Space</p>
                    <p className="mt-2 text-xl font-semibold text-deepblue">{suite.sqft} sq ft</p>
                  </div>
                </div>
                <Button className="w-full sm:w-fit">Reserve This Suite</Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>
    </motion.main>
  );
}
