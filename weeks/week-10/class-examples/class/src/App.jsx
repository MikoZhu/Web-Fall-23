import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";
import { Nav } from "./components/Nav";
import "./App.css";
import { ThemeProvider } from "./themes/ThemeContext";

export const App = () => {
  return (
    <ThemeProvider>
      <>
        <BrowserRouter>
          <Nav />
          <main>
            <Routes>{routes}</Routes>
          </main>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
};
