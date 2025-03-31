import React, { useState } from 'react';
import { FaGlobeAmericas } from "react-icons/fa";
import { IoPlanet } from "react-icons/io5";

const Education = () => {
    return (
        <div className='my-32'>
        <div className='text-7xl flex justify-center mb-12 mt-52'>My Education & Interest and Hobbies</div>
        <div className='md:flex md:flex-row md:justify-evenly hidden '>
        <div className='text-4xl flex justify-center my-14 pt-12 font-bold'>Education</div>
        <div className='text-4xl flex justify-center my-14 pt-12 font-bold'>Interest and Hobbies</div>
        </div>
        <div className='md:flex md:flex-row md:justify-evenly flex flex-col '>
        <ol class="relative border-s border-gray-200 ">                  
            <li class="mb-10 ms-7">            
            <span class="absolute flex items-center justify-center w-16 h-16 rounded-full -start-7 text-white bg-black">
                    2016
                </span>
                <div class="block ml-11 mb-32 text-3xl text-cyan-500 ">Finished SSLC in Vellore</div>
            </li>
            <li class="mb-10 ms-7">            
            <span class="absolute flex items-center justify-center w-16 h-16 rounded-full -start-7 text-white bg-black">
                    2018
                </span>
                <div class="block ml-11 mb-32 text-3xl text-cyan-500 ">Finished Higher Secondary in Vellore</div>
            </li>
            <li class="mb-10 ms-7">            
            <span class="absolute flex items-center justify-center w-16 h-16 rounded-full -start-7 text-white bg-black">
                    2021
                </span>
                <div class="block ml-11 mb-32 text-3xl text-cyan-500 ">Finished B.Sc Computer Science in Vellore</div>
            </li>
            <li class="mb-10 ms-7">            
            <span class="absolute flex items-center justify-center w-16 h-16 rounded-full -start-7 text-white bg-black">
                    2023
                </span>
                <div class="block ml-11 mb-32 text-3xl text-cyan-500 ">Finished M.Sc Computer Science in Ponneri</div>
                <div class="block ml-11 mb-32 text-3xl text-black ">Learning will not stop</div>
            </li>
        </ol>

        <div className='w-0.5 bg-gray-400'>

        </div>

        <div>
            <div className='text-3xl mb-4 font-bold'>Interest</div>
            <ul className='text-2xl space-y-3'>
                <li className='flex gap-3 items-center'>Geo-Politics <FaGlobeAmericas size={30} className='text-cyan-400'/></li>
                <li className='flex gap-3 items-center'>Space <IoPlanet size={30} className='text-cyan-400'/></li>
            </ul>
            <div className='text-3xl mt-7 mb-4 font-bold'>Hobbies</div>
            <ul className='text-2xl space-y-4'>
                <li className='flex items-end'>Listening Songs(Michael Jackson And Arr
                    
                {/*     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="70.000000pt" height="55.000000pt" viewBox="0 0 700.000000 605.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,605.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M5196 5484 c-19 -20 -26 -37 -26 -67 0 -72 21 -117 80 -173 30 -30
49 -54 42 -54 -8 0 -22 10 -31 21 -19 24 -61 19 -61 -7 0 -13 -3 -13 -22 0
-23 17 -48 6 -48 -20 0 -8 -8 -14 -17 -14 -31 0 -53 -30 -46 -62 5 -27 4 -30
-16 -23 -30 9 -41 -23 -15 -44 11 -9 18 -25 16 -38 -4 -26 -22 -32 -22 -7 0 8
-4 12 -10 9 -5 -3 -15 5 -22 19 -9 20 -14 23 -25 15 -7 -6 -13 -7 -13 -2 0 5
-7 18 -16 29 -15 19 -15 19 -9 -2 5 -19 1 -20 -41 -18 -44 3 -46 2 -40 -21 5
-19 3 -22 -14 -18 -23 6 -25 0 -8 -27 10 -15 10 -22 1 -31 -15 -15 -47 -4 -37
12 4 8 3 9 -4 5 -15 -9 -15 -31 0 -56 10 -16 10 -24 0 -40 -11 -17 -10 -21 5
-27 10 -4 24 -15 31 -25 20 -28 57 -23 71 9 12 26 14 26 25 10 17 -22 28 -22
25 1 -3 30 1 35 15 23 10 -8 16 -9 21 -1 10 16 25 12 19 -5 -7 -17 21 -21 31
-5 11 18 23 11 28 -17 3 -17 0 -34 -8 -42 -12 -12 -17 -11 -34 10 -22 27 -22
27 -95 -34 -38 -33 -55 -40 -113 -47 -148 -19 -208 -54 -386 -229 -146 -143
-168 -174 -211 -301 -21 -65 -31 -77 -106 -148 -79 -73 -130 -148 -130 -193 0
-9 -13 -22 -30 -29 -56 -23 -138 -132 -286 -383 -71 -120 -88 -142 -127 -165
-88 -51 -169 -128 -302 -287 -73 -88 -149 -174 -169 -192 -40 -35 -44 -52 -19
-89 l17 -26 -187 -186 c-102 -103 -213 -219 -246 -258 -34 -41 -94 -96 -139
-127 -44 -31 -89 -68 -101 -83 -21 -27 -52 -49 -134 -94 -43 -24 -141 -108
-347 -300 -80 -75 -244 -221 -365 -326 -239 -207 -250 -218 -240 -234 4 -6 2
-16 -4 -23 -7 -9 4 -20 43 -40 30 -16 109 -78 177 -138 171 -152 304 -253 321
-243 37 22 516 460 673 615 173 170 182 177 234 188 65 14 73 20 116 87 27 41
65 75 191 165 194 139 317 237 455 362 104 94 107 96 124 77 28 -31 97 -68
151 -81 27 -6 80 -27 118 -45 134 -66 233 -41 350 91 199 221 542 679 620 825
143 269 323 907 351 1245 6 70 3 90 -19 160 -14 44 -26 86 -26 92 0 7 26 -12
57 -42 63 -60 89 -67 130 -35 19 14 30 17 43 10 21 -11 35 2 45 42 4 14 18 36
31 49 21 19 34 23 79 21 54 -2 55 -2 69 33 22 51 57 49 87 -5 13 -22 26 -41
31 -41 31 -6 31 -2 29 120 -3 140 8 116 -111 254 -49 55 -70 90 -84 134 -18
59 -97 222 -139 291 -13 20 -27 44 -31 52 -10 20 76 -72 284 -302 l169 -187
57 66 c91 108 105 133 95 170 -12 41 -62 114 -126 182 -53 58 -334 251 -364
251 -10 0 -50 -23 -90 -50 l-73 -50 -42 47 c-22 26 -49 57 -59 70 -24 30 -38
29 -71 -3z m-698 -1533 c141 -94 212 -158 212 -190 0 -13 -41 -65 -132 -166
l-44 -48 -21 35 c-20 35 -211 185 -293 231 -24 13 -46 29 -48 35 -2 6 10 25
26 44 16 18 42 53 57 78 38 62 55 80 76 80 10 0 85 -45 167 -99z"/>
<path d="M1076 709 c-44 -34 -78 -165 -58 -219 7 -19 6 -28 -6 -36 -19 -14
-45 -146 -30 -155 29 -18 136 -30 248 -27 l124 3 8 44 c4 24 10 46 13 49 5 5
108 -20 285 -69 104 -29 304 -37 423 -16 49 9 91 17 93 20 8 7 -26 105 -44
126 -13 15 -48 26 -138 44 -66 14 -137 32 -157 42 -35 16 -82 63 -138 136 -23
30 -28 32 -43 20 -9 -7 -16 -22 -16 -34 0 -26 37 -84 61 -97 10 -6 19 -15 19
-21 0 -22 -260 21 -335 55 -27 12 -75 45 -105 73 -30 27 -66 56 -78 62 -39 21
-100 21 -126 0z"/>
</g>
</svg>
            */}       
                    
                     )</li>
            </ul>
        </div>
        </div>
        </div>

    )
} 

export default Education;