import React from 'react'

export default function RecipesCard() {
  return (
    <div className='w-[80%] mx-auto shadow-2xl '>
        <img src="images.jpeg" alt="" srcset="" className='w-full h-[300px] object-fit object-center '  />
      <div className='p-6'>
      <h2>Name: Rice</h2>
      <h2>Rating: 3.5</h2>
      </div>
    </div>
  )
}
