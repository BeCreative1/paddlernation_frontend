import React from "react";
import Navbar from "@/components/Navbar";
import { useFetch } from "@/components/useFetch";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/about";
import EventSection from "@/components/EventsSection";
import Gallery from "@/components/gallery";

const LandingPage = () => {
  // const {} = useFetch(url);
  return (
    <main>
      <Navbar currentPage="Udlejning" />
      <Hero />
      <About />
      <Gallery />
      <EventSection></EventSection>
      <Footer />
    </main>
  );
};

export default LandingPage;
