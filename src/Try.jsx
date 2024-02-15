import React, {useState , useEffect } from "react";

function Try() {
   
  return (
    <div className="  w-full  flex   justify-center items-center md:bg-red-500 hidden md:block ">
      <div className="  bg-cover bg-center  bg-no-repeat  relative w-[100%] h-[100%] ">
        <img className="h-[50%] w-[100%] object-cover" src="eyes.jpg" alt="" />
        <div className=" absolute   left-[17%] top-[15%]   flex gap-9    items-center justify-center top-[17%] ">



          <div className="h-[150px] z-10 rounded-[50%] flex  items-center justify-center w-[150px] bg-white ">
            <div className="h-[90px] z-10 rounded-[50%] text-white flex justify-center items-center relative w-[90px] bg-[#212121] ">  
               
                <div className="w-7 h-7 absolute top-0  rounded-full bg-white "></div>
          
            </div>
          </div>

           

          <div className="h-[150px] z-10 rounded-[50%] flex  items-center justify-center w-[150px] bg-white ">
          <div className="h-[90px] z-10 rounded-[50%] text-white flex justify-center items-center relative w-[90px] bg-[#212121] ">  
               
               <div className="w-7 h-7 absolute top-0  rounded-full bg-white "></div>
         
           </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Try