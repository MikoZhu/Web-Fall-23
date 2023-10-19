export const QuestionThree = ({ title, number }) => {
  const content = {
    context:
      "Single-page applications (SPAs) like those built with React often face a challenge when deployed on certain hosting platforms. When a user tries to navigate directly to a deep link or refreshes the page, the server might not recognize the route, leading to a 'Page Not Found' error. This is because SPAs handle routing on the client-side, and the server is unaware of these routes.",
    bulletpoints: [
      {
        id: 1,
        title: "Why Does This Happen?",
        point:
          "In SPAs, the routing is managed by JavaScript on the client side. When you refresh the page or try to access a direct link, the server tries to find a corresponding resource for that route, which doesn't exist, leading to the error.",
      },
      {
        id: 2,
        title: "How Does 'Back to our site' Work?",
        point:
          "When you click 'Back to our site', it takes you to the root (like /index.html) which the server recognizes. From there, client-side routing can take over again.",
      },
      {
        id: 3,
        title: "What's the Solution?",
        point:
          "To address this, we can set up server-side configurations, like redirects, to always serve the main index.html file for any route. This way, the React app can handle the routing from there.",
      },
      {
        id: 4,
        title: "How Does the netlify.toml File Help?",
        point:
          "The netlify.toml file is a configuration file for Netlify deployments. By adding the provided redirect rules, we instruct Netlify to redirect all routes to the main index.html file with a 200 status. This ensures that our React app can handle the routing, and users won't encounter the 'Page Not Found' error.",
      },
    ],
  };

  //   How to Manage Branches Post-Merging:

  // Local Deletion: After a branch has been merged and is no longer needed, it is a common practice to delete it locally using git branch -d branch_name.
  // Remote Deletion: If the branch was pushed to a remote repository, it can be deleted there as well using git push origin --delete branch_name.
  // Pruning: Occasionally running git fetch -p (or git fetch --prune) to remove any remote-tracking branches for a branch that has been removed on the remote repository.

  // # Deleting the branch locally
  // git branch -d feature-branch

  // # Deleting the branch on the remote repository
  // git push origin --delete feature-branch

  // # Pruning deleted remote branches
  // git fetch -p
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
        </>
      </details>
    </div>
  );
};
