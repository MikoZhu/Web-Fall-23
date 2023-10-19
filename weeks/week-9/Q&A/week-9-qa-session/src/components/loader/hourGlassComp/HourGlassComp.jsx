import { Hourglass } from "react-loader-spinner";

export const HourglassComp = ({ height, width, colors }) => {
  return (
    <Hourglass
      visible={true}
      height={height}
      width={width}
      ariaLabel="hourglass-loading"
      colors={colors}
    />
  );
};
