import { motion } from "framer-motion";
import { BedDouble, Coffee, MapPin, Wifi } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { amenities, testimonials } from "../data/hotelData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };
const iconMap = {
  wifi: Wifi,
  coffee: Coffee,
  bed: BedDouble,
  mapPin: MapPin,
};

export default function About() {
  const amenitiesReveal = useScrollReveal();
  const testimonialsReveal = useScrollReveal();

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={transition}
      className="pb-10 pt-20"
    >
      <section
        className="flex min-h-[52vh] items-center px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(10,18,31,0.72), rgba(10,18,31,0.25)), url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl py-16 text-platinum">
          <p className="text-xs uppercase tracking-[0.35em] text-platinum/85">About Aurelia Grand</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
            A New Benchmark For Refined Urban Hospitality
          </h1>
        </div>
      </section>

      <motion.section
        ref={amenitiesReveal.ref}
        initial="hidden"
        animate={amenitiesReveal.controls}
        variants={amenitiesReveal.variants}
        className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Amenities"
          title="Thoughtful Services, Elevated Daily Rituals"
          description="Beyond elegant interiors, every service at Aurelia Grand is tailored to reduce effort and elevate comfort."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {amenities.map((item) => {
            const Icon = iconMap[item.icon] || MapPin;
            return (
              <article key={item.id} className="panel p-6">
                <Icon className="text-deepblue" size={24} />
                <h3 className="mt-4 text-2xl text-deepblue">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
              </article>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        ref={testimonialsReveal.ref}
        initial="hidden"
        animate={testimonialsReveal.controls}
        variants={testimonialsReveal.variants}
        className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <SectionHeader
          eyebrow="Guest Voices"
          title="What Travelers Remember Most"
          description="Feedback from guests who chose Aurelia Grand for business retreats, celebrations, and weekend escapes."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="panel p-6">
              <p className="text-sm leading-relaxed text-slate-700">"{item.quote}"</p>
              <footer className="mt-5 text-sm font-semibold text-deepblue">
                {item.name} <span className="font-normal text-slate-600">- {item.location}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}
