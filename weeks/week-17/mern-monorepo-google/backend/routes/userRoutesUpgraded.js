import express from "express";
import passport from "passport";
import {
  registerUserController,
  loginUserController,
} from "../controllers/userController";
import dotenv from "dotenv"; // Import dotenv for environment variables
dotenv.config(); // Load environment variables from the .env file

// Create an instance of the Express router
const router = express.Router();

// REGISTER ROUTE: Handle user registration
router.post("/register", registerUserController);

// LOGIN ROUTE: Handle user login
router.post("/login", loginUserController);

// Google OAuth Redirect Route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth Callback Route
// Defines the port the app will run on. Defaults to 8080, but can be overridden
const routeFromApi = process.env.LOCAL_ROUTE; // Set the port number for the server
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureMessage: "Cannot login to Google, please try again later!",
    failureRedirect: `${routeFromApi}/login`,
    //successRedirect: successLoginUrl,
  }),
  (req, res) => {
    console.log(`User: ${req.user}`);
    // Check if user object is available
    if (!req.user) {
      return res.redirect(`${routeFromApi}/login`);
    }

    // Assuming accessToken is stored in user object, adjust as needed
    const accessToken = req.user.accessToken;
    const username = req.user.username;

    // Redirect to the front-end with the accessToken
    const frontendUrl = `http://localhost:5173/home?accessToken=${accessToken}&username=${encodeURIComponent(
      username
    )}`;

    // Redirect to the production deployed front-end with the accessToken
    // const frontendUrl = `https://my-mern-task-app-example-one.netlify.app/home?accessToken=${accessToken}&username=${encodeURIComponent(
    //   username
    // )}`;

    res.redirect(frontendUrl);
  }
);

// Export the router for use in the main application
export default router;
