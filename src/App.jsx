import React from "react";
import Header from "./Component/Header";
import Searchbar from "./Component/Searchbar";
import RecipesCard from "./Component/RecipesCard";
import Recipes from "./Component/Recipes";
import { BrowserRouter, Route, Routes } from "react-router";
import ReciepeDetails from "./Page/ReciepeDetails";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Searchbar />
                <Recipes />
              </div>
            }
          />
          <Route path="/:id" element={<ReciepeDetails/>}/>
        </Routes  >
      </BrowserRouter>
    </div>
  );
}
