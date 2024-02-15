import React from 'react'

function Cards() {
  return (
    <div  id="stick" data-scroll-section  className='w-full gap-5 h-[80vh]] flex justify-between px-16 md:flex-col   md:px-4 md:h-[100vh] md:justify-evenly md:items-center'>
        <div  data-scroll data-scroll-sticky data-scroll-target="#stick" className=' relative flex items-center justify-center w-[50vw] h-[60vh] rounded-lg bg-[#004D43] md:h-[30vh] md:p-0  md:w-[91vw] '>
            <img src="footerlogo.svg" alt="" />
            <button className='absolute bottom-7 left-8 px-5 py-2 border-[#CDEA68] border text-[#CDEA68]  rounded-3xl'>@2019-2022</button>
        </div>
        <div className='md:h-[30vh] md:w-[91vw] relative flex items-center justify-center w-[23vw] h-[60vh] rounded-lg bg-[#212121]'>
            <img src="fotter2.svg" alt="" />
            <button className='absolute bottom-7 left-8 px-5 py-2   border  text-white   rounded-3xl'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='md:h-[30vh] md:w-[91vw] relative flex items-center justify-center w-[25vw] h-[60vh] rounded-lg bg-[#212121]'>
            <img src="logo003.png" alt="" className='  h-[20%] object-contain' />
            <button className='absolute bottom-7 left-8 px-5 py-2 border  text-white   rounded-3xl'>BUSNIESS BOOT CAMP ALMINI   </button>
        </div>
    </div>
  )
}

export default Cards