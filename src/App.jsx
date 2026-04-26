import { useState, useEffect } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";
import {
  storeInLocalSession,
  accessFromLocalSession,
  deleteFromLocalStorage,
} from "./utils/localStorage";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const mvList = accessFromLocalSession();
    mvList?.length && setMovieList(mvList);
  }, []);

  const addMovieToList = (movie) => {
    const tempMv = movieList.filter((item) => item.imdbID !== movie.imdbID);

    setMovieList([...tempMv, movie]);
    storeInLocalSession([...tempMv, movie]);
  };

  const deleteFromList = (imdbID) => {
    setMovieList(movieList.filter((item) => item.imdbID !== imdbID));
    deleteFromLocalStorage(imdbID);
  };

  return (
    <div className="wrapper bg-dark">
      {/* hero section */}
      <Hero addMovieToList={addMovieToList} />

      {/* display section */}
      <Display movieList={movieList} deleteFromList={deleteFromList} />
    </div>
  );
}

export default App;
