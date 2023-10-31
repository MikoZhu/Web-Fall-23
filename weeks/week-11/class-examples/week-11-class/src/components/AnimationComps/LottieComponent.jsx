import Lottie from "lottie-react";
import halloween from "../../assets/animations/halloween-animation.json";
import onboarding from "../../assets/animations/onboarding.json";

export const LottieComponent = () => {
  const styles = {
    height: 300,
  };

  return (
    <div className="animation-wrapper-outer">
      <Lottie animationData={halloween} style={styles} />
      <Lottie animationData={onboarding} style={styles} />
    </div>
  );
};
