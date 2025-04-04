import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyOverview from "./components/CompanyOverview";
import Strengths from "./components/Strengths";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <CompanyOverview />
        <section id="strengths">
          <Strengths />
        </section>
        <Services />
        <WhyChooseUs />
        <section id="contact">
          <CallToAction />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
