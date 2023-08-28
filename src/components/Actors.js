import React from "react";
import { actors } from "../data";
import ActorsItem from "./ActorsItem";



function Actors() {
  let newActor=actors.map(actor=>{
    return <ActorsItem key={actor.id} name={actor.name} movies={actor.movies} id={actor.id}
    />
  })
  console.log(actors)
  return <div>{/*{code here}*/}
  <h1>Actors Page</h1>
  {newActor}
  </div>;
}

export default Actors;