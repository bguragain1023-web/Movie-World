import React, { useEffect, useRef, useState } from "react";
import { MovieCard } from "./MovieCard";
import { fetchFromAPI } from "../utils/axios";
import { randomChar } from "../utils/random";

export const Hero = ({ addMovieToList }) => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const [bgImg, setBgImg] = useState("");
  const [searching, setSearching] = useState(false);

  const shouldFetchRef = useRef(true);
  const searchedRef = useRef("");

  useEffect(() => {
    if (shouldFetchRef.current) {
      fetchMovie(randomChar());
      shouldFetchRef.current = false;
    }
  }, []);

  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    setSearchedMovie(movie);
    setBgImg(movie.Poster);
    setSearching(false);
  };

  const handleOnMovieSearch = () => {
    const str = searchedRef.current.value;
    fetchMovie(str || randomChar());
    searchedRef.current.value = "";
  };
  const handleOnDelete = () => {
    setSearchedMovie({});
    setSearching(true);
  };
  const handleOnAddToList = (mood) => {
    addMovieToList({ ...searchedMovie, mood });
    setSearchedMovie({});
    setSearching(true);
  };
  const movieStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
          <div className={searching ? "form-center" : "form-top"}>
            {searching && (
              <div className="text-center">
                <div className="title   fs-4 fw-bolder">
                  Search from millions of movies
                </div>
                <span>
                  Find any movies and view descrition, rating and add to your
                  list
                </span>
              </div>
            )}

            <div className="input-group mb-3 my-4">
              <input
                ref={searchedRef}
                onFocus={() => setSearching(true)}
                type="text"
                className="form-control"
                placeholder="Search Movie Name "
                aria-label="Search Movie Name "
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-danger"
                type="button"
                id="button-addon2"
                onClick={handleOnMovieSearch}
              >
                Search
              </button>
            </div>
          </div>

          {!searching && (
            <div className="movie-card-container showMovie">
              <MovieCard
                searchedMovie={searchedMovie}
                handleOnDelete={handleOnDelete}
                handleOnAddToList={handleOnAddToList}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
