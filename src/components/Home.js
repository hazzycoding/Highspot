import React from "react";
import Contact from "./Contact";
import Faq from "./Faq";
import Footer from "./Footer";
import Hero from "./Hero";
import "./HomeStyles.css";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
