import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MaintenanceCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, x: "-50%" }}
          animate={{
            opacity: 1,
            x: "-50%",
            y: [0, -5, 0],
          }}
          exit={{
            opacity: 0,
            y: 100,
            x: "-50%",
            scale: 0.9,
          }}
          transition={{
            opacity: { duration: 0.4 },
            x: { duration: 0.4 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="fixed bottom-5 left-1/2 z-[9999]"
        >
          <div className="flex items-center gap-3 rounded-xl bg-blue-700 px-5 py-3 text-white shadow-lg backdrop-blur-sm">
            <span className="text-sm font-medium">
              MedBook Web Maintenance in Progress
            </span>

            <motion.button
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full cursor-pointer bg-white/20 hover:bg-white/30"
              aria-label="Close"
            >
              ✕
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MaintenanceCard;