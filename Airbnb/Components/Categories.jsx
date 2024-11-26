import React, { useState } from "react";
import "./Categories.css";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const categories = [
    "Rooms", "Icons", "Arctic", "OMG!", "Farms", "Top cities", "Amazing views",
    "Design", "Countryside", "Mansions", "Chef's kitchens", "Bed & Breakfasts", 
    "BeachFront", "Beach", "Tropical", "Castles", "Amazing pools"
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-btn ${activeCategory === category ? "active" : ""}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
