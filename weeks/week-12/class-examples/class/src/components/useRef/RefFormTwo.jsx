import { useRef } from "react";

export const RefFormTwo = () => {
  // Object to store refs for all form fields
  const formRefs = useRef({
    name: "",
    email: "",
    message: "",
    isSubscribed: false,
    selectedOption: "option1",
  }).current; // Use .current to get direct access to the refs object

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the values from the refs
    const formData = {
      name: formRefs.name.value,
      email: formRefs.email.value,
      message: formRefs.message.value,
      isSubscribed: formRefs.isSubscribed.checked,
      selectedOption: formRefs.selectedOption.value,
    };

    // Process the form data here
    console.log("Form Data:", formData);

    // Clear out the inputs
    formRefs.name.value = "";
    formRefs.email.value = "";
    formRefs.message.value = "";
    formRefs.isSubscribed.checked = false;
    formRefs.selectedOption.value = "option1"; // Reset to the first option or any default value you prefer
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>UseRef Form - Two</h4>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={(el) => (formRefs.name = el)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          ref={(el) => (formRefs.email = el)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          ref={(el) => (formRefs.message = el)}
        />
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="isSubscribed"
            ref={(el) => (formRefs.isSubscribed = el)}
          />
          Subscribe to Newsletter
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="options">Select Option:</label>
        <select
          id="options"
          name="selectedOption"
          ref={(el) => (formRefs.selectedOption = el)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
