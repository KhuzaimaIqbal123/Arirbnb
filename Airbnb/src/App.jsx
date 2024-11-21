import React from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/Searchbar";
import Categories from "../Components/Categories";
import ListingCard from "../Components/ListingCard";
import Footer from "../Components/Footer";
import './App.css'

function App() {
  // Array of property objects
  const properties = [
    {
      image: "https://via.placeholder.com/300",
      title: "Beautiful Beach House",
      type: "Entire home",
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 150,
      rating: 4.8,
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Cozy Mountain Cabin",
      type: "Cabin",
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 200,
      rating: 4.9,
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Luxury City Apartment",
      type: "Apartment",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 300,
      rating: 4.7,
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Luxury City Apartment",
      type: "Apartment",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 300,
      rating: 4.7,
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Luxury City Apartment",
      type: "Apartment",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 300,
      rating: 4.7,
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Luxury City Apartment",
      type: "Apartment",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 300,
      rating: 4.7,
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Luxury City Apartment",
      type: "Apartment",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 300,
      rating: 4.7,
    }, {
      image: "https://via.placeholder.com/300",
      title: "Luxury City Apartment",
      type: "Apartment",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 300,
      rating: 4.7,
    }, {
      image: "https://via.placeholder.com/300",
      title: "Luxury City Apartment",
      type: "Apartment",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 300,
      rating: 4.7,
    }, {
      image: "https://via.placeholder.com/300",
      title: "Luxury City Apartment",
      type: "Apartment",
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 300,
      rating: 4.7,
    },
  ];

    return (
      <div className="main-div">
        <Navbar />
        <SearchBar />
        <Categories />
        <div className="listing-cards-container">
          {properties.map((property, index) => (
            <ListingCard key={index} property={property} />
          ))}
        </div>
        <Footer />
      </div>
  );
}

export default App;
