import { useState, useEffect } from "react";
export const QuestionOne = ({ title, number }) => {
  const content = {
    context:
      "In this example, useEffect is used to perform a side effect (logging a message to the console) after the data has been posted successfully. The isPosted state is used as a flag to trigger this side effect. When the data is posted successfully, isPosted is set to true, triggering the useEffect. After logging the message, isPosted is reset back to false to be ready for the next submission.",
    bulletpoints: [
      {
        id: 1,
        title: "Understanding POST Method in React:",
        point:
          "This component is a child of the QuestionDistributive component and it's also the grandChild of the App root component of this short app",
      },
      {
        id: 2,
        title: "Understanding POST Method in React:",
        point:
          "This component is a child of the QuestionDistributive component and it's also the grandChild of the App root component of this short app",
      },
      {
        id: 3,
        title: "Understanding POST Method in React:",
        point:
          "This component is a child of the QuestionDistributive component and it's also the grandChild of the App root component of this short app",
      },
    ],
  };

  // Using the useState hook to manage the state of our form data
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });

  // State to manage the post submission status
  const [isPosted, setIsPosted] = useState(false);

  // Handling input changes to update our state
  const handleChange = (e) => {
    // Using the spread operator to keep previous state and update the changed input
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    // Preventing the default form submission behaviour
    e.preventDefault();

    try {
      // Sending a POST request to the specified API endpoint
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST", // Specifying the request method as POST
          headers: {
            "Content-Type": "application/json", // Defining the content type as JSON
          },
          body: JSON.stringify(postData), // Converting our state to a JSON string
        }
      );

      // Checking if the response is not ok (if status is not 200-299)
      if (!response.ok) {
        // Throwing an error if response is not ok
        throw new Error("Network response was not ok" + response.statusText);
      }

      // Setting isPosted to true to indicate that the data has been posted successfully
      setIsPosted(true);
    } catch (error) {
      // Logging any errors to the console
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  // Using useEffect to perform a side effect after data has been posted
  useEffect(() => {
    // Checking if isPosted is true
    if (isPosted) {
      // Logging a message to the console
      console.log("Data has been posted successfully!");
      alert("Data has been posted successfully!");

      // Resetting isPosted back to false after logging the message
      setIsPosted(false);
    }
  }, [isPosted]); // Adding isPosted as a dependency, so useEffect runs when its value changes

  // EXAMPLE OF POST REQUEST
  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
          <>
            {content.bulletpoints.map((bulletPoint, index, array) => {
              console.log(array); // This will log the entire array for each iteration
              return (
                <ul key={bulletPoint.id}>
                  <h4>{bulletPoint.title}</h4>
                  <li>{bulletPoint.point}</li>
                </ul>
              );
            })}
          </>
          <form onSubmit={handleSubmit}>
            {/* Input for the title */}
            <label>
              Title:
              {/* Updating the state on user input */}
              <input
                type="text"
                name="title"
                value={postData.title}
                onChange={handleChange}
              />
            </label>
            <br />
            {/* Textarea for the body */}
            <label>
              Body:
              {/* Updating the state on user input */}
              <textarea
                name="body"
                value={postData.body}
                onChange={handleChange}
              ></textarea>
            </label>
            <br />
            {/* Submit button to trigger the form submission */}
            <button type="submit">Submit</button>
          </form>
        </>
      </details>
    </div>
  );
};
