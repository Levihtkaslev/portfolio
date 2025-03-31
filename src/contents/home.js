import React from 'react';
import { IoIosSend } from "react-icons/io";
import image from '../asset/Passport size.jpg'

const Home = () => {

  const myEmail = "sakthivelveld13@gmail.com"; 
  const subject = encodeURIComponent("Hello from your portfolio!");
  const body = encodeURIComponent("Hi, I saw your portfolio and wanted to connect!");


    return (
        <div className='mb-64 w-full'>
        <div className="flex gap-14  justify-evenly w-full items-center  flex-col md:flex-row">

            
                <div className='flex flex-col items-center '>
                
                    <h2 className='text-9xl mt-44  '>Hey! Its Sakthi </h2>
                    <div className='h-0.5 w-96 my-11 bg-gray-500'></div>
                    <div className='text-4xl leading-relaxed'>
                        I'm Creative developer and designer in Chennai, and i'm very passionate and dedicated to my work
                    </div>
                    <a href={`mailto:?to=&from=${myEmail}&subject=${subject}&body=${body}`}>
                        <button className='my-10 px-11 py-8 bg-cyan-400 text-white shadow-xl shadow-cyan-500
                            transition-all ease-in-out duration-300 
                            hover:scale-105 
                        hover:bg-emerald-400 hover:text-white rounded-3xl text-3xl flex items-center gap-3 hover:shadow-xl hover:shadow-emerald-500'>
                            Say Hi <IoIosSend />
                        </button>
                    </a> 
                </div>
                <div className=' h-96 md:w-1/6  w-full bg-slate-900 rounded-3xl shadow-2xl '>
                    <img src={image} className="h-full object-fill object-center rounded-3xl w-full transition-all duration-300 group-hover:blur-lg"
                    alt="otimage"/>
                </div>
        </div> 
       </div>
    );
}

export default Home;