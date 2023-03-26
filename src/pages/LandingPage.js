import React from "react";
import Navbar from "@/components/Navbar";
import { useFetch } from "@/components/useFetch";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const LandingPage = () => {
  // const {} = useFetch(url);
  return (
    <main>
      <Navbar currentPage="Udlejning" />
      <Hero />

      <Footer />
    </main>
  );
};

export default LandingPage;
