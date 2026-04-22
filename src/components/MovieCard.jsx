import React from "react";

export const MovieCard = () => {
  const poster = "https://www.omdbapi.com/src/poster.jpg";
  return (
    <div className="container d-flex justify-content-center ">
      <div className="row border rounded-3 text-dark p-3  card-container-item ">
        <div className="col-md  ">
          <img src={poster} alt="" />
        </div>
        <div className="col-md ">
          <h3>moviename</h3>
          <p>IMDB:5.5</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            praesentium assumenda iste eaque
          </p>

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
