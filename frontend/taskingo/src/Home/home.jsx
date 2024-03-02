import React from 'react'
import Navbar from '../navbar/navbar';
import Hero from "./hero";
import Features from './features';
import Testimonial from './testimonial';

const Home = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Features/>
     <Testimonial/>
    </>
  )
}

export default Home
