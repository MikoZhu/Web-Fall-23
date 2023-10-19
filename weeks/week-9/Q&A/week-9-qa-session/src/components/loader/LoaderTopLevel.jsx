import { IfElseDecon } from "./deconstructued/IfElseDecon";
import { TryCatchDecon } from "./deconstructued/TryCatchDecon";
import { TryCatch } from "./logic/TryCatch";
import { IfElse } from "./logic/IfElse";

export const LoaderTopLevel = () => {
  return (
    <>
      <h2>Importing Components Here</h2>
      <div className="buttonsFive">
        <TryCatch />
      </div>
      <div className="buttonsFive">
        <IfElse />
      </div>
      <div className="buttonsFive">
        <TryCatchDecon />
      </div>
      <div className="buttonsFive">
        <IfElseDecon />
      </div>
    </>
  );
};
