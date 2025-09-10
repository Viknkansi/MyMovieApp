import React, { useEffect, useState } from "react";
import RecipesCard from "./RecipesCard";

export default function Recipes() {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    async function getAllRecipe() {
      let res = await fetch("https://dummyjson.com/recipes");
      if (!res.ok) {
        throw new Error("Problem Fetching Recipes");
      }

      let data = await res.json();
      //   console.log(data.recipes);
      setAllRecipes(data.recipes);
    }
    getAllRecipe();
  }, []);

  return (
    <div className="flex flex-col gap-10 ">
      {allRecipes.map((item) => (
        <RecipesCard data={item} key={item.id} />
      ))}
    </div>
  );
}
