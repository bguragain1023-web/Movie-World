import React from "react";

export const MovieCard = ({ searchedMovie }) => {
  const { Poster, Title, imdbRating, Plot } = searchedMovie;

  return (
    <div className="container d-flex justify-content-center ">
      <div className="row border border-dark rounded-5 text-dark p-3  card-container-item shadow-lg  ">
        <div className="col-md  ">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md ">
          <h3>{Title}</h3>
          <p>IMDB: {imdbRating} </p>
          <p>{Plot?.slice(0, 100)}........</p>

          <div className="d-flex justify-content-between">
            <button className="btn btn-warning">Drama</button>
            <button className="btn btn-info">Action</button>
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-danger">Delete </button>
          </div>
        </div>
      </div>
    </div>
  );
};
