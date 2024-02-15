import { motion } from 'framer-motion';
import React, { useState } from 'react' 
function Featured() {
   
  return (
    <div className='flex flex-col  items-center w-full bg-slate-50 md:overflow-hidden h-[150vh]  md:h-[210vh]'>
        <h1 className='p-16  text-[8.7vh] border-b-[1px] border-zinc-900'>Featured projects</h1>

        <div className='p-16 flex gap-10 md:flex-wrap md:item-center md:flex-col'>
        <div className='img1 group relative hover:scale-[.98] h-[80vh] w-1/2  overflow-hidden md:w-[92vw] rounded-lg bg-green-400 transition-all duration-300 ease-in-out'>
                <div className='  img1p text-[#c3e547] z-20 hidden absolute left-[30%] top-[10%] md:top1/2 md:left-[20%] group-hover:block  '>
                  <h1 className=' text-9xl  font-extrabold'>FYDE</h1></div>
                <img src="/fistpic.png" alt="" className=' object-cover h-full w-full' />
            </div>

            <div className='img1 group relative hover:scale-[.98] h-[80vh] w-1/2  overflow-hidden md:w-[92vw]  rounded-lg bg-green-400 transition-all duration-300 ease-in-out'>
                <div className='  z-10  absolute right-[30%] top-[10%] md:top1/2 md:left-[20%]  hidden group-hover:block '>
                  <h1 className='text-[#c3e547]  text-9xl  font-extrabold'>VISE</h1></div>
                <img src="/Vise.jpg" alt="" className=' object-cover h-full w-full' />
            </div>
            
        </div> 
        <button className='py-[2vh] text-white  bg-[#212121] w-[16vw] text-lg rounded-[50px]'>VIEW ALL CASE STUIDES</button>
        
    </div>
  )
}
export default Featured