import React from "react";
import { MovieCard } from "./MovieCard";

export const Hero = () => {
  const movieStyle = {
    backgroundImage: `url("https://www.omdbapi.com/src/poster.jpg")`,
    backgroundRepeat: "no-repeat",
    bachgroundPosition: "center",
    backgroundSize: "cover",
    height: "70vh",
  };

  return (
    <>
      {/* header */}
      <nav className="navbar py-3  nav-edit fixed-top ">
        <div className="container-fluid">
          <span className="text-white container">Movie world</span>
        </div>
      </nav>
      <div
        className="hero-section  text-light d-flex justify-content-center align-items-center flex-column "
        style={movieStyle}
      >
        <div className="main-content ">
          <div className="text-white d-flex flex-column justify-content-center align-items-center ">
            <div className="title   fs-4 fw-bolder">
              Search from millions of movies
            </div>
            <span>
              Find any movies and view descrition, rating and add to your list
            </span>
          </div>

          <div className="input-group mb-3 my-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search Movie Name "
              aria-label="Recipients username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-danger" type="button" id="button-addon2">
              Search
            </button>
          </div>

          <div className="movie-card-container">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
};
