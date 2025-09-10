import React from "react";
import Header from "./Component/Header";
import Searchbar from "./Component/Searchbar";
import RecipesCard from "./Component/RecipesCard";

export default function App() {
  return (
    <div>
      <Header/>
      <Searchbar/>
      <RecipesCard/>

    </div>
  );
}
