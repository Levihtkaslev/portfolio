import React from 'react';
import otapp from '../asset/ot.jpg'
import qualityapp from '../asset/quality.jpg'
import on from '../asset/1.jpg'
import tw from '../asset/2.jpg'
import th from '../asset/3.jpg'
import fo from '../asset/4.jpg'
import { FaCamera } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoIosOpen } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


const Projectview = () => {

    const showToast = (e) => {
        // Prevents the <a> from overriding the click
        toast.success("Download Started!");
      };
    return (
        <div className='flex flex-col items-center gap-24'>
            <div className='text-5xl flex gap-7'>
                <p className='text-gray-700'>My projects Screenshots</p>
                <FaCamera className='text-gray-700' />
            </div>
            <div className='md:flex md:flex-row  md:gap-20 flex flex-col  gap-14'>
                

           
           
           {/*  <div className="rounded-2xl overflow-hidden relative group h-[900px] w-1/4 ">
                <img
                    src={th}
                    className=" h-full  object-fill object-center transition-all duration-300 group-hover:blur-lg"
                    alt="otimage"
                />
                <p className="absolute text-white text-4xl top-1/2 ml-12  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Want to visit?
                </p> 
            </div> */}
            
            <div className="rounded-2xl overflow-hidden relative group md:h-[900px] md:w-1/4">
          
                <a
                    href="https://github.com/Levihtkaslev/flutter-quality/releases/download/v1.0.0/app-release.apk" onClick={showToast}
                >
                    <img
                    src={otapp}
                    className="h-full object-fill object-center transition-all duration-300 group-hover:blur-lg"
                    alt="otimage"
                    />
                  
                    <p className="flex flex-col gap-7 items-center absolute text-gray-500 text-3xl top-1/2 ml-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Download Ecommerce APP?
                    <FaDownload />
                    </p>
                    

                </a>
                <button
                    
                    className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                ><a
               href="https://ecomfronendtest3.onrender.com"target="_blank" rel="noopener noreferrer" 
                /* href="http://http://13.48.57.54:3000"target="_blank" rel="noopener noreferrer" */
            >
                    Open Web Page</a>
                </button>
                
               
                </div>
            

          

            <div className="rounded-2xl overflow-hidden relative group md:h-[900px] md:w-1/4 ">
            <a href='https://github.com/Levihtkaslev/quality-Tracker-App/releases/download/v1.0.0/app-release.apk' onClick={showToast} >
                <img
                    src={on}
                    className=" h-full  object-fill object-center transition-all duration-300 group-hover:blur-lg"
                    alt="otimage"
                />
                <p className="flex flex-col gap-7 items-center absolute text-gray-500 text-3xl text-center top-1/2 ml-3  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Download Quality Issue Tracker APP?<FaDownload />
                    <div className='text-2xl'>Credential</div>
                   <div className='text-2xl'>Location : Velachery, Department : IT, Pass : it</div> 
                    
                </p> 
                </a>
            </div>
            
            <div className="rounded-2xl overflow-hidden relative group md:h-[900px] md:w-1/4 ">
            <a href='https://github.com/Levihtkaslev/flutter-quality/releases/download/v1.0.0/app-release.apk'onClick={showToast}>
                <img
                    src={fo}
                    className=" h-full  object-fill object-center transition-all duration-300 group-hover:blur-lg"
                    alt="otimage"
                />
                <p className="flex flex-col gap-7 items-center absolute text-white text-3xl  top-1/2 ml-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Want to visit?<FaDownload />

                </p> </a>
            </div>

            <div className="rounded-2xl overflow-hidden relative group md:h-[900px] md:w-1/4 ">
             <a href='https://ecomfronendtest3.onrender.com' >
           {/*  <a href='http://13.48.57.54:3000' > */}
        
                <img
                    src={qualityapp}
                    className=" h-full  object-fill object-center transition-all duration-300 group-hover:blur-lg"
                    alt="otimage"
                />
                <p className="flex flex-col gap-7 items-center absolute text-gray-500 text-3xl top-1/2 ml-6 text-center  -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Open Ecommerce Web?<IoIosOpen />

                </p> </a>
            </div>
          
            <div className="rounded-2xl overflow-hidden relative group md:h-[900px] md:w-1/4 ">
            <a href='https://qualitytrackertest2.onrender.com/' >
          {/*  <a href='http://13.60.59.193:3000/' > */}
                <img
                    src={tw}
                    className=" h-full  object-fill object-center transition-all duration-300 group-hover:blur-lg"
                    alt="otimage"
                />
                <p className="flex flex-col gap-7 items-center absolute text-gray-500 text-3xl text-center top-1/2 ml-16  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Open Quality Web?<IoIosOpen />

                </p> </a>

                <button
                    
                    className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                ><a
                href="https://qualitytrackertest2.onrender.com"target="_blank" rel="noopener noreferrer"
            >
          {/*   <a href='http://13.60.59.193:3000/' > */}
                    Open Web Page</a>
                </button>
            </div>
           


            </div>
        </div>
    );
}

export default Projectview;