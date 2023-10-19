import { useState } from "react";
import { HourglassComp } from "../hourGlassComp/HourGlassComp";

export const TryCatchDecon = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mockMovieData = {
    title: "Mock Movie",
    description: "This is a mock movie description.",
    release_date: "2023-10-19",
  };

  const simulateFetchMovies = () => {
    setIsLoading(true);

    setTimeout(() => {
      try {
        setMovie(mockMovieData);
        setIsLoading(false);
      } catch (err) {
        setError("Error fetching data.");
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <>
      {isLoading ? (
        <HourglassComp height="80" width="80" colors={["#306cce", "#72a1ed"]} />
      ) : movie ? (
        <div>{/* ... */}</div>
      ) : (
        <button onClick={simulateFetchMovies}>
          Load Movie Data - Try Catch - Component Deconstructed
        </button>
      )}
    </>
  );
};
