import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl"
        >
          <div className="backdrop-blur-xl bg-white/90 border border-gray-200 shadow-2xl rounded-3xl p-6">
            <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🍪</span>
                  <h3 className="font-bold text-lg text-gray-800">
                    Cookie Preferences
                  </h3>
                </div>

                <p className="text-gray-600 text-sm md:text-base">
                  We use cookies to improve user experience, remember
                  preferences, and understand website performance.
                </p>
              </div>

              <div className="flex gap-3 shrink-0">
                <button
                  onClick={handleReject}
                  className="px-5 py-3 rounded-xl border border-gray-300 font-medium hover:bg-gray-100 transition"
                >
                  Reject
                </button>

                <button
                  onClick={handleAccept}
                  className="px-5 py-3 rounded-xl bg-[#641FEB] text-white font-medium hover:scale-105 transition"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;