import { userStore } from "../stores/userStore";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Logos from "../components/Logos";
import { useEffect } from "react";

export const Home = () => {
  const text = {
    heading: "Vite + React + React Router + Minimal CSS",
    subheading: "Home Page",
  };
  const storeHandleLogout = userStore((state) => state.handleLogout);
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, username, accessToken, setUsername } = userStore();
  const handleGoogleLoginSuccess = userStore(
    (state) => state.handleGoogleLoginSuccess
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const accessToken = queryParams.get("accessToken");
    const username = queryParams.get("username");

    if ((accessToken, username)) {
      handleGoogleLoginSuccess(accessToken, username);
    }

    if (!localStorage.accessToken) {
      navigate("/"); // You can change this to the login route
    }
    if (localStorage.user) {
      setUsername(localStorage.user);
    }
    // Log localStorage contents
    console.log("LocalStorage contents:", localStorage);
  }, [location, handleGoogleLoginSuccess, username]);

  console.log(`
  Logged in: ${isLoggedIn}
  username: ${username}
  accessToken: ${accessToken}
  `);

  // Function to handle the click event of the logout button
  const onLogoutClick = () => {
    storeHandleLogout();
    // Additional logic after logout can be added here
    alert("Log out succesfull");
    navigate("/"); // You can change this to the login route
  };

  return (
    <>
      <nav>
        <ul className="app-ul">
          <li className="app-li">
            <Link to="/home">Home</Link>
          </li>
          <li className="app-li">
            <Link to="/tasks">Tasks</Link>
          </li>
          <li className="app-li">
            <button onClick={onLogoutClick}>Sign Out</button>
          </li>
        </ul>
      </nav>
      <Logos />
      <div className="animate__animated animate__fadeIn">
        <h1 className="heading">{text.heading}</h1>
        <h2>{text.subheading}</h2>
        <p>{text.intro}</p>
        <p>
          Hello {username} how do you do today!!, feeling productive, add a
          task.
        </p>
      </div>
    </>
  );
};
