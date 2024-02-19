import React from 'react'
import Img from '../assets/note1.jpg'
import AddNotes from './AddNotes'
const Notes = () => {
  return (
    <div className='bg-red-200 h-[2000px] mt-0'>
      <h1 className='flex justify-center text-center font-extrabold text-3xl pt-10 text-yellow-50'>Your Notes Collection</h1>
      <div className="ml-10 pt-20 flex flex-wrap justify-center ">
        <div className="w-[350px] h-[350px] p-10 bg-gray-200 rounded-3xl m-3">
          <img src={Img} alt="img" className='h-[120px] w-[450px] ' />
          <h1 className='text-pink-900 font-bold text-lg'>My Note Title</h1>
          <p className='text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, itaque! Ut veritatis similique, quaerat minima tenetur molestiae. Vero, voluptate odit.</p>
        </div>
        <div className="w-[350px] h-[350px] p-10 bg-gray-200 rounded-3xl m-3">
          <img src={Img} alt="img" className='h-[120px] w-[450px] ' />
          <h1 className='text-pink-900 font-bold text-lg'>My Note Title</h1>
          <p className='text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, itaque! Ut veritatis similique, quaerat minima tenetur molestiae. Vero, voluptate odit.</p>
        </div>
        <div className="w-[350px] h-[350px] p-10 bg-gray-200 rounded-3xl m-3">
          <img src={Img} alt="img" className='h-[120px] w-[450px] ' />
          <h1 className='text-pink-900 font-bold text-lg'>My Note Title</h1>
          <p className='text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, itaque! Ut veritatis similique, quaerat minima tenetur molestiae. Vero, voluptate odit.</p>
        </div>
        <div className="w-[350px] h-[350px] p-10 bg-gray-200 rounded-3xl m-3">
          <img src={Img} alt="img" className='h-[120px] w-[450px] ' />
          <h1 className='text-pink-900 font-bold text-lg'>My Note Title</h1>
          <p className='text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, itaque! Ut veritatis similique, quaerat minima tenetur molestiae. Vero, voluptate odit.</p>
        </div>
        <div className="w-[350px] h-[350px] p-10 bg-gray-200 rounded-3xl m-3">
          <img src={Img} alt="img" className='h-[120px] w-[450px] ' />
          <h1 className='text-pink-900 font-bold text-lg'>My Note Title</h1>
          <p className='text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, itaque! Ut veritatis similique, quaerat minima tenetur molestiae. Vero, voluptate odit.</p>
        </div>
        <div className="w-[350px] h-[350px] p-10 bg-gray-200 rounded-3xl m-3">
          <img src={Img} alt="img" className='h-[120px] w-[450px] ' />
          <h1 className='text-pink-900 font-bold text-lg'>My Note Title</h1>
          <p className='text-gray-800'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, itaque! Ut veritatis similique, quaerat minima tenetur molestiae. Vero, voluptate odit.</p>
        </div>
        <AddNotes/>
    


      </div>
    </div>
  )
}

export default Notes
