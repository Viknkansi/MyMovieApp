import React from "react";

export default function RecipesCard({ data }) {
  return (
    <div className="w-[80%] mx-auto shadow-2xl  rounded-xl overflow-hidden">
      <img
        src={data.image}
        alt=""
        srcset=""
        className="w-full h-[300px] object-fit object-center "
      />
      <div className="p-6">
        <h2 className="font-semibold text-2xl">{data.name}</h2>
        <h2 className="font-medium "> Difficulty:  {data.difficulty}</h2>
        <h2 className="font-medium "> Cuisine: {data.cuisine}</h2>
        <h2 className="font-extralight">  Review: {data.reviewCount}</h2>
        <h2 className="border w-fit px-2 py-0.5 bg-red-500 text-white rounded mb-2  mx-[90%] "> 
          {data.rating} 
        </h2> 
        
      </div>
    </div>
  );
}
