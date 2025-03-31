import React, { useState } from 'react';
import { MdVerifiedUser } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Skills = () => {
    const[all, setall] = useState(true);
    const[web, setweb] = useState(false);
    const[flut, setflut] = useState(false);

    const webshow = () => {
        setweb(true)
        setall(false)
        setflut(false)
    }

    const flutshow = () => {
        setweb(false)
        setall(false)
        setflut(true)
    }

    const allshow = () => {
        setweb(false)
        setall(true)
        setflut(false)
    }

    return(
        <div className='flex items-center flex-col justify-center my-64 '>
            <div className='text-7xl mb-8'>
                My Skills
            </div>
            <div className='text-2xl mb-20'>
                My Technical Level
            </div>
            <div className='md:flex md:flex-row flex flex-col gap-3 items-center justify-center md:gap-20 mb-24'>
                <button onClick={allshow} className={`${all ? "bg-orange-500 text-white  shadow-xl shadow-orange-300 hover:shadow-orange-500  " :"bg-black  shadow-xl shadow-gray-500 hover:shadow-gray-600" } transition-all ease-in-out duration-300 text-white text-3xl px-24 py-8 rounded-2xl group`}>All</button>
                <button onClick={webshow} className={`${web ? "bg-orange-500 text-white  shadow-xl shadow-orange-300 hover:shadow-orange-500" :"bg-black  shadow-xl shadow-gray-500 hover:shadow-gray-600" }  transition-all ease-in-out duration-300  text-white text-3xl px-14 py-8 rounded-2xl group`}>Web App</button>
                <button onClick={flutshow} className={`${flut ? "bg-orange-500 text-white  shadow-xl shadow-orange-300 hover:shadow-orange-500" :"bg-black  shadow-xl shadow-gray-500 hover:shadow-gray-600" }  transition-all ease-in-out duration-300  text-white text-3xl px-14 py-8 rounded-2xl group`}>Mobile App</button>
            </div>
            { all &&
            <div className='md:flex-row flex-col flex gap-12 text-2xl group-hover:opacity-100 group-hover:max-h-[500px] transition-all ease-in-out duration-500'>
                <div className='flex flex-col '>
                    <ul className='space-y-4'>
                    <div className='flex items-center gap-3 text-3xl font-bold mb-7'>Web App<MdVerifiedUser className='text-cyan-400' /></div>
                        <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>Backend  <span className="ml-6">-</span> Node js, Express.js
                        </li>
                        <li className='flex gap-3 items-center'>   <TiTick className='text-cyan-600'/>
                            Frontend <span className="ml-4">-</span> React js, JavaScript, Git, HTML
                        </li>
                        <li className='flex gap-3 items-center'>  <TiTick className='text-cyan-600'/>
                            Database <span className="ml-3">-</span> MongoDb
                        </li>
                        <li className='flex gap-3 items-center'>  <TiTick className='text-cyan-600'/>
                        Css<span className="ml-16 pl-3"> - </span>Tailwind, Bootstrap
                        </li>
                        
                    </ul>  
                </div>
                <div className='w-0.5  bg-black'></div>
                <div className='flex flex-col '>
                <div className='flex items-center gap-3 text-3xl font-bold  mb-7 '>Mobile App<MdVerifiedUser className='text-cyan-400' /></div>
                    <ul className='space-y-4'>
                        <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>
                            Flutter and Dart
                        </li>
                        <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>
                            Backend - Node.js, Express.js
                        </li>
                        <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>
                            Database - MongoDB and Google Firebase
                        </li>
                    </ul>
                </div>
                <div className='w-0.5  bg-black'></div>
                <div>
                    
                <div className='flex items-center gap-3 text-3xl font-bold  mb-7'>Others<MdVerifiedUser className='text-cyan-400' /></div>
                    <ul className='space-y-4'>
                    <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>
                        Zoho CRM
                        </li>
                        <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>
                        Little Bit Python, Firebase and Zoho ONE
                        </li>
                    </ul>
                </div>
            </div>}

            {
                web && <div className='flex flex-col text-2xl'>
                <ul className='space-y-4'>
                <div className='flex items-center gap-3 text-3xl font-bold  mb-7'>Web Apps<MdVerifiedUser className='text-cyan-400' /></div>
                    <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>
                        Backend  - Node js, Express.js
                    </li>
                    <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>
                        Frontend - React js, JavaScript, Git, HTML
                    </li>
                    <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>
                        Database - MongoDb
                    </li>
                    <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>
                        Css - Tailwind, Bootstrap
                    </li>
                    
                </ul>  
            </div>
            }

            {
                flut &&  <div className='flex flex-col text-2xl'>
                <div className='flex items-center gap-3 text-3xl font-bold  mb-7'>Mobile App<MdVerifiedUser className='text-cyan-400' /></div>
                <ul className='space-y-4'>
                    <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>
                        Flutter and Dart
                    </li>
                    <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>
                        Backend - Node.js, Express.js
                    </li>
                    <li className='flex gap-3 items-center'> <TiTick className='text-cyan-600'/>
                        Database - MongoDB and Google Firebase
                    </li>
                </ul>
            </div>
            }
        </div>
    );
}

export default Skills;