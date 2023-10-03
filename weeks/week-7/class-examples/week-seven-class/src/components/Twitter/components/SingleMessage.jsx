// Importing the `useState` hook from React to manage local state within the functional component
import { useState } from "react";

// Importing `moment` from "moment" to calculate the time since the message was posted
import moment from "moment";

// Declaring a functional component `SingleMessage` which takes `singleMessage` and `fetchPosts` as props
export const SingleMessage = ({ singleMessage, fetchPosts }) => {
  // Using `useState` to create a state variable `numLikes` and its updater function `setNumLikes`, initializing it with the `hearts` property of `singleMessage`
  const [numLikes, setNumLikes] = useState(singleMessage.hearts);

  // Using `useState` to create a state variable `liked` and its updater function `setLiked`, initializing it with `false`
  const [liked, setLiked] = useState(false);

  // Calculating the time since the message was posted using `moment` and storing it in `timeSincePosted`
  const timeSincePosted = moment(singleMessage.createdAt).fromNow();

  // Declaring a function `onLikeIncrease` to handle the logic for increasing likes and fetching posts
  const onLikeIncrease = () => {
    // Defining options for the fetch API call, specifying that the method should be "POST"
    const options = {
      method: "POST",
    };

    // Making a POST request to the API to like a message, using the message's `_id` property to target the correct message
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${singleMessage._id}/like`,
      options
    )
      // Parsing the response from the API as JSON
      .then((response) => response.json())
      // Updating the `numLikes` and `liked` state variables and fetching the updated posts
      .then(() => {
        setNumLikes(numLikes + 1);
        setLiked(true);
        fetchPosts();
      })
      // Logging any errors that occur during the fetch operation to the console
      .catch((error) => console.log(error));
  };

  // Returning JSX to render the component, which displays the message, the like button, the number of likes, and the time since the message was posted
  return (
    <div>
      <p key={singleMessage._id}>{singleMessage.message}</p>
      <div>
        <div>
          <button
            type="button"
            id="likeBtn"
            onClick={onLikeIncrease}
            // Applying inline styles to the button, changing the color to green if `liked` is true, and red otherwise
            style={liked ? { color: "green" } : { color: "red" }}
          >
            <span>like</span>
          </button>
          <span>x{singleMessage.hearts}</span>
        </div>
        <div>{timeSincePosted}</div>
      </div>
    </div>
  );
};

// Explanation:
// This SingleMessage component is designed to display individual messages from an API and manage the liking functionality. It renders a message, a like button, the number of likes, and the time elapsed since the message was posted, calculated using moment.js. When a user clicks the like button, a POST request is sent to the API to increment the like count for that specific message, the local like count state (numLikes) is updated, and the fetchPosts function is called to refresh the message list. The component also visually indicates whether a message has been liked by the user by changing the color of the like button.
