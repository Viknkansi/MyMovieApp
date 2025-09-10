import React from 'react'

export default function RecipesCard({data}) {
  return (
    <div className='w-[80%] mx-auto shadow-2xl  rounded-xl overflow-hidden'>
        <img src={data.image} alt="" srcset="" className='w-full h-[300px] object-fit object-center '  />
      <div className='p-6'>
      <h2 >{data.name}</h2>
      <h2>{data.rating}</h2>
      
      </div>
    </div>
  )
}
