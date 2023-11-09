import { useQRCodeGenerator } from "../../hooks/useQRCodeGenerator"; // Adjust the import path accordingly
export const CustomHookComp = () => {
  // Destructure properties and methods from the useQRCodeGenerator hook
  const {
    url,
    setUrl,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  return (
    <div className="">
      {/* Render the title */}
      {/* <img className="logo" src={logo} alt="" /> */}
      <h1>Technigo QR Code Generator</h1>
      {/* Conditionally render based on wether the user is inputting an URL to generate a QR Code or the user wnats to downaload the generated QR Code from the url input */}
      {/* {yourReactiveVariableThatTogglesTheDownloadQrCcodeOrInputField ? () : ()} */}
      {showInput ? (
        <>
          {/* Render an input field for the user to enter a URL */}
          <input
            type="text"
            placeholder="e.g. https://google.com"
            value={url}
            // Update the url state when the input value changes
            onChange={(e) => setUrl(e.target.value)}
          />
          {/* Render a button that triggers the QR code generation */}
          <button onClick={generateQRCode}>Generate</button>
        </>
      ) : (
        <>
          {/* Conditionally render the QR code image if qr state is truthy */}
          {qr && (
            <>
              {/* Render the QR code image */}
              <img src={qr} />
              {/* Render a button that triggers the QR code download */}
              <button onClick={downloadQRCode}>Download</button>
            </>
          )}
          {/* Render a button that resets the UI to generate a new QR code */}
          <button onClick={repeatAction}>Repeat</button>
        </>
      )}
    </div>
  );
};
