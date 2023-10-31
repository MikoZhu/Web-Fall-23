import Logos from "../components/Logos";
import { DateDisplay } from "../components/Moment/DateDisplay";
export const Moment = () => {
  const text = {
    heading:
      "moment.js is a popular JavaScript library that simplifies working with dates and times.",
    intro:
      "It provides tools for parsing, validating, manipulating, and displaying dates in a consistent manner across browsers. Developers often use it to overcome the complexities and inconsistencies of JavaScript's native Date() methods. The Date() constructor in JavaScript offers basic tools for creating and managing date and time values, but it can lead to inconsistencies and lacks easy formatting or manipulation methods. On the other hand, moment from the moment.js library provides a more robust and user-friendly approach, ensuring consistent date parsing, easy formatting, and extensive localization support. ",
  };
  return (
    <>
      <Logos />
      <div>
        <h2>{text.heading}</h2>
        <p>{text.intro}</p>
      </div>
      <DateDisplay />
    </>
  );
};
