import React from "react";
import Header from "./Component/Header";
import Searchbar from "./Component/Searchbar";
import RecipesCard from "./Component/RecipesCard";
import Recipes from "./Component/Recipes";

export default function App() {
  return (
    <div>
      <Header />
      <Searchbar />

      <Recipes />
    </div>
  );
}
