import express from "express";
import cors from "cors";

// import the data
import xmasGiftsData from './data/xmas-gift-ideas.json'


// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();


// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());


// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});


// All Gifts
app.get("/gifts", (req, res) => {
  res.json(xmasGiftsData)
})

// One Gift based on id
app.get("/gifts/:giftId", (req, res) => {
  const { giftId } = req.params

  const gift = xmasGiftsData.find(gift => gift.id === +giftId)

  if (gift) {
    res.json(gift)
  } else {
    res.status(404).send("No gift was found!")
  }

})


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
