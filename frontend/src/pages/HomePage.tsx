import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../components/Navbar';
const HomePage = () => {
  const styles ={
    height:'100vh',
    backgroundSize:"100vw 100vh",
    backgroundRepeat:"no-repeat",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"10px",
    objectFit:"cover"
  }
  return (
    <div>
      <Navbar/>
      <Carousel>
        <div className={`bg-note-1 h-[90vh] bg-cover 
        bg-no-repeat relative`}>
      
        </div>
        <div className={`bg-note-2 h-[90vh] bg-cover 
        bg-no-repeat relative`}>
      
        </div>
        <div className={`bg-note-3 h-[90vh] bg-cover 
        bg-no-repeat relative`}>
         
        </div>
      </Carousel>
    </div>
  )
}

export default HomePage
