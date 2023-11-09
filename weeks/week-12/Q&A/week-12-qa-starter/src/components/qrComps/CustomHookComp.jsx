import { useQRCodeGenerator } from "../../hooks/useQRCodeGenerator";

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
    <>
      <h2>Custom Hook Qr Code in Action </h2>
      {showInput ? (
        <>
          <input
            type="text"
            placeholder="i.e www.google.com"
            // We are connecting to the value attriobgute with the reacrtiveData state from the customHook
            value={url}
            // Update the url state when the input value changes
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={generateQRCode}>Generate</button>
        </>
      ) : (
        <>
          {/* Conditionally render the QR code image if qr state is truthy */}
          {qr && (
            <>
              <img src={qr} />
              <button onClick={downloadQRCode}>Download</button>
              <button onClick={repeatAction}>Repeat</button>
            </>
          )}
        </>
      )}
    </>
  );
};
