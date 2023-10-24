// Import the 'useTheme' hook from the ThemeContext
import { useTheme } from "../themes/ThemeContext";

export const ContextComp = () => {
  // Destructure and assign variables from the 'useTheme' hook
  const { posts } = useTheme();
  return (
    <>
      <h2>Posts</h2>
      <ul>
        {/* Map and render posts from the 'posts' array */}
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
