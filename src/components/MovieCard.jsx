import React from "react";

export const MovieCard = ({
  searchedMovie,
  handleOnDelete,
  handleOnAddToList,
  deleteFromList,
}) => {
  if (!searchedMovie) return null;
  const { Poster, imdbID, Title, imdbRating, Plot, mood } = searchedMovie;

  return (
    <div className="container d-flex justify-content-center ">
      <div className="row border border-dark rounded-5 text-dark p-3  card-container-item shadow-lg  ">
        <div className="col-md  ">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>{Title}</h3>
          <p>IMDB: {imdbRating} </p>
          <p>{Plot?.slice(0, 100)}........</p>

          {!mood && (
            <div className="d-flex justify-content-between gap-2">
              <button
                className="btn btn-warning flex-grow-1"
                onClick={() => handleOnAddToList("drama")}
              >
                Drama
              </button>
              <button
                className="btn btn-info flex-grow-1"
                onClick={() => handleOnAddToList("action")}
              >
                Action
              </button>
            </div>
          )}

          <div className="d-grid mt-3">
            <button
              className="btn btn-danger"
              onClick={!mood ? handleOnDelete : () => deleteFromList(imdbID)}
            >
              Delete{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
