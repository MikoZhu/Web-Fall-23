import { BrowserRouter, Link, Routes } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
            <li className="app-li">
              <Link to="/translate">Multi-language</Link>
            </li>
            <li className="app-li">
              <Link to="/animations">Lottie Files</Link>
            </li>
            <li className="app-li">
              <Link to="/moment-js">Moment JS</Link>
            </li>
            <li className="app-li">
              <Link to="/styled-comps">Styled Components</Link>
            </li>
            <li className="app-li">
              <Link to="/burger">React Burger Menu</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
