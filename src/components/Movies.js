import React from "react";
import { movies } from "../data";
import MovieItem from "./MovieItem"

function Movies() {
  console.log(movies)
  let li = movies.map(movie=>{
    return <MovieItem key={movie.id} title={movie.title} time={movie.time} genres={movie.genres} id={movie.id}/>
  })

  return <div>{/*{code here}*/}
  <h1>Movies Page</h1>
  {li}
 
 
  
  </div>;
}

export default Movies;