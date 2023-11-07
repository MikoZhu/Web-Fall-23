// useRandomCatImage.jsx
import { useState } from "react";
import getRandomCatImage from "random-cat-img";

export const useRandomCatImage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [showInput, setShowInput] = useState(true);

  // Function to generate a random cat image
  const generateCatImage = async (url) => {
    // Fetch a random cat image based on the given URL (you could use the URL for logging or for future enhancements)
    const catImageUrl = await getRandomCatImage();
    setImageUrl(catImageUrl);
    setShowInput(false);
  };

  // Function to reset the state and allow generating a new cat image
  const repeatAction = () => {
    setImageUrl("");
    setShowInput(true);
  };

  return {
    imageUrl,
    showInput,
    generateCatImage,
    repeatAction,
  };
};
