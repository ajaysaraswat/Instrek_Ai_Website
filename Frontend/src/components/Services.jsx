import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  LightBulbIcon,
  ArrowPathIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Strategic Consulting",
      image: "/images/strategic.webp",
      description:
        "Expert guidance to help you navigate the digital landscape and make informed technology decisions.",
      icon: LightBulbIcon,
      features: [
        "Technology Assessment",
        "Digital Strategy",
        "Innovation Roadmap",
      ],
    },
    {
      title: "Digital Transformation",
      image: "/images/digitaltrans.jpg",
      description:
        "End-to-end digital transformation services to modernize your business operations.",
      icon: ArrowPathIcon,
      features: [
        "Process Automation",
        "Digital Workflows",
        "System Integration",
      ],
    },
    {
      title: "Workforce Training",
      image: "/images/workforceTrain.jpeg",
      description:
        "Comprehensive training programs to build AI-ready teams and foster innovation.",
      icon: UserGroupIcon,
      features: [
        "AI Literacy Programs",
        "Technical Workshops",
        "Leadership Training",
      ],
    },
    {
      title: "Scalable Solutions",
      image: "/images/smartcity.avif",
      description:
        "Custom-built, scalable technology solutions that grow with your business.",
      icon: Cog6ToothIcon,
      features: ["Cloud Architecture", "Microservices", "DevOps Integration"],
    },
  ];

  const ServiceCard = ({ service, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:bg-gradient-to-br hover:from-primary-50 hover:to-white transition-all duration-300"
    >
      <div className="relative h-48 mb-6">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
      >
        Learn More
      </motion.button>
    </motion.div>
  );

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services & Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive services designed to help businesses thrive in the
            digital age
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
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
            Get Started with Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
