import React, { useState } from 'react';
import Img from '../assets/note1.jpg';
import { IoIosAddCircle } from "react-icons/io";

const AddNotes = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null // Change this to hold file object
  });

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (event) => {
    setFormData({
      ...formData,
      image: event.target.files[0] // Store the file object
    });
  };

  const submitNotes = (event) => {
    event.preventDefault();
    console.log('You submitted the form');
    console.log('Your new notes', formData);
    // Now you have access to all form data in formData object
  };

  return (
    <div className='flex'>
      <div className="w-[350px] h-[350px] p-10 bg-gray-200 rounded-3xl m-3 mt-20">
        <img src={Img} alt="img" className='h-[120px] w-[450px] ' />
        <div className="justify-center text-center">
          <button onClick={toggleForm} >
            <IoIosAddCircle className='text-6xl relative  top-5' />
          </button>
          <h1 className='text-pink-900 font-bold text-2xl mt-10'>Add Collection</h1>
        </div>
      </div>
      {isFormOpen && (
        <div className="w-[350px] h-[410px] bg-gray-200 rounded-3xl p-4 mt-10">
          <form onSubmit={submitNotes}>
            <div className="flex">
              <label htmlFor="image" className='mb-4 mr-2 font-semibold'>Image:</label>
              <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
            </div>
            <div className="flex mb-4">
              <label htmlFor="title" className='font-semibold mr-2'>Title: </label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} className='rounded p-1.5 w-72' />
            </div>
            <div className="">
              <label htmlFor="description" className='font-semibold '>Description:</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows={7} cols={39} className='rounded p-2' />
            </div>
            <div className="flex justify-center text-center mt-5">
              <button type="submit" className='bg-blue-800 w-[320px] p-2 ml-1 rounded'>Add Note</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddNotes;
