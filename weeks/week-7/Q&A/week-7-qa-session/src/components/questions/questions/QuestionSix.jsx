import { useState, useEffect } from "react";

export const QuestionSix = ({ title, number }) => {
  const content = {
    context:
      "Making a POST request involves sending data to a server in a specific format, often JSON, and 'async/await' in JavaScript is used to work with asynchronous code more comfortably. The question delves into the syntax of a POST request, data handling with JSON.stringify, and the application of 'async/await' in the context of a React project.",
    bulletpoints: [
      {
        id: 1,
        title: "Syntax for a POST Fetch Request",
        point:
          "A POST fetch request is used to send data to a server. It needs a URL to send the request to, and an options object that includes method, headers, and body, where you place the data you want to send.",
      },
      {
        id: 2,
        title: "Using JSON.stringify and Data Types",
        point:
          "JSON.stringify converts JavaScript data into a JSON string. It can be used with various data types, including numbers, as it converts the entire input into a string format suitable for transmission over the network.",
      },
      {
        id: 3,
        title: "Understanding 'async' and 'await'",
        point:
          "'async' and 'await' are used to work with asynchronous code in a more synchronous manner, making it easier to read and understand. 'async' is used to declare an asynchronous function, and 'await' is used inside an 'async' function to wait for a Promise to resolve.",
      },
      {
        id: 4,
        title: "Applying 'async/await' in React",
        point:
          "In React, 'async/await' can be used for handling asynchronous operations, like fetching data, in a way that is easier to read and write. It's particularly useful when dealing with promises, like the ones returned by fetch requests.",
      },
      {
        id: 5,
        title: "What is this logic doing?",
        point:
          "The PostForm component lets users write a post with a title and body and send it to a specific place on the internet, known as an API endpoint ('https://jsonplaceholder.typicode.com/posts'). It uses useState to keep track of what the user writes (formData) and to know when the user sends the form (isSubmitted). When the user types something, handleInputChange changes formData to keep the text up-to-date. When the user sends the form, handleSubmit stops the page from reloading (which is the default) and makes isSubmitted true. Then, useEffect watches isSubmitted and when it becomes true, it runs postToApi to send the user's text to the API using a POST request. It uses JSON.stringify to turn the user's text into a format that can be sent over the internet. After sending the text and getting a response back, an alert shows the user what they sent and what the server sent back. Lastly, isSubmitted is set back to false to stop extra alerts and get ready for the next post. So, this component lets users easily send a post and see a message about what was sent.",
      },
    ],
  };

  // Keeping track of what the user types into the form
  const [formData, setFormData] = useState({ title: "", body: "" });
  // Keeping track if the form has been sent off
  const [isSubmitted, setIsSubmitted] = useState(false);

  // When the user types, update formData with the new text
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // When the user submits the form, prevent the page from reloading and note that the form was submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // If the form was submitted, send the data to the server and show an alert with the form data
  useEffect(() => {
    const postToApi = async () => {
      try {
        // Sending the user's data to the server
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        // Getting the server's response
        const postData = await response.json();
        // Showing an alert with the form data and the server's response
        alert(
          `Information Submitted: Title - ${formData.title}, Body - ${
            formData.body
          } Server Response: ${JSON.stringify(postData)}`
        );
      } catch (error) {
        // If there's an error, log it to the console
        console.error("Error during fetch:", error);
      }
    };

    // If the form was submitted, send the data and then note that we've shown the alert
    if (isSubmitted) {
      postToApi();
      setIsSubmitted(false); // Resetting to initial state to avoid multiple alerts
    }
  }, [isSubmitted, formData]);

  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
          <>
            {content.bulletpoints.map((bulletPoint) => (
              <ul key={bulletPoint.id}>
                <h4>{bulletPoint.title}</h4>
                <li>{bulletPoint.point}</li>
              </ul>
            ))}
          </>
          {/* Form Container */}
          <div className="post-form-container">
            <h2>Submit a New Post</h2>
            {/* Form for the user to input data */}
            <form onSubmit={handleSubmit}>
              {/* Label and input field for 'Title' */}
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
              <br />
              {/* Label and input field for 'Body' */}
              <label htmlFor="body">Body:</label>
              <input
                type="text"
                id="body"
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                required
              />
              <br />
              {/* Button to submit the form */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      </details>
    </div>
  );
};
