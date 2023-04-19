import React from "react";
import Navbar from "@/components/Navbar";
import { useFetch } from "@/components/useFetch";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/about";
import EventSection from "@/components/EventsSection";

const LandingPage = () => {
  // const {} = useFetch(url);
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <EventSection></EventSection>
      <Footer />
    </main>
  );
};

export default LandingPage;
