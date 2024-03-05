import React from 'react';
import Navbar from "../navbar/navbar";
import Hero from './hero';
import Benefits from './benefits';
import Story from './story';
import Team from './team';
import Cta from '../Cta/cta';

const About = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Benefits/>
     <Story/>
     <Team/>
     <Cta/>
    </>
  )
}

export default About
