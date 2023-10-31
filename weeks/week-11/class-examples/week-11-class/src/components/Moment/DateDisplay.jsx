import moment from "moment";

export const DateDisplay = () => {
  const momentLib = moment(); // Create a new moment object and store it in 'momentLib'

  // Formatting Dates
  const fullDate = momentLib.format("MMMM Do YYYY, h:mm:ss a"); // Format the current date and time as a full date and time string
  const dayName = momentLib.format("dddd"); // Format the current date to display the day of the week
  const shortDate = momentLib.format("MMM Do YY"); // Format the current date as a short date
  const escapedYear = momentLib.format("YYYY [escaped] YYYY"); // Format the current year with the word 'escaped'
  const defaultFormat = momentLib.format(); // Format the current date and time in the default ISO format

  return (
    <div>
      <p>
        <strong>Format Dates</strong>
      </p>
      <p>Full Date and Time: {fullDate}</p>
      <p>Day of the Week: {dayName}</p>
      <p>Short Date: {shortDate}</p>
      <p>Escaped Year: {escapedYear}</p>
      <p>Default Format: {defaultFormat}</p>
    </div>
  );
};
