import React from "react";
import { directors } from "../data";
import DirectorsItem from "./DirectorsItem";

let director=directors.map(director=>{
  return <DirectorsItem name={director.name} movies={director.movies}/>
})

function Directors() {
  return <div>{/*{code here}*/}
  <h1>Directors Page </h1>
    {director}
  </div>;
}

export default Directors;