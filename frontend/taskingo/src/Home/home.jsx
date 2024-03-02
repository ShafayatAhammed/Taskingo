import React from 'react'
import Navbar from '../navbar/navbar';
import Hero from "./hero";
import Features from './features';
import Testimonial from './testimonial';
import Newsletter from './newsletter';

const Home = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Features/>
     <Testimonial/>
     <Newsletter/>
    </>
  )
}

export default Home
