import { useState } from "react";

export const QuestionFive = ({ title, number }) => {
  const content = {
    context:
      "Handling HTTP 400 errors effectively in a React application involves not only managing the user experience when an error occurs but also debugging to understand the root cause, which could stem from client-side issues, despite the implication of a server-side problem.",
    bulletpoints: [
      {
        id: 1,
        title: "What is a 400 Error?",
        point:
          "A 400 error, or Bad Request error, indicates that the request sent to the server is malformed or incorrect, preventing the server from understanding or fulfilling it.",
      },
      {
        id: 2,
        title: "Why Does a 400 Error Occur?",
        point:
          "This error can arise due to various reasons like malformed request syntax, invalid request message framing, or deceptive request routing, and while it's categorized as a client error, it's crucial to investigate the specifics of the API or endpoint to understand the exact cause.",
      },
      {
        id: 3,
        title: "How to Handle 400 Errors in React?",
        point:
          "In React, handling 400 errors involves catching the error during the API call, displaying a user-friendly message to inform the user, and optionally logging the error for developer debugging. It’s crucial to manage state accordingly to ensure the UI updates in a meaningful way.",
      },
      {
        id: 4,
        title: "Debugging 400 Errors:",
        point:
          "Debugging involves checking the API documentation for required parameters, examining the request being sent for any issues in syntax or structure, and ensuring that any user input is being validated and formatted correctly before being sent in the request.",
      },
    ],
  };

  // EXAMPLE 1
  // In the fetch example, our React component does a bit of digital "asking" - it sends a request to a specific web address (the API) to ask for some data. When you click the "Fetch Photos" button, it's like sending a letter to the API saying, "Please send me the photo data you have!" If the API understands the request and everything goes smoothly, it sends back the data, which our component then displays on the webpage. If something goes wrong (like if we ask in a way the API doesn’t understand), the component will show an error message, and also give a little alert to let us know something went awry.
  // State to hold fetched data
  const [data, setData] = useState(null);
  // State to hold any error messages
  const [error, setError] = useState(null);

  // Asynchronous function to fetch data from the API
  const fetchData = async () => {
    try {
      // Sending a GET request to the API endpoint and storing the response
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );

      // If the response status is 400, throw an error with message 'Bad Request'
      if (response.status === 400) {
        throw new Error("Bad Request");
      }

      // Parsing the response data as JSON and storing it
      const result = await response.json();
      // Updating the data state with the fetched data
      setData(result);
    } catch (error) {
      // Logging the error to the console for debugging purposes
      console.error("An error occurred:", error.message);

      // Alerting the user about the error
      alert(`An error occurred: ${error.message}`);

      // Setting the error message to the component state to display in the UI
      setError(`Failed to fetch data: ${error.message}`);
    }
  };

  // ------
  // ------
  // ------
  // ------
  // ------
  // ------

  // EXAMPLE 2
  // In the post example, instead of asking for data, our React component is more like sending a package of data to the API with a note saying, "Please store this data and let me know how it went!" When you click the "Post Data" button, the component sends a small packet of data (in this case, a title, body, and userId) to the API. If the API receives and understands the data, it sends back a confirmation that we display on the webpage. If there’s a misunderstanding or any issue in sending the data, our component will show an error message and pop up an alert to inform us about the hiccup. This way, we’re not only retrieving data but also trying to store new bits of data through our component.

  // State to manage the response from the API after posting data
  const [apiResponse, setApiResponse] = useState(null);
  // State to manage any error messages
  const [apiError, setApiError] = useState(null);

  // Function to post data to the API
  const sendDataToApi = async () => {
    try {
      // Sending a POST request to the API endpoint
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos",
        {
          method: "POST",
          body: JSON.stringify({
            title: "A cool picture about Kendrick Lamar",
            body: "To Pimp a Butterfly Album Cover",
            userId: 455,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      // If the response status is 400, throw an error with message 'Bad Request'
      if (response.status === 400) {
        throw new Error("Bad Request");
      }

      // Parsing the response data as JSON
      const result = await response.json();
      // Setting the response data to state
      setApiResponse(result);
    } catch (error) {
      // Logging the error to the console for debugging purposes
      console.error("An error occurred:", error.message);
      // Alerting the user about the error
      alert(`An error occurred: ${error.message}`);
      // Setting the error message to state
      setApiError(`Failed to post data: ${error.message}`);
    }
  };

  return (
    <div className="question-outer-container">
      {/* Details HTML element to create an expandable/collapsible section */}
      <details>
        {/* Summary element to hold the clickable title for the details section */}
        <summary>
          {/* Rendering the question number and title */}
          {number} - {title}
        </summary>
        <>
          {/* Rendering the context paragraph */}
          <p>{content.context}</p>
          <>
            {/* Mapping through the bullet points and rendering them */}
            {content.bulletpoints.map((bulletPoint) => (
              <ul key={bulletPoint.id}>
                {/* Rendering the title for each bullet point */}
                <h4>{bulletPoint.title}</h4>
                {/* Rendering the content of each bullet point */}
                <li>{bulletPoint.point}</li>
              </ul>
            ))}
          </>
          {/* Button to trigger the fetchData function */}
          <button onClick={fetchData}>Fetch Photos</button>
          {/* Conditionally rendering error messages */}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {/* Conditionally rendering fetched data */}
          {data && (
            <div>
              {/* Title for the data section */}
              <h2>Photos:</h2>
              {/* Mapping through the data and rendering the title of each photo */}
              {data.slice(0, 1).map((photo) => (
                <img src={photo.url} alt={photo.title} key={photo.id} />
              ))}
            </div>
          )}
        </>
        <>
          {/* Button to trigger the sendDataToApi function */}
          <button onClick={sendDataToApi}>Send Data</button>

          {/* Conditionally rendering error messages */}
          {apiError && <p style={{ color: "red" }}>{apiError}</p>}

          {/* Conditionally rendering response data */}
          {apiResponse && (
            <div>
              <h2>Response Data:</h2>
              <p>Title: {apiResponse.title}</p>
              <p>Body: {apiResponse.body}</p>
              <p>User ID: {apiResponse.userId}</p>
            </div>
          )}
        </>
      </details>
    </div>
  );
};
