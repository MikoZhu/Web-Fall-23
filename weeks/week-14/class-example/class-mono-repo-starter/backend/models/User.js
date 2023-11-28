import mongoose from "mongoose";

import crypto from "crypto"; //  Imports the Node.js crypto library for generating secure random strings.

const { Schema } = mongoose;

export const userSchema = new Schema(
  {
    // define the username field
    username: {
      type: String,
      required: true,
      minlength: 5, // Sets a minimum length of 5 characters for 'task'
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Sets a minimum length of 5 characters for 'task'
    },
    // This is part of the SKELETON of the userModel data structure. IF THERE HAPPENS TO BE NO LOGIC TO INCLUDE AN ACCESSTOKEN FROM THE DCODER/ENGINEER THIS 'DEFAULT" KEY takes care of creating a random 128unicoded crypted accessToken for you :)
    accessToken: {
      type: String,
      default: () => crypto.randomBytes(128).toString("hex"),
    },
  },
  {
    timestamps: true,
  }
);

// Edporting userSchema all around the project
export const UserModel = mongoose.model("user", userSchema);
