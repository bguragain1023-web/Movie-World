import React from "react";

export const Display = () => {
  return (
    <div className="display-wrapper ">
      <div className="catagory-button">
        <div className="btn btn-primary">All</div>
        <div className="btn btn-success">Drama</div>
        <div className="btn btn-warning">Action</div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col bg-success">card1</div>
          <div className="col bg-primary">card2</div>
          <div className="col bg-warning">card3</div>
        </div>
      </div>
    </div>
  );
};
