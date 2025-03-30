import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OfficeCard = ({ office }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div className="bg-black/70 backdrop-blur-lg p-8 rounded-2xl border-2 border-gray-800 hover:border-[#00ff99] transition-all duration-300 shadow-xl relative">
      {/* Office Header */}
      <div className="flex items-center mb-6">
        <div className="w-3 h-3 rounded-full bg-[#00ff99] mr-3 animate-pulse" />
        <h3 className="text-3xl font-bold text-[#00ff99]">{office.title}</h3>
      </div>

      {/* Basic Info */}
      <div className="space-y-3">
        <p className="text-white text-lg">{office.address1}</p>
        <p className="text-white text-lg">{office.address2}</p>
        <p className="text-[#00ff99] text-lg font-semibold">{office.phone}</p>
      </div>

      {/* Know More Button - Now more visible */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#00ff99] hover:bg-[#00cc7a] text-black py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors duration-300"
        >
          <span className="text-lg">
            {isExpanded ? "Show Less" : "Know More"}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-6"
          >
            <div className="space-y-6">
              {/* Office Details */}
              <div className="bg-black/40 rounded-xl p-6">
                <h4 className="text-[#00ff99] text-xl font-bold mb-4">
                  Office Details
                </h4>
                <ul className="text-white space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-[#00ff99] text-xl">⏰</span>
                    <span>{office.hours}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#00ff99] text-xl">📧</span>
                    <span>{office.email}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#00ff99] text-xl">💼</span>
                    <span>{office.services}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#00ff99] text-xl">👥</span>
                    <span>{office.teamSize}</span>
                  </li>
                </ul>
              </div>

              {/* Facilities */}
              <div className="bg-black/40 rounded-xl p-6">
                <h4 className="text-[#00ff99] text-xl font-bold mb-4">
                  Facilities
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {office.facilities.map((facility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-white"
                    >
                      <span className="text-[#00ff99] text-xl">✓</span>
                      {facility}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const About = () => {
  const offices = [
    {
      title: "Headquarters",
      address1: "123 Innovation Drive",
      address2: "Silicon Valley, CA 94025",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9AM - 6PM PST",
      email: "sv@company.com",
      services: "Full Service Hub",
      teamSize: "250+ employees",
      facilities: [
        "Innovation Lab",
        "Training Center",
        "Conference Rooms",
        "Cafeteria",
        "Gym",
        "Recreation Area",
        "Parking",
        "24/7 Security",
      ],
    },
    // ... other office data
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#00ff99] mb-6">
            Our Global Presence
          </h2>
          <p className="text-white text-xl max-w-3xl mx-auto">
            With offices strategically located around the world, we're
            positioned to serve our clients wherever they are.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Office Cards */}
          <div className="space-y-8">
            {offices.map((office, index) => (
              <OfficeCard key={index} office={office} />
            ))}
          </div>

          {/* Map */}
          <div className="sticky top-8 h-[700px] rounded-2xl overflow-hidden border-2 border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596834!2d-122.41941550000001!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e92b3f40b33%3A0xc6796baabd5badb6!2sSilicon%20Valley!5e0!3m2!1sen!2sus!4v1635180929619!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
