import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ReciepeDetails() {
  const [Recipe, setRecipe] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function getAllRecipe() {
      let pre = await fetch(`https://dummyjson.com/recipes/${id}`);
      if (!pre.ok) {
        throw new Error("Problem fetching recipes");
      }
      let data = await pre.json();
      console.log(data);

      setRecipe(data);
    }
    getAllRecipe();
  }, []);

  return (
    <div className="">
      <div>
        <img src={Recipe.image} alt="" />
      </div>
      <p> Name:{Recipe.name}</p>
      <p>Ingredient: {Recipe.ingredients} </p>
      <p>Instructions: {Recipe.instructions}</p>
    </div>
  );
}
