import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_4n175kl", // EmailJS에서 받은 Service ID
        "template_08vd9p7", // EmailJS에서 받은 Template ID
        formData,
        "Ayg0-ehTLggPXavZK" // EmailJS에서 받은 Public Key
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send email: " + error.text);
        }
      );
  };
  return (
    <form action="/" className="col-md-6" onSubmit={handleSubmit}>
      <label htmlFor="name" className="hidden"></label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        aria-label="Enter your name"
      />
      <label htmlFor="email" className="hidden"></label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        aria-label="Enter your email"
      />
      <label htmlFor="message" className="hidden"></label>
      <textarea
        name="message"
        id="message"
        placeholder="message"
        value={formData.message}
        onChange={handleChange}
        aria-label="Enter your message"
      ></textarea>
      <button type="submit" className="btn">
        보내기
      </button>
    </form>
  );
}
export default ContactForm;
