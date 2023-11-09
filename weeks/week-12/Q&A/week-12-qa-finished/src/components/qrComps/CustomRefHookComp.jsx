import { useQRCodeGenerator } from "../../hooks/useQRCodeGenerator";

export const CustomRefHookComp = () => {
  const {
    qrRef,
    inputRef,
    qr,
    showInput,
    generateQRCode,
    downloadQRCode,
    repeatAction,
  } = useQRCodeGenerator();

  const handleGenerate = () => {
    console.log(inputRef.current.value);
    const url = inputRef.current.value; // Access the input value directly from the ref
    generateQRCode(url);
  };
  return (
    <div>
      <h1>Technigo QR Code Generator</h1>
      {showInput ? (
        <>
          <input
            ref={inputRef} // Attach the useRef to the input element
            type="text"
            placeholder="e.g. https://google.com"
          />
          <button onClick={handleGenerate}>Generate</button>
        </>
      ) : (
        <>
          {qr && (
            <>
              <img ref={qrRef} src={qr} alt="Generated QR Code" />
              <button onClick={downloadQRCode}>Download</button>
            </>
          )}
          <button onClick={repeatAction}>Repeat</button>
        </>
      )}
    </div>
  );
};
