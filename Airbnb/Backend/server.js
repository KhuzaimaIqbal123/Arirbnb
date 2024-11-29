import express from "express"; // Import Express.js
import cors from "cors"; // Import CORS

const listings = import("./data/listings.json"); // Import JSON data dynamically

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/listings", (req, res) => {
  listings.then(data => res.json(data));
});

app.get("/api/listings/:id", (req, res) => {
  const listingId = parseInt(req.params.id);
  listings.then(data => {
    const listing = data.find((item) => item.id === listingId);
    if (listing) {
      res.json(listing);
    } else {
      res.status(404).json({ error: "Listing not found" });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
