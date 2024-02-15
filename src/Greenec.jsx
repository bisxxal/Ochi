 
import { motion } from 'framer-motion'
import React from 'react'

function Greenec() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"   className='mt-20 rounded-t-[20px] h-[75vh]   bg-[#004D43] text-zinc-50 flex whitespace-nowrap overflow-hidden md:w-full   md:h-[28vh] md:items-center' >
   
    <div className='mt-10 h-[45vh] border-y-[0.6px]   items-center  whitespace-nowrap flex overflow-hidden tracking-[-21px] border-white md:h-[17vh]  '>
      <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:'linear' ,duration:7}}  className='pr-9   font-semibold leading-1   text-[19vw]    md:pr-4 md:treak md:tracking-[-0.1vh]'>WE ARE OCHI</motion.h1>
      <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:'linear' , duration:7}}   className='pr-9   font-semibold  leading-1   text-[19vw] md:pr-4 md:treak md:tracking-[-0.1vh]'>WE ARE OCHI</motion.h1>
     </div>     
</div>
  )
}

export default Greenec  