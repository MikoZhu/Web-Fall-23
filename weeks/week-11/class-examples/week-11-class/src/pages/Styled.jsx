import Logos from "../components/Logos";
import { StyledCompExample } from "../components/StyledComps/StyledCompExample";
import { StyledCompStructure } from "../components/StyledComps/StyledCompFolderStructure/StyledCompStructure";
import { StyledComponentWithProps } from "../components/StyledComps/StyledCompWithProps";
import { StyledExtendedExample } from "../components/StyledComps/StyledExtendedExample";

export const Styled = () => {
  const text = {
    heading: "Styling components with Styled Comps",
    intro:
      "Styled-components is a library for React and React Native that allows you to use component-level styles in your application. It enhances the way you can style your components by allowing you to write actual CSS code in your JavaScript.",
  };
  return (
    <>
      <Logos />
      <div>
        <h2>{text.heading}</h2>
        <p>{text.intro}</p>
      </div>
      <div>
        <h3>Styling Comps</h3>
        <StyledCompExample />
        <StyledCompStructure />
      </div>
      <div>
        <h3>Styling Comps with Props</h3>
        <StyledComponentWithProps />
      </div>
      <div>
        <h3>Styling Comps with extende properties</h3>
        <StyledExtendedExample />
      </div>
    </>
  );
};
