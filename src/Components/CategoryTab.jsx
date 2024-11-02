import React from "react";
import { NavLink } from "react-router-dom";

const CategoryTab = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/category/${category.category}`}
          role="tab"
          className="tab text-xl font-thin"
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryTab;
