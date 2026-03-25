import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/rooms", label: "Rooms" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-deepblue/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-platinum">
          <span className="text-lg font-semibold tracking-[0.15em]">AURELIA</span>
          <span className="text-xs uppercase tracking-[0.3em] text-platinum/70">Grand Hotel</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-white" : "text-platinum/75 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-lg p-2 text-platinum md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen ? (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mx-4 mb-4 rounded-2xl border border-white/20 bg-deepblue p-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive ? "bg-white/15 text-white" : "text-platinum/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </motion.nav>
      ) : null}
    </header>
  );
}
