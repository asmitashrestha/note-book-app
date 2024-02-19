

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from '../components/Navbar';
import Note1 from '../assets/note1.jpg';
import Note2 from '../assets/note2.jpg';
import Note3 from '../assets/note3.jpg';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Carousel showThumbs={false}>
        <div className="h-[90vh] relative">
          <img src={Note1} alt="Note 1" className="w-full h-full object-cover" />
        </div>
        <div className="h-[90vh] relative">
          <img src={Note2} alt="Note 2" className="w-full h-full object-cover" />
        </div>
        <div className="h-[90vh] relative">
          <img src={Note3} alt="Note 3" className="w-full h-full object-cover" />
        </div>
      </Carousel>
    </div>
  );
}

export default HomePage;
