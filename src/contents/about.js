import React from 'react';
import { FaFlutter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import node from "../asset/node3.png"


const About = () => {
    return(
        <div className='mt-28 flex gap-14 justify-evenly items-center'>
            <div className='flex flex-col items-center '>
                <div className='text-7xl mb-4 text-center'>About me</div>
                <div className='text-2xl mb-10'>My Intoduction</div>
                <div className='flex gap-8 flex-col md:flex-row '>
                <div className="p-28 shadow-xl rounded-3xl md:flex md:flex-col flex-col flex items-center justify-center text-center  
  hover:shadow-orange-400 transition-all ease-in-out duration-300 hover:shadow-xl group">

                    <FaGlobe size={100} className="transition-all  duration-300 group-hover:text-orange-400" />
                    <div className="text-2xl mt-8 transition-all duration-300 group-hover:text-orange-400">
                        3+ Web Apps
                    </div>
                </div>
                <div className="p-28 shadow-xl rounded-3xl md:flex md:flex-col flex-col flex items-center justify-center text-center  
  hover:shadow-orange-400 transition-all ease-in-out duration-300 hover:shadow-xl group">
                        < FaFlutter size={100} className="transition-all duration-300 group-hover:text-orange-400" />
                        <div className='text-2xl mt-8  transition-all duration-300 group-hover:text-orange-400'>3+ Mobile Apps</div>
                    </div>
                    <div className="p-28 shadow-xl rounded-3xl md:flex md:flex-col flex-col flex items-center justify-center text-center  
  hover:shadow-orange-400 transition-all ease-in-out duration-300 hover:shadow-xl group">
                        <FaHandshakeSimple size={100} className="transition-all text-center duration-300 group-hover:text-orange-400"  />
                        <div className='text-2xl  transition-all duration-300 group-hover:text-orange-400'>5-6 Month exp</div>
                    </div>
                </div>
                <div className='text-2xl mt-10 leading-10'>
                    Backend and Frontend developer, i create web Apps and mobile Apps with UI / UX user interface. 
                </div>
                <div className='text-2xl leading-10'>
                I am fresher with 6-7 month experience and created softwares for our need and successfully Going.
                </div>
                <a 
                    href="https://drive.google.com/file/d/1ATJixhq5foRANXgeZrOHRKoKeBBUOsSF/view?usp=sharing" 
                    className="flex justify-center w-full"
                    >
                    <button className="mt-10 flex items-center gap-4 px-6 py-4 bg-black text-2xl text-white rounded-2xl shadow-lg 
                                        hover:bg-cyan-400 transition-all ease-in-out duration-300 
                                        hover:shadow-2xl hover:shadow-cyan-300 shadow-gray-500">
                        Download CV
                        <FaDownload size={25}/>
                    </button>
                    </a>

            </div>
            <div  className=' md:w-1/6  rounded shadow-2xl'>
                <img src={node} height={200}/>
            </div>
        </div>
    );
}

export default About;