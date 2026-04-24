import React, { useState } from "react";

export const MovieCard = ({
  searchedMovie,
  handleOnDelete,
  handleOnAddToList,
}) => {
  const { Poster, Title, imdbRating, Plot } = searchedMovie;
  const [isDelete, setIsDelete] = useState(false);

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
            <button
              className="btn btn-warning"
              onClick={() => handleOnAddToList("drama")}
            >
              Drama
            </button>
            <button
              className="btn btn-info"
              onClick={() => handleOnAddToList("action")}
            >
              Action
            </button>
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-danger" onClick={handleOnDelete}>
              Delete{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
