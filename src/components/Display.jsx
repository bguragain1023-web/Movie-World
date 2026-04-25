import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const Display = ({ movieList, deleteFromList }) => {
  const [displayList, setDisplayList] = useState([]);
  console.log(movieList);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const handleOnFilter = (mood) => {
    if (mood === "all") return setDisplayList(movieList);

    const filteredMovieList = movieList.filter((item) => item.mood == mood);
    setDisplayList(filteredMovieList);
  };

  return (
    <div className=" container border rounded-2 display-wrapper mt-5 pt-4 pb-4">
      <div className="catagory-button  d-flex p-2 gap-2  shadow-lg">
        <div className="btn btn-primary" onClick={() => handleOnFilter("all")}>
          All
        </div>
        <div
          className="btn btn-success"
          onClick={() => handleOnFilter("drama")}
        >
          Drama
        </div>
        <div
          className="btn btn-warning"
          onClick={() => handleOnFilter("action")}
        >
          Action
        </div>
      </div>

      <div>Total movies : {displayList.length}</div>

      <div className="container mt-5">
        <div className="row align-items-stretch gy-3  p-2">
          {displayList.map((item, i) => (
            <div className="col-md-4 gap-1" key={i}>
              <MovieCard searchedMovie={item} deleteFromList={deleteFromList} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
