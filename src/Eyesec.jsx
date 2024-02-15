import React, {useState , useEffect } from "react";

function Eyesec() {
  const [rotate, setRotate] = useState(0);

  useEffect (()=>{
    window.addEventListener("mousemove" , (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;



     let  angle = Math.atan2(deltaY , deltaX ) *(180/Math.PI) ;
    //  console.log(angle);
     setRotate(angle-180);

    })
  })
  return (
    <div className=" overflow-hidden w-full h-screen flex   justify-center items-center md:hidden ">
      <div data-scroll data-scroll-speed="-.7" className=" eyesimg relative w-[100%] h-[100%]  bg-cover bg-center">
        <div className=" absolute   left-[37%]  flex gap-9    items-center justify-center top-[17%] ">



          <div className="h-[210px] z-10 rounded-[50%] flex  items-center justify-center w-[210px] bg-white ">
            <div className="h-[120px] z-10 rounded-[50%] text-white flex justify-center items-center relative w-[120px] bg-[#212121] "> Play
              <div  style={{transform: `translate(-50% , -50%) rotate(${rotate}deg)` }} className=" line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10   ">
                <div className="w-7 h-7 rounded-full bg-white "></div>
              </div>
            </div>
          </div>

          <div className="h-[210px] z-10 rounded-[50%] flex  items-center justify-center w-[210px] bg-white ">
            <div className="h-[120px] z-10 rounded-[50%] text-white flex justify-center items-center  relative  w-[120px] bg-[#212121] ">Play
            <div  style={{transform: `translate(-50% , -50%) rotate(${rotate}deg)` }} className=" line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10   ">
                <div className="w-7 h-7 rounded-full bg-white "></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Eyesec;
