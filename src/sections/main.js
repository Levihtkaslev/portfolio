import React from 'react';
import Home from '../contents/home';
import About from '../contents/about';
import Skills from '../contents/skills';
import Works from '../contents/works';
import Education from '../contents/education';
import Contact from '../contents/contact';
import { useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from '../contents/navbar';
import Projectview from '../contents/projectview';

const Main = () => {

const Section = ({ id, children }) => {
    const ref = useRef();
    const isVisible = useInView(ref, { triggerOnce: false });

    return (
      <section
        ref={ref}
        id={id}
        className={`scroll-mt-64 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {children}
      </section>
    );
};



  return (
    <div className="">
      <Navbar />

    
      <main className="pt-60 mx-16 overflow-visible">

        
         <Section id='home' className='scroll-mt-36'>
         < Home /> 
        </Section>
        <Section id='about' className='scroll-mt-60'>
        < About /> 
        </Section>      
        <Section id='skill' className='scroll-mt-72'>
        <Skills />
        </Section>
        <Section id='work' className='scroll-mt-80'>
        <Works /> 
        <Projectview />
        </Section>
        <Section id='edu' className='scroll-mt-36'>
        <Education />
        </Section>
        <Section id='contact' className='scroll-mt-36'>
        <Contact />
        </Section> 


      </main>
    </div>
  );
}

export default Main;
