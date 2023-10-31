import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
export const BurgerMenu = () => {
  // State to control whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle the sidebar menu */}
      <button onClick={toggleMenu}>Toggle Menu</button>

      {/* Sidebar Menu */}
      <Menu isOpen={isOpen}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </Menu>
    </div>
  );
};
