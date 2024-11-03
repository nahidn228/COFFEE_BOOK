import React from "react";
import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
  //console.log(coffee)
  const { id, category, image, name, popularity, rating, origin, type } =
    coffee;
  return (
    <Link to={`/coffee/${id}`}>
      <div className="card card-compact bg-base-100 shadow-xl transition   hover:scale-105">
        <figure className="h-52">
          <img className="w-full" src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name} </h2>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popularity: {popularity}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
