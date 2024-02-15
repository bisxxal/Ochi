import React, {useState , useEffect } from "react";

function ReadyTo() {


  const [rotate, setRotate] = useState(0);

  useEffect (()=>{
    window.addEventListener("mousemove" , (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2; 
     let  angle = Math.atan2(deltaY , deltaX ) *(180/Math.PI) ; 
     setRotate(angle-180);

    })
  })
  return (
 
    <div  data-scroll data-scroll-speed=".6"     className='relative h-[120vh] md:h-[90vh] w-full bg-[#CDEA68] flex flex-col  justify-center items-center  md:overflow-hidden  md:justify-evenly md:py-[7vh] '>
    
             
    
    <div>

        <h1 className='  leading-[20vh] tracking-tighter  text-[#212121] text-center text-[12vw]  uppercase font-extrabold md:text-[14vw]  md:leading-[6vh]  '>Ready </h1>
        <h1 className=' leading-[20vh]  tracking-tighter text-[#212121] text-center text-[12vw]  uppercase font-extrabold md:text-[14vw] md:leading-[6vh] '>To Start </h1>
        <h1 className=' leading-[20vh]  tracking-tighter text-[#212121] text-center text-[12vw]  uppercase font-extrabold md:text-[14vw] md:leading-[6vh] '>The Project? </h1>;
    </div>
       <div className="flex flex-col justify-center items-center">
       <button className=' mt-20 px-[5vh] py-[2vh] text-white text-lg rounded-[50px] bg-[#212121] md:px-[3vh] md:py-[1.8vh] '>START THE PROJECT</button>
       <h2 className= ' mt-3 text-[3vh] md:text-[2.5vh]  '>OR</h2>
       <button className=' mt-3  px-[5vh] py-[2vh] border-black border text-lg rounded-[50px]  md:px-[3vh] md:py-[1.8vh] '>HELLO@@OCHIDESIGN</button>
        </div>     










       <div className=" overflow-hidden w-full h-screen flex absolute   justify-center items-center md:hidden ">
      <div data-scroll data-scroll-speed="-.7" className="   relative w-[100%] h-[100%]  bg-cover bg-center">
        <div className=" absolute   left-[37%]  flex gap-9    items-center justify-center top-[17%] ">



          <div className="h-[210px] z-10 rounded-[50%] flex  items-center justify-center w-[210px] bg-white ">
            <div className="h-[120px] z-10 rounded-[50%] text-white flex justify-center items-center relative w-[120px] bg-[#212121] ">  
              <div  style={{transform: `translate(-50% , -50%) rotate(${rotate}deg)` }} className=" line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10   ">
                <div className="w-7 h-7 rounded-full bg-white "></div>
              </div>
            </div>
          </div>

           

          <div className="h-[210px] z-10 rounded-[50%] flex  items-center justify-center w-[210px] bg-white ">
            <div className="h-[120px] z-10 rounded-[50%] text-white flex justify-center items-center relative w-[120px] bg-[#212121] "> 
              <div  style={{transform: `translate(-50% , -50%) rotate(${rotate}deg)` }} className=" line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10   ">
                <div className="w-7 h-7 rounded-full bg-white "></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>









    <div className=" absolute w-full top-[40%] left-[-4%]  flex   justify-center items-center md:bg-red-500 hidden md:block ">
      <div className="  bg-cover bg-center  bg-no-repeat  relative w-[100%] h-[100%] ">
        {/* <img className="h-[50%] w-[100%] object-cover" src="eyes.jpg" alt="" /> */}
        <div className=" absolute   left-[17%] top-[15%]   flex gap-9    items-center justify-center   ">



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

 </div>
  )
}

export default ReadyTo