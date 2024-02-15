import { motion } from 'framer-motion'
import React from 'react'

function Heropart() {
  return (
     <>
     <div data-scroll data-scroll-section data-scroll-speed="-.3"  className='heropart  my-32    md:mt-16 md:p-0 md:h-[79vh]   md:flex md:pb-14 md:items-start  md:flex-col md:justify-between'>
            <div className='px-16 md:px-4 '>
            <h1 className='herotext text-[9.9vw] tracking-[5px] font-extrabold leading-[15.5vh] md:text-[11vw] md:leading-[8vh] '> WE CREATE</h1>
            <motion.div initial={{width:0}} animate={{width:"9rem"}} 	 transition={{ ease:[0.76, 0, 0.24, 1] ,duration:1}} className='bg-[#BAD457] overflow-hidden h-[97px] w-36 rounded-lg  inline-block md:h-[50px] md:w-10 '> <img src="hero.jpg" alt="" className=' object-cover h-full w-full'  /></motion.div> <h1 className=' inline-block text-[9.9vw] tracking-[5px] font-extrabold leading-[15.5vh] md:text-[11vw] md:leading-[8vh]'> EYE-OPENING</h1>
            <h1 className='text-[9.9vw] tracking-[5px] font-extrabold leading-[15.5vh] md:text-[11vw] md:leading-[8vh]'> PRESENTATIONS</h1>
            </div>

            <div className=  'md:w-full md:items-start md:gap-6 md:flex-col  flex justify-between items-center pt-4 px-9 border-[#575555] border-spacing-1  border-t md:mt-0 mt-24'>
                    <h1 className='md:text-[3vh] md:leading-5 pt-6 text-[5vh] text-[#575555]'>For public and private companies</h1>

                     <h1 className='md:text-[3vh] md:leading-5 text-[5vh] text-[#575555]'>From the first pitch to IPO</h1>
                    <button className=' rounded-3xl  border border-slate-950 py-2 px-4'>START THE PROJECT   </button>

            </div>
     </div>
     </>
  )
}

export default Heropart