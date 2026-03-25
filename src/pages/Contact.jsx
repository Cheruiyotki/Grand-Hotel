import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import { useContactForm } from "../hooks/useContactForm";

const transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };

export default function Contact() {
  const { formState, errors, submitted, handleChange, handleSubmit } = useContactForm();

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={transition}
      className="mx-auto max-w-7xl px-4 pb-10 pt-32 sm:px-6 lg:px-8"
    >
      <SectionHeader
        eyebrow="Contact"
        title="Let's Plan Your Next Luxury Stay"
        description="Reach our reservations team for suite bookings, corporate stays, and curated experiences."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="panel p-6 sm:p-8">
          <h3 className="text-2xl text-deepblue">Reservation Inquiry</h3>
          <p className="mt-2 text-sm text-slate-700">
            Share your dates and preferences. We will reply within 24 hours.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                className="field"
                placeholder="Jane Doe"
              />
              {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className="field"
                placeholder="jane@example.com"
              />
              {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formState.message}
                onChange={handleChange}
                className="field resize-none"
                placeholder="I would like a suite with spa access from April 12 to April 15..."
              />
              {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              Send Inquiry
            </Button>
            {submitted ? (
              <p className="text-sm font-medium text-emerald-700">
                Inquiry sent successfully. Our concierge will reach out shortly.
              </p>
            ) : null}
          </form>
        </section>

        <aside className="panel space-y-6 p-6 sm:p-8">
          <h3 className="text-2xl text-deepblue">Hotel Information</h3>
          <div className="space-y-4 text-sm text-slate-700">
            <p className="flex items-center gap-3">
              <MapPin className="text-deepblue" size={18} />
              18 Riverside Drive, Nairobi
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-deepblue" size={18} />
              +254 700 102 888
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-deepblue" size={18} />
              reservations@aureliagrand.com
            </p>
            <p className="flex items-center gap-3">
              <Clock3 className="text-deepblue" size={18} />
              Concierge Desk: Open 24/7
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80"
            alt="Hotel spa reception"
            className="h-56 w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </aside>
      </div>
    </motion.main>
  );
}
