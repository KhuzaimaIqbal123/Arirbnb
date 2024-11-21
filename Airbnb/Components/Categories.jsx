import React from "react";
import "./Categories.css";

const Categories = () => {
  const categories = ["Rooms", "Icons", "Arctic", "OMG!", "Farms","Top cities","Amazing views",
    "Design","Countryside","Mansions","Chef's kitchens","Bed & Breakfasts","BeachFront","Beach",
    "Tropical","Castles","Amazing pools"];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button key={index} className="category-btn">{category}</button>
      ))}
    </div>
  );
};

export default Categories;
