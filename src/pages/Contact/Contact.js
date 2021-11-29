import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="text-center mb-5">
        In case you have something to tell me
      </div>
      <form className="row d-flex">
        <div className="col-md-6 mb-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control shadow border-custom-color text-white-50 bg-black bg-opacity-25"
              placeholder="John Doe"
            />
            <label>Your name</label>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control shadow border-custom-color text-white-50 bg-black bg-opacity-25"
              placeholder="your@email.com"
            />
            <label>Your email or phone</label>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="form-floating">
            <textarea
              className="form-control shadow border-custom-color text-white-50 bg-black bg-opacity-25"
              placeholder="Message here"
              style={{ height: "7rem" }}
            ></textarea>
            <label>Message</label>
          </div>
        </div>
        <div className="col-12 mb-4">
          <button className="btn btn-lg btn-outline-info w-25 float-end">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
