import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 bg-deepblue text-platinum">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-platinum/70">Aurelia Grand</p>
          <h3 className="text-2xl">Crafted Stays. Timeless Luxury.</h3>
          <p className="text-sm leading-relaxed text-platinum/80">
            Boutique elegance with tailored concierge service in the heart of Nairobi.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-platinum/70">Quick Links</p>
          <Link className="block text-platinum/80 transition hover:text-white" to="/">
            Home
          </Link>
          <Link className="block text-platinum/80 transition hover:text-white" to="/rooms">
            Rooms & Suites
          </Link>
          <Link className="block text-platinum/80 transition hover:text-white" to="/about">
            Our Story
          </Link>
          <Link className="block text-platinum/80 transition hover:text-white" to="/contact">
            Contact
          </Link>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-platinum/70">Contact</p>
          <p className="flex items-center gap-2 text-platinum/80">
            <MapPin size={16} /> Riverside Drive, Nairobi, Kenya
          </p>
          <p className="flex items-center gap-2 text-platinum/80">
            <Phone size={16} /> +254 700 102 888
          </p>
          <p className="flex items-center gap-2 text-platinum/80">
            <Mail size={16} /> reservations@aureliagrand.com
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-platinum/70">
        {new Date().getFullYear()} Aurelia Grand Hotel. All rights reserved.
      </div>
    </footer>
  );
}
