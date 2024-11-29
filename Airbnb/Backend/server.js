import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

// Import JSON data with assertion
import listings from './data/listings.json' assert { type: "json" };

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/listings", (req, res) => {
  res.json(listings); // Send all listings as JSON
});

app.get("/api/listings/:id", (req, res) => {
  const listingId = parseInt(req.params.id); // Get the ID from the URL
  const listing = listings.find((item) => item.id === listingId); // Find listing by ID

  if (listing) {
    res.json(listing); // Send the specific listing as JSON
  } else {
    res.status(404).json({ error: "Listing not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
