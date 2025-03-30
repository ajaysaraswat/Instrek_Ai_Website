import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ChartBarIcon,
  SparklesIcon,
  UserGroupIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      title: "Scalability",
      description:
        "Our solutions are designed to scale with your business, ensuring long-term growth and adaptability.",
      icon: ChartBarIcon,
      details: [
        "Flexible Architecture",
        "Cloud-Native Solutions",
        "Performance Optimization",
      ],
    },
    {
      title: "Innovation",
      description:
        "We stay at the forefront of technology, bringing cutting-edge solutions to your business.",
      icon: SparklesIcon,
      details: ["Latest Technologies", "R&D Focus", "Future-Ready Solutions"],
    },
    {
      title: "Expert Team",
      description:
        "Our team of experienced professionals brings diverse expertise to every project.",
      icon: UserGroupIcon,
      details: ["Skilled Engineers", "Domain Experts", "Dedicated Support"],
    },
    {
      title: "Real-World Impact",
      description:
        "We deliver practical solutions that drive measurable business outcomes.",
      icon: GlobeAltIcon,
      details: ["Proven Results", "Industry Experience", "Customer Success"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We combine expertise, innovation, and dedication to deliver
            exceptional results for our clients
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-3 rounded-lg mr-3">
                  <advantage.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {advantage.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{advantage.description}</p>
              <ul className="space-y-2">
                {advantage.details.map((detail) => (
                  <li key={detail} className="flex items-center text-gray-600">
                    <svg
                      className="h-4 w-4 text-primary-600 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Partner With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
