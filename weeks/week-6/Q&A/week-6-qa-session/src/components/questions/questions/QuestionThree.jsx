import questionThree from "./assets/question-three.png";
export const QuestionThree = ({ title, number }) => {
  const content = {
    context:
      "In the provided code, we have a parent component (MultiStepForm) and a child component (Name). The parent component manages the form's data using the useState hook and provides a method (updateFormData) to update this data. This method and the current form data are passed down to child components as props.",
    bulletpoints: [
      {
        id: 1,
        title: "Why?",
        point:
          "This design pattern is known as 'lifting state up.' Instead of each component having its own local state, the state is managed by a parent component and shared with child components through props. This ensures that the data is consistent across all components and allows for efficient data flow and communication between components.",
      },
      {
        id: 2,
        title: "How?",
        point: "Let's break down the data flow:",
      },
      {
        id: 3,
        title: "How? - Passing Data to Child:",
        point:
          "The parent (MultiStepForm) passes the current name value and the updateFormData function to the Name child component as props. <Name value={formData.name} updateFormData={updateFormData} /> ",
      },
      {
        id: 4,
        title: "How? - Child Component Using the Data:",
        point:
          "1. Inside the Name component, the passed value is used as the value for the input field. 2.  The updateFormData function is used to update the name value when the input changes. This is done by the userName function inside the Name component. const userName => (e) => updateFormData('name', e.target.value)",
      },
      {
        id: 5,
        title: "How? - Sending Data Back to Parent:",
        point:
          "When the user types into the Name input field, the userName function is triggered by the onChange event. This function then calls the updateFormData method (passed from the parent), updating the name field in the parent's state with the new value. Since the state in the parent is updated, any other component using this state (or any part of it) will automatically re-render with the new data.",
      },
    ],
  };
  return (
    <div className="question-outer-container">
      <details>
        <summary>
          {number} - {title}
        </summary>
        <>
          <p>{content.context}</p>
          <>
            {content.bulletpoints.map((bulletPoint, index, array) => {
              console.log(array); // This will log the entire array for each iteration
              return (
                <ul key={bulletPoint.id}>
                  <h4>{bulletPoint.title}</h4>
                  <li>{bulletPoint.point}</li>
                </ul>
              );
            })}
          </>
        </>
        <h4>Visual Example</h4>
        <img src={questionThree} alt="Data Flow Img" />
      </details>
    </div>
  );
};
