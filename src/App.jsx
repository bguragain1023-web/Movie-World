import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";

function App() {
  const [movieList, setMovieList] = useState([]);
  const addMovieToList = (movie) => {
    const tempMv = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...tempMv, movie]);
  };

  const deleteFromList = (imdbID) => {
    setMovieList(movieList.filter((item) => item.imdbID !== imdbID));
  };

  return (
    <div className="wrapper">
      {/* hero section */}
      <Hero addMovieToList={addMovieToList} />

      {/* display section */}
      <Display movieList={movieList} deleteFromList={deleteFromList} />
    </div>
  );
}

export default App;
