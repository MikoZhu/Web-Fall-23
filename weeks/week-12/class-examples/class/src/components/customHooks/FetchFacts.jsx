import { useFetchData } from "../../hooks/useFetchData";
export const FetchFacts = () => {
  // Using the custom hook to fetch todos
  const todosFetcher = useFetchData(
    "https://jsonplaceholder.typicode.com/todos"
  );

  // Using the custom hook to fetch comments
  const commentsFetcher = useFetchData(
    "https://jsonplaceholder.typicode.com/comments"
  );

  // Using the custom hook to fetch users
  const usersFetcher = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div>
      {/* Display for todos */}
      <div>
        {todosFetcher.isLoading ? (
          <p>Loading todos...</p>
        ) : (
          <>
            <h3>Todos</h3>
            <ul>
              {todosFetcher.data?.slice(0, 5).map((todo) => (
                <li key={todo.id}>{todo.title}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Display for comments */}
      <div>
        {commentsFetcher.isLoading ? (
          <p>Loading comments...</p>
        ) : (
          <>
            <h3>Comments</h3>
            <ul>
              {commentsFetcher.data?.slice(0, 5).map((comment) => (
                <li key={comment.id}>{comment.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Display for users */}
      <div>
        {usersFetcher.isLoading ? (
          <p>Loading users...</p>
        ) : (
          <>
            <h3>Users</h3>
            <ul>
              {usersFetcher.data?.slice(0, 5).map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
