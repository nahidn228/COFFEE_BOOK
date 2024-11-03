import React from "react";
import { NavLink } from "react-router-dom";

const CategoryTab = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/coffees/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab text-xl font-thin ${isActive ? "tab-active" : ""}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryTab;
