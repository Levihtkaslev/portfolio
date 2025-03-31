import React, { useState } from 'react';

const Works = () => {
    return(
        
        <div className='mt-52 mb-32'>
            <div className='text-7xl flex justify-center my-14 pt-12 '>My Works And Projects</div>

            <div className='flex flex-col items-center'>
            <div className='text-3xl mb-4 font-bold'>Current Working</div>
                <div className='text-2xl text-balance leading-10 md:text-center '>
                    Currently  working in a Hospital IT Department where we just create and update our mobile apps and web apps with 3rd Party Companies.
                    Works include Software testing, api handling, Figma Designing(HIS, PACS, Mobile Apps, ZOHO ONE)
                </div>
            </div>
            <div className='flex flex-col items-center' >
                <div className='text-3xl mt-10 mb-4 font-bold'>Projects</div>
                <div className='text-2xl '>
                    <ul className='space-y-4 flex flex-col items-center leading-10'>
                        <li>
                        Integrated HIS Software with Zoho through API 
                        </li>
                        <li>
                        Mobile App with Web Dashboard For user Complaints(Developed with React JS, Node JS, MongoDB, Flutter)
                        </li>
                        
                        <li>
                        Desktop Asset Mobile App and Dashboard for My Department(Developed with React JS, Node JS, MongoDB, Flutter)
                        </li>
                        <li>
                        A Ecommerce Mobile App and Dashboard for My client(Developed with React JS, Node JS, MongoDB, Flutter, Firebase)
                        </li>
                    </ul>
                    
                   
                    
                </div>
            </div>
        </div>
    )
}

export default Works;