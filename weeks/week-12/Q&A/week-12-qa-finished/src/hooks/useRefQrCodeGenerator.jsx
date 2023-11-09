import { useState, useRef } from "react"; // Importing useState and useRef hooks from React
import QRCode from "qrcode"; // Importing the QRCode library

export const useQRCodeGenerator = () => {
  const qrRef = useRef(null); // Creating a ref object for the QR code image
  const inputRef = useRef(null); // Creating a ref object for the input element
  const [qr, setQr] = useState(""); // State for storing the QR code data URL
  const [showInput, setShowInput] = useState(true); // State for controlling the visibility of the input field

  const generateQRCode = (url) => {
    // Function to generate a QR code
    QRCode.toDataURL(
      url,
      {
        width: 800, // Sets the width of the QR code
        margin: 2, // Sets the margin around the QR code
        color: {
          dark: "#335383FF", // The color of the dark squares in the QR code
          light: "#EEEEEEFF", // The color of the light squares in the QR code
        },
      },
      (err, url) => {
        // Callback function after QR code is generated
        if (err) return console.error(err); // Logging any errors that occur during generation
        setQr(url); // Updating the QR code data URL state
        setShowInput(false); // Hiding the input field
      }
    );
  };

  const downloadQRCode = () => {
    // Function to download the QR code
    const fileName = prompt("Please enter a name for the download:", "QRCode"); // Prompting the user for a file name
    if (!fileName) return; // If no file name is entered, exit the function
    const link = document.createElement("a"); // Creating an anchor element
    link.href = qr; // Setting the href attribute to the QR code data URL
    link.download = `${fileName.replace(/\s+/g, "-")}.png`; // Setting the download attribute with the file name
    document.body.appendChild(link); // Appending the anchor to the document body
    link.click(); // Simulating a click to start the download
    document.body.removeChild(link); // Removing the anchor from the document body
  };

  const repeatAction = () => {
    // Function to reset the process
    setShowInput(true); // Resetting the state to show the input field again
  };

  return {
    // Returning the refs, state values, and functions
    qrRef,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
    inputRef,
  };
};
