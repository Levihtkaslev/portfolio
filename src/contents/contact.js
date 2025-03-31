import React, { useState } from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";

const Contact = () => {
    const phoneNumber = "6382573772";
    const message = encodeURIComponent("Hello! I found your portfolio and wanted to connect.");
    const myEmail = "sakthivelveld13@gmail.com"; 
    const subject = encodeURIComponent("Hello from your portfolio!");
    const body = encodeURIComponent("Hi, I saw your portfolio and wanted to connect!");

    return(
        <footer className='bg-black p-8 flex flex-col items-center m-12 rounded-xl shadow-xl shadow-gray-500 hover:bg-slate-900 transition-all ease-in-out duration-300'>
            <div className='text-white text-6xl my-20 mb-12 hidden md:block'>
            <Typewriter 
                words={['Sakthi', 'Developer', 'Designer', 'React JS', 'Flutter Dart', 'Node JS']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
            />
            </div>
            <motion.div 
                className='text-white text-5xl my-8 mb-11 text-center'
                initial={{ opacity: 0, y: 50 }}  // Starts invisible & moves up
                animate={{ opacity: 1, y: 0 }}   // Fades in & moves to normal position
                transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
                >
                Talk To me?
                </motion.div>
            <div>
                <ul className='md:flex md:flex-row md:gap-72 md:mb-6 flex flex-col gap-8'>
                <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" >
                 <li><IoLogoWhatsapp  color='white' size={70} className='hover:bg-cyan-600 transition-all ease-in-out rounded-2xl ' /></li>
                </a>
                <a href={`mailto:?to=&from=${myEmail}&subject=${subject}&body=${body}`}>
                    <li><IoMdMail   color='white' size={70} className='hover:bg-cyan-600 transition-all ease-in-out rounded-2xl ' /></li>
                </a>
                <a href="https://github.com/Levihtkaslev?tab=repositories">
                    <li><FaGithub  color='white' size={70}  className='hover:bg-cyan-600 transition-all ease-in-out rounded-2xl '/></li>
                </a>
                <a href={`tel:${phoneNumber}`}>
                    <li><FaSquarePhone    color='white' size={70} className='hover:bg-cyan-600 transition-all ease-in-out rounded-2xl ' /></li>
                </a>
                </ul>
            </div>
        </footer>
    );
}

export default Contact;