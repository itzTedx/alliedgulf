import React, { useState } from "react";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

export default function ContactUs() {
  // States for contact form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
      const success = () => {};
      toast.error("Please fill your name", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
      toast.error("Please provide valid email", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (contact.length <= 0) {
      tempErrors["contact"] = true;
      isValid = false;
      toast.error("Please provide valid number", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
      toast.error("Mention your Project Details", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);

    return isValid;
  };

  //   Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");

      const res = await fetch("/api/mail", {
        body: JSON.stringify({
          email: email,
          name: name,
          contact: contact,
          company: company,
          message: message,
        }),

        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setName("");
        setEmail("");
        setContact("");
        setCompany("");
        setMessage("");
        toast.error("Oops! Something went wrong, please try again.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");

      // Reset form fields
      setName("");
      setEmail("");
      setContact("");
      setCompany("");
      setMessage("");
      toast("Thank you! We'll get back to you soon", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-6">
            <TextField
              id="name"
              label="Name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name="name"
              variant="outlined"
              className="bg-white w-full"
            />

            <TextField
              id="email"
              label="Email"
              placeholder="Your E-Mail"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              variant="outlined"
              className="bg-white w-full"
            />
            <TextField
              id="contact"
              label="Contact No"
              placeholder="Contact Number"
              type="tel"
              name="contact"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
              variant="outlined"
              className="bg-white w-full"
            />
            <TextField
              id="company"
              label="Company"
              placeholder="Company Name"
              type="text"
              name="company"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              variant="outlined"
              className="bg-white w-full"
            />
          </div>
          <h5 className="pb-3 pt-6 md:pt-12 text-lg font-medium">Optional</h5>
          <TextField
            id="message"
            label="Project Details"
            placeholder="Give more details about your project."
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
            variant="outlined"
            multiline
            cols="100%"
            rows="8"
            className="bg-white w-full"
          />

          <button className="py-2 w-full mt-6 bg-sky-700 text-white">
            {buttonText}
          </button>
        </form>
      </div>
    </>
  );
}
