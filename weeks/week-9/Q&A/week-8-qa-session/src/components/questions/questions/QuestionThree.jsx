export const QuestionThree = ({ title, number }) => {
  const content = {
    context:
      "This question relates to the common issue of 'Page Not Found' errors on single-page applications (SPAs) when deployed and refreshed.",
    bulletpoints: [
      {
        id: 1,
        title: "What Happens After Merging a Branch?",
        point:
          "Once a branch has been successfully merged through a pull request, the additional branch is often not automatically deleted and remains in the repository.",
      },
      {
        id: 2,
        title: "Why Consider Deleting the Branch?",
        point:
          "Cleanliness: Keeping the repository clean from stale branches which are no longer in use.",
      },
      {
        id: 3,
        title: "Why Consider Deleting the Branch?",
        point:
          "Clarity: Ensuring that team members have a clear view of active branches, avoiding any potential confusion",
      },
      {
        id: 4,
        title: "Why Consider Deleting the Branch?",
        point:
          "Avoiding Redundancy: Preventing the usage of outdated branches for new features or fixes.",
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
