import React from "react";
import Navbar from "../navbar/navbar";
import Hero from "./hero";
import Features from "./features";
import Testimonial from "./testimonial";
import Newsletter from "./newsletter";
import Cta from "../Cta/cta";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Features />
      <Testimonial />
      <Newsletter />
      <Cta/>
    </>
  );
};

export default Home;
