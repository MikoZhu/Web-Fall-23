import Logos from "../components/Logos";
import { LottieComponent } from "../components/AnimationComps/LottieComponent";
import { LottieAdvancedComponent } from "../components/AnimationComps/LottieAdvancedComponent";

export const Lottie = () => {
  const text = {
    heading: "Integrating animations using Lottie &  Lottie files",
    intro:
      "Lottie is an open-source animation library developed by Airbnb. It allows developers to render animations exported as JSON files from an After Effects extension called Bodymovin. LottieFiles is a platform that simplifies the process of motion design. It provides tools and resources for creating, editing, testing, collaborating, and shipping Lottie animations. ",
  };
  return (
    <>
      <Logos />
      <div>
        <h2>{text.heading}</h2>
        <p>{text.intro}</p>
      </div>
      <div className="animation-wrapper-outer">
        <div>
          <h3>Simple Animation</h3>
          <LottieComponent />
        </div>
        <div>
          <h3>Advanced Animation</h3>
          <LottieAdvancedComponent />
        </div>
      </div>
    </>
  );
};
