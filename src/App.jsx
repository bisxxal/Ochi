 
import { useState } from 'react' 
import './App.css'
import Navbar from './Navbar'
import Heropart from './Heropart'
import Greenec from './Greenec'
import LimePart from './LimePart'
import Eyesec from './Eyesec'
import Featured from './Featured'
import ReadyTo from './ReadyTo'
import Cards from './Cards'
import LocomotiveScroll from 'locomotive-scroll';
import Fotter from './Fotter'
import Try from './Try'
 
function App() {

  const scroll = new LocomotiveScroll();  
  return (
     
      <div className='main w-full h-screen  ' >
        
        < Navbar / > 
          <Heropart/>  
          <Greenec/>   
          <LimePart/>  
          <Eyesec/>    
          <Try/>
          <Featured/>  
          <Cards/>     
          <ReadyTo/>  
          <Fotter/>      
      </div>
   
  )
}

export default App
 