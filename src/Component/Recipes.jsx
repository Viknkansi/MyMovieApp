import React from "react";
import RecipesCard from "./RecipesCard";

export default function Recipes() {
  return (
    <div className="flex flex-col gap-10 ">
      <RecipesCard />
      <RecipesCard />
      <RecipesCard />
    </div>
  );
}
