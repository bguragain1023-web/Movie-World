import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";

function App() {
  const [movieList, setMovieList] = useState([]);
  const addMovieToList = (movie) => {
    setMovieList([...movieList, movie]);
  };
  return (
    <div className="wrapper">
      {/* hero section */}
      <Hero addMovieToList={addMovieToList} />

      {/* display section */}
      <Display movieList={movieList} />
    </div>
  );
}

export default App;
