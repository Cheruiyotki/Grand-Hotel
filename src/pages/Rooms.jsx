import { motion } from "framer-motion";
import RoomCard from "../components/RoomCard";
import SectionHeader from "../components/SectionHeader";
import { rooms } from "../data/hotelData";

const transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };

export default function Rooms() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={transition}
      className="mx-auto max-w-7xl px-4 pb-10 pt-32 sm:px-6 lg:px-8"
    >
      <SectionHeader
        eyebrow="Rooms & Suites"
        title="Stay Spaces Crafted For Comfort, Privacy, and Style"
        description="Explore our collection of signature rooms, each curated with generous layouts, handcrafted finishes, and tailored guest amenities."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <RoomCard room={room} />
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
