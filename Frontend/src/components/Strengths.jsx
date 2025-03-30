import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const StrengthCard = ({ title, description, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm group"
    >
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
        {/* Orange overlay on hover */}
        <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/30 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#00ff99] mb-2 group-hover:text-orange-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const Strengths = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const strengths = [
    {
      title: "AI Innovation",
      description:
        "Cutting-edge artificial intelligence solutions for modern businesses",
      image: "/images/aiImage.jpg",
    },
    {
      title: "IoT Excellence",
      description: "Connected device solutions for the digital age",
      image: "/images/iot.png",
    },
    {
      title: "Blockchain Security",
      description:
        "Advanced blockchain implementations for secure transactions",
      image: "/images/blockchainlern.jpg",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for growing enterprises",
      image: "/images/aloudailab.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#00ff99] mb-4">
            Our Strengths
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <StrengthCard key={index} {...strength} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
