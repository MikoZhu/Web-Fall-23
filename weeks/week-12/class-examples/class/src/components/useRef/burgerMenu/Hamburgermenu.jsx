import React, { useRef } from "react";
import "./HamburgerMenu.css";

export const HamburgerMenu = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("open");
  };

  return (
    <>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <div ref={menuRef} className="menu">
        <div className="menu-item">Home</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Services</div>
        <div className="menu-item">Contact</div>
      </div>
    </>
  );
};

// In this example:

// -   We define a `.menu` class that by default is off-screen due to `transform: translateX(-100%);`.
// -   An `.open` class is defined which, when applied, will bring the `.menu` on-screen with `transform: translateX(0);`.
// -   The `useRef` hook is used to get a reference to the menu `div`.
// -   The `toggleMenu` function is called when the hamburger icon (☰) is clicked. It toggles the `.open` class on the menu `div` to show or hide the menu.
// -   We have a simple styling for the `.hamburger` icon and `.menu-item` to make it look a bit nicer.

// When you click the hamburger icon, the `toggleMenu` function will toggle the `open` class on the menu, causing it to slide in and out of view.
