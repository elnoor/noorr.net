import React, { useState } from "react";
import "./Contact.scss";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contactInfo: "",
    message: "",
    subject: "", // Honeypot spam detecting field
  });

  function onChange(e) {
    setForm((prevForm) => {
      const _prevForm = { ...prevForm };
      _prevForm[e.target.name] = e.target.value;
      return _prevForm;
    });
  }

  function onSubmit(e) {
    // "form-name" must be part of the data and its value mush match the static hidden html form that is placed in index.html file which is required by Netlify Forms
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact-form",
        ...form,
      }).toString(),
    })
      .then((res) => {
        alert(
          res.ok
            ? "Message sent!"
            : "Message didn't go though, please try again."
        );
      })
      .catch((error) => {
        alert(error);
      });

    e.preventDefault();
  }

  return (
    <div className="contact">
      <div className="text-center mb-5">
        In case you have something to tell me
      </div>

      <form className="row" onSubmit={onSubmit}>
        <div className="col-md-6 mb-3">
          <div className="form-floating">
            <input
              type="text"
              name="name"
              className="form-control shadow border-custom-color text-white-50 bg-black bg-opacity-25"
              placeholder="John Doe"
              required
              value={form.name}
              onChange={onChange}
            />
            <label>Your name</label>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-floating">
            <input
              type="text"
              name="contactInfo"
              className="form-control shadow border-custom-color text-white-50 bg-black bg-opacity-25"
              placeholder="your@email.com"
              required
              value={form.contactInfo}
              onChange={onChange}
            />
            <label>Your email or phone</label>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="form-floating">
            <textarea
              name="message"
              className="form-control shadow border-custom-color text-white-50 bg-black bg-opacity-25"
              placeholder="Message here"
              style={{ height: "7rem" }}
              required
              value={form.message}
              onChange={onChange}
            ></textarea>
            <label>Message</label>
          </div>
        </div>
        <div className="col-12 mb-4">
          {/* Honeypot field for spam detection */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="gorunmez"
            value={form.subject}
            onChange={onChange}
          />
          <button
            type="submit"
            className="btn btn-lg btn-outline-info w-25 float-end"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
