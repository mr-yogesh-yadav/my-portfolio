import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "name") {
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
      newValue = newValue.slice(0, 20);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    validateField(name, newValue);
  };

  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (value.trim() === "") {
        error = "Please enter your name";
      } else if (value.trim().length < 2) {
        error = "Name must contain at least 2 letters";
      }
    }

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (value.trim() === "") {
        error = "Please enter your email";
      } else if (!emailPattern.test(value)) {
        error = "Please enter a valid email";
      }
    }

    if (name === "subject") {
      if (value.trim() === "") {
        error = "Please enter a subject";
      } else if (value.trim().length < 5) {
        error = "Subject must contain at least 5 characters";
      }
    }

    if (name === "message") {
      if (value.trim() === "") {
        error = "Please enter your message";
      } else if (value.trim().length < 20) {
        error = "Message must contain at least 20 characters";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    const fields = ["name", "email", "subject", "message"];

    fields.forEach((field) => {
      const error = validateField(field, formData[field]);

      if (error) {
        hasError = true;
      }
    });

    if (hasError) {
      return;
    }

    try {
      setIsSending(true);

      await emailjs.send(
        "service_j36khj7",
        "template_lvmmb92",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: "VVGwAEDG2wKBmAM6Q",
        },
      );

      setIsSending(false);
      setMessageSent(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setMessageSent(false);
      }, 5000);
    } catch (error) {
      setIsSending(false);

      console.log("EmailJS Error:", error);
      alert(`Message could not be sent! ${error.text || error.message || ""}`);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <p className="contact-subtitle">GET IN TOUCH</p>

        <h1>
          Let's Build Something <span>Great</span>
        </h1>

        <p>
          Have a project, opportunity, or idea in mind? Feel free to reach out
          and let's start a conversation.
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-intro">
            <h2>Let's Connect</h2>

            <p>
              I'm open to discussing job opportunities, projects,
              collaborations, and interesting ideas.
            </p>
          </div>

          <a href="mailto:yogeshydav@gmail.com" className="contact-item">
            <div className="contact-icon">
              <MdEmail />
            </div>

            <div>
              <span>Email</span>
              <strong>yogeshydav@gmail.com</strong>
            </div>
          </a>

          <a href="tel:9571973691" className="contact-item">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <span>Phone</span>
              <strong>9571973691</strong>
            </div>
          </a>

          <a
            href="https://github.com/mr-yogesh-yadav"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <div className="contact-icon">↗</div>

            <div>
              <span>GitHub</span>
              <strong>github.com/mr-yogesh-yadav</strong>
            </div>
          </a>
        </div>

        <div className="contact-form-box">
          {messageSent ? (
            <div className="message-success">
              <div className="success-circle">
                <span>✓</span>
              </div>

              <h2>Message Sent</h2>
              <p>Thank you! Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    maxLength={20}
                    value={formData.name}
                    onChange={handleChange}
                  />

                  {errors.name && (
                    <span className="form-error">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <span className="form-error">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>

                <input
                  type="text"
                  placeholder="What would you like to discuss?"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />

                {errors.subject && (
                  <span className="form-error">{errors.subject}</span>
                )}
              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  name="message"
                  minLength={20}
                  value={formData.message}
                  onChange={handleChange}
                />

                {errors.message && (
                  <span className="form-error">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="contact-button"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span>↗</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="contact-bottom">
        <p>Available for new opportunities</p>

        <div className="availability">
          <span></span>
          Open to Work
        </div>
      </div>
    </section>
  );
}

export default Contact;
