import { useRandomCatImage } from "./hooks/useRandomCatImage";

export const Cats = () => {
  // Destructure properties and methods from the useRandomCatImage hook
  const { imageUrl, showInput, generateCatImage, repeatAction } =
    useRandomCatImage();
  return (
    <div className="app">
      <h1>Random Cat Image Generator</h1>
      {showInput ? (
        <>
          {/* Render an input field for the user to enter a URL */}
          <input
            type="text"
            placeholder="Enter any URL to get a random cat image"
            // Call the generateCatImage when the input value changes
            // Note: In this specific case, the URL is not used by getRandomCatImage function,
            // it's just for demonstrating how you might pass a value
            onChange={(e) => generateCatImage(e.target.value)}
          />
          {/* Render a button that triggers the cat image generation */}
          <button onClick={() => generateCatImage()}>Generate</button>
        </>
      ) : (
        <>
          {/* Render the random cat image */}
          <img src={imageUrl} alt="Random Cat" />
          {/* Render a button that resets the UI to generate a new cat image */}
          <button onClick={repeatAction}>Repeat</button>
        </>
      )}
    </div>
  );
};
