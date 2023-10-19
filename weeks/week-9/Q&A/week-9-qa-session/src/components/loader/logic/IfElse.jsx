import { useState } from "react";
import { Hourglass } from "react-loader-spinner";

export const IfElse = () => {
  const [movie, setMovie] = useState(null); // Initialize movie state as null
  const [isLoading, setIsLoading] = useState(false); // Initialize isLoading as false
  const [error, setError] = useState(null); // Initialize error state as null

  // Mock data to simulate fetched movie details
  const mockMovieData = {
    title: "Mock Movie",
    description: "This is a mock movie description.",
    release_date: "2023-10-19",
    // ... add more mock fields as needed
  };

  const simulateFetchMovies = () => {
    setIsLoading(true); // Set isLoading to true when button is clicked

    // Simulate a 2-second delay before "fetching" data
    const delay = setTimeout(() => {
      // For demonstration, let's assume the data fetch is successful
      const isSuccessful = true; // This can be modified to simulate failure

      if (isSuccessful) {
        setMovie(mockMovieData);
        setIsLoading(false); // Set isLoading to false when data is "loaded"
      } else {
        setError("Error fetching data.");
        setIsLoading(false);
      }
    }, 3000);

    // Clean up the timeout if component is unmounted before timeout completes
    return () => clearTimeout(delay);
  };

  return (
    <>
      {isLoading ? (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      ) : movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <p>Release Date: {movie.release_date}</p>
          {/* Display other movie details as needed */}
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <button onClick={simulateFetchMovies}>
          Load Movie Data - Logical IF Else Statement
        </button>
      )}
    </>
  );
};
