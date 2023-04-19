import React from "react";
import me_avatar from "../../assets/images/me_avatar.png";
import { faqs } from "./faqs";
import WelcomeText from "./../Home/WelcomeText";

export default function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={me_avatar} className="img-thumbnail" alt="Me Avatar" />
      </div>
      <div className="col text-justified">
        <WelcomeText />
      </div>
      <div className="col-12">
        <div className="my-4 py-3 border border-custom-color rounded-1 shadow text-center">
          You can also
          <a
            className="btn btn-outline-info mx-2"
            href="/Elnur_Mammadli_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            click here
          </a>
          to get my full resume.
        </div>
      </div>
      <details className="col mt-2">
        <summary className="h4 mb-3 text-white-50">My frequent answers</summary>
        <dl className="row">
          {faqs.map((faq, index) => (
            <React.Fragment key={index}>
              <dt className="col-sm-4">{faq[0]}</dt>
              <dd className="col-sm-8">{faq[1]}</dd>
            </React.Fragment>
          ))}
        </dl>
      </details>
    </div>
  );
}
