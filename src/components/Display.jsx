import React from "react";
import { MovieCard } from "./MovieCard";

export const Display = ({ movieList }) => {
  console.log(movieList);

  return (
    <div className="display-wrapper pt-4 pb-4">
      <div className="catagory-button">
        <div className="btn btn-primary">All</div>
        <div className="btn btn-success">Drama</div>
        <div className="btn btn-warning">Action</div>
      </div>

      <div className="container mt-5">
        <div className="row gy-3">
          <div className="col-md-4 gap-1">{/* <MovieCard /> */}</div>
        </div>
      </div>
    </div>
  );
};
