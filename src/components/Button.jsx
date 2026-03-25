import { motion } from "framer-motion";

const variantClasses = {
  primary:
    "bg-deepblue text-platinum hover:bg-[#243650] focus-visible:ring-deepblue/40",
  secondary:
    "bg-white text-deepblue border border-deepblue/20 hover:bg-slate-100 focus-visible:ring-slate-400/40",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
