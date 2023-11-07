import { useRef } from "react";

export const RefForm = () => {
  // Refs to store form field values
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");
  const isSubscribedRef = useRef(false);
  const selectedOptionRef = useRef("option1");

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the values from the refs
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      isSubscribed: isSubscribedRef.current.checked,
      selectedOption: selectedOptionRef.current.value,
    };

    // Process the form data here
    console.log("Form Data:", formData);

    // Clear out the inputs
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    isSubscribedRef.current.checked = false;
    selectedOptionRef.current.value = "option1"; // Reset to the first option or any default value you prefer
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>
        useRef <Form></Form>
      </h4>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" ref={messageRef} />
      </div>
      <div>
        <label>
          <input type="checkbox" name="isSubscribed" ref={isSubscribedRef} />
          Subscribe to Newsletter
        </label>
      </div>
      <div>
        <label htmlFor="options">Select Option:</label>
        <select id="options" name="selectedOption" ref={selectedOptionRef}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
