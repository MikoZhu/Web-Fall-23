// Import passport module for authentication
import passport from "passport";
// Import the user model for database operations
import { UserModel } from "../models/UserModel"; // Adjust the path according to your project structure
// Import dotenv to manage environment variables
import dotenv from "dotenv";

// Initialize dotenv to load environment variables from .env file
dotenv.config();
// Import Google OAuth 2.0 strategy for passport
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Configure passport to use Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      // Set the Google client ID from environment variables
      clientID: process.env.GOOGLE_CLIENT_ID,
      // Set the Google client secret from environment variables
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // Define the callback URL after Google authentication
      callbackURL: "http://localhost:3000/auth/google/callback",
      // Option to pass the request to the callback
      passReqToCallback: true,
    },

    // Async function to handle the authentication result
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        // Search for an existing user with the given email
        const existingUser = await UserModel.findOne({
          email: profile.emails[0].value,
        });
        // If user exists, return the user and complete authentication
        if (existingUser) {
          return done(null, existingUser);
        }
        // If user doesn't exist, create a new user
        const newUser = new UserModel({
          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
        });
        // Save the new user to the database
        await newUser.save();
        // Return the new user and complete authentication
        done(null, newUser);
      } catch (error) {
        // Handle errors during authentication process
        done(error, null);
      }
    }
  )
);

// Serialize the user for the session
passport.serializeUser((user, done) => {
  // Store user ID in session
  done(null, user.id);
});

// Deserialize the user from the session
passport.deserializeUser(async (id, done) => {
  try {
    // Find the user by ID
    const user = await UserModel.findById(id);
    // Complete deserialization and add user to the request object
    done(null, user);
  } catch (error) {
    // Handle errors in deserialization process
    done(error, null);
  }
});
