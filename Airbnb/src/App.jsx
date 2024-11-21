import React from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/Searchbar";
import Categories from "../Components/Categories";
import ListingCard from "../Components/ListingCard";
import Footer from "../Components/Footer";

function App() {
  const property = {
      image: 'https://via.placeholder.com/300',
      title: 'Beautiful Beach House',
      type: 'Entire home',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 150,
      rating: 4.8
  };

  return (
      <div>
          <Navbar />
          <SearchBar />
          <Categories />
          <div className="App">
              <ListingCard property={property} />
          </div>
          <Footer />
      </div>
  );
}

export default App;