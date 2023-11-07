import { useState } from "react";

export const StateForm = () => {
  // State object to store form variables
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isSubscribed: false,
    selectedOption: "option1",
  });

  // Event handler for form input changes
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data here
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Use State Form</h4>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            name="isSubscribed"
            checked={formData.isSubscribed}
            onChange={handleInputChange}
          />
          Subscribe to Newsletter
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="options">Select Option:</label>
        <select
          id="options"
          name="selectedOption"
          value={formData.selectedOption}
          onChange={handleInputChange}
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
