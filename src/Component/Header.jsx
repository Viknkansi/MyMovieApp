import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between p-6 shadow-md items-center ">
      <h2 className="font-bold text-shadow-lg text-xl "> Food Recipes </h2>
      <button className="flex flex-col gap-1"> 
        <span className="w-4 h-1 bg-black inline-block "></span>
        <span className="w-4 h-1 bg-black inline-block "></span>
        <span className="w-4 h-1 bg-black inline-block "></span>
      </button>
    </header>
  );
}
