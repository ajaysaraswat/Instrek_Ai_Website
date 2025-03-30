import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// 3D Model Component
function AiModel() {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        color="#00ff99"
        wireframe
        transparent
        opacity={0.6}
        emissive="#00ff99"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

// Number Animation Component
const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * value));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{count}+</span>;
};

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden bg-gray-900">
      {/* 3D Canvas */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ff99" />
          <Suspense fallback={null}>
            <AiModel />
          </Suspense>
          <OrbitControls
            autoRotate
            autoRotateSpeed={1}
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Shaping the Future with{" "}
              <span className="text-[#00ff99] hover:text-[#00cc7a] transition-colors duration-300">
                AI & Digital Innovation
              </span>
            </motion.h1>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 mb-16">
              {[
                { label: "Years Experience", value: 10 },
                { label: "Team Members", value: 50 },
                { label: "Projects Completed", value: 100 },
                { label: "Happy Clients", value: 75 },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                >
                  <div className="text-4xl font-bold text-[#00ff99] mb-2">
                    <AnimatedNumber value={stat.value} />
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
              {[
                { name: "AI & ML", icon: "🤖" },
                { name: "IoT", icon: "🌐" },
                { name: "Blockchain", icon: "🔗" },
                { name: "Cloud", icon: "☁️" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 5,
                  }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-[#00ff99] transform transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                  <motion.div
                    className="mt-4 bg-[#00ff99] text-gray-900 py-2 px-4 rounded-full opacity-0 hover:opacity-100 transition-opacity font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    Learn More
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00ff99] text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#00cc7a] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-[#00ff99] px-8 py-4 rounded-full text-lg font-semibold border-2 border-[#00ff99] hover:bg-[#00ff99]/10 transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
