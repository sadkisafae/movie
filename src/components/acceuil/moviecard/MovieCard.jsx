import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";
export default function MovieCard({movie}) {
  return (
    <div className="card">
      <div className="poster">
       <Link to={`/Details/${movie?.id}`}>
        <img src={`/images/${movie?.Image}`}/>
        </Link>
      </div>
      <div className="rating"> {movie?.Rating} </div>
      <h3 className="title"> {movie?.Title} </h3>
      <p className="year">{movie?.ReleaseDate}</p>
    </div>
  );
}
