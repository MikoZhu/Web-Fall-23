// Import the necessary modules and functions
import express from "express";
import {
  registerUserController,
  loginUserController,
} from "../controllers/userController"; // Import controller functions for user registration and login
import passport from "passport";
import dotenv from "dotenv"; // Import dotenv for environment variables
dotenv.config(); // Load environment variables from the .env file

// Create an instance of the Express router
const router = express.Router();

// REGISTER ROUTE: Handle user registration
router.post("/register", registerUserController); // When a POST request is made to /register, execute the registerUserController function

// LOGIN ROUTE: Handle user login
router.post("/login", loginUserController); // When a POST request is made to /login, execute the loginUserController function

// Google OAuth Redirect Route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// Google OAuth Callback Route
// Defines the port the app will run on. Defaults to 8080, but can be overridden
const routeFromApi = process.env.LOCAL_ROUTE; // Set the port number for the server
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureMessage: "Cannot login to Google, please try again later!",
    failureRedirect: `http://localhost:5173/login`,
  }),
  (req, res) => {
    console.log(`User: ${req.user}`);
    // Check if user object is available
    if (!req.user) {
      return res.redirect(`http://localhost:5173/login`);
    }

    // Store the accessToken inside a variable
    const accessToken = req.user.accessToken;
    // Store the username retrieved from the user object inside a variabld
    const username = req.user.username;

    // Redirect to the front-end with the accessToken
    const frontendUrl = `http://localhost:5173/home?accessToken=${accessToken}&username=${encodeURIComponent(
      username
    )}`;

    res.redirect(frontendUrl);
  }
);

// Export the router for use in the main application
export default router;

// In summary, this file sets up routes using the Express router for user registration and login operations. It associates each route with the corresponding controller function. These routes define the API endpoints for handling user registration and login within the application.
