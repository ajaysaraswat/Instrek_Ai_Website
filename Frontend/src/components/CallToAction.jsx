import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CallToAction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-gray-900 py-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Swimming text effect */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-[#00ff99] mb-8"
          >
            {["Let's", "Create", "Something", "Amazing"].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mx-2"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact cards with sequential animation */}
            {[
              { title: "Email", value: "contact@instrek.com", icon: "📧" },
              { title: "Phone", value: "+91 (123) 456-7890", icon: "📱" },
              { title: "Location", value: "Bangalore, India", icon: "📍" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-[#00ff99]"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-[#00ff99] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/90">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Schedule Consultation Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800/30 backdrop-blur-md p-8 rounded-2xl max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-[#00ff99] mb-6">
              Schedule a Consultation
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00ff99]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00ff99]"
              />
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#00ff99]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#00ff99] text-gray-900 py-4 rounded-lg font-semibold hover:bg-[#00cc7a] transition-colors"
              >
                Schedule Now
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
