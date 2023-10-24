import { Link } from "react-router-dom";
import { useTheme } from "../themes/ThemeContext";

export const Nav = () => {
  // Destructure and assign variables from the 'useTheme' hook
  const { theme, toggleThemeClass } = useTheme();

  return (
    <nav className="nav">
      <button onClick={toggleThemeClass}>{theme}</button>
      <ul className="app-ul">
        <li className="app-li">
          <Link to="/">Home</Link>
        </li>
        <li className="app-li">
          <Link to="/context-api">Context API</Link>
        </li>
        <li className="app-li">
          <Link to="/zustand">Zustand</Link>
        </li>
      </ul>
    </nav>
  );
};
