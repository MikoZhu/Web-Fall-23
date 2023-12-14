// Import necessary libraries and modules
import express from "express"; // Import the Express.js framework
import cors from "cors"; // Import the CORS middleware
import dotenv from "dotenv"; // Import dotenv for environment variables
dotenv.config(); // Load environment variables from the .env file
import taskRoutes from "./routes/taskRoutes"; // Import custom task controlled-routes
import userRoutes from "./routes/userRoutes"; // Import custom user routes
import { connectDB } from "./config/db"; // Import database connection function (not used here)
// PASSPORT JS CONFIG
import "./middleware/passportSetup";
import passport from "passport";
import session from "express-session";

// Defines the port the app will run on. Defaults to 8080, but can be overridden
const port = process.env.PORT; // Set the port number for the server
const app = express(); // Create an instance of the Express application

// Configure session middleware
app.use(
  session({
    secret: "outkast", // Replace with a real secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using https
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// Add middlewares to enable cors and json body parsing
app.use(cors()); // Enable CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // Parse incoming JSON data
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data

// Import all Passport usage before the consuming the routes below ;)
app.use(passport.initialize());
app.use(passport.session());

// Use the routes for handling API requests
// ROUTES - These routes USE controller functions ;)
app.use(taskRoutes); // Use the task-controlled routes for task-related requests
app.use(userRoutes); // Use the user-controlled routes for user-related requests

// Connection to the database through Mongoose
connectDB();

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); // Display a message when the server is successfully started
});
