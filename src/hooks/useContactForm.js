import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export function useContactForm() {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formState.name.trim()) {
      nextErrors.name = "Please share your name.";
    }

    if (!formState.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = "Please enter a valid email.";
    }

    if (!formState.message.trim()) {
      nextErrors.message = "Tell us how we can help you.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormState(initialState);
    } else {
      setSubmitted(false);
    }
  };

  return {
    formState,
    errors,
    submitted,
    handleChange,
    handleSubmit,
  };
}
