// import React from 'react'
// import Img from '../assets/note1.jpg'
// import { IoIosAddCircle } from "react-icons/io";
// const AddNotes = () => {
//   return (
//     <div>
//        <div className="w-[350px] h-[350px] p-10 bg-gray-200 rounded-3xl m-3">
//           <img src={Img} alt="img" className='h-[120px] w-[450px] ' />
//           <div className="justify-center text-center">
//            <IoIosAddCircle className='text-6xl relative left-[100px] top-5' />
//           <h1 className='text-pink-900 font-bold text-2xl mt-10'>Add Collection</h1>
//           </div>
          
//         </div>
//     </div>
//   )
// }

// export default AddNotes


import React, { useState } from 'react';
import Img from '../assets/note1.jpg';
import { IoIosAddCircle } from "react-icons/io";

const AddNotes = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div>
      <div className="w-[350px] h-[350px] p-10 bg-gray-200 rounded-3xl m-3">
        <img src={Img} alt="img" className='h-[120px] w-[450px] ' />
        <div className="justify-center text-center">
          <button onClick={toggleForm}>
            <IoIosAddCircle className='text-6xl relative left-[100px] top-5' />
          </button>
          <h1 className='text-pink-900 font-bold text-2xl mt-10'>Add Collection</h1>
        </div>
      </div>
      {isFormOpen && (
        <div className="w-[350px] bg-gray-200 rounded-3xl p-4">
          <form>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows="4" />
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" accept="image/*" />
            <button type="submit">Add Note</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddNotes;
