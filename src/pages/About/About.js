import React from "react";
import me_avatar from "../../assets/images/me_avatar.png";
import { WelcomeText } from "./../Home/Home";

const faqs = [
  [
    "What is your most favorite tech stack ?",
    "Azure, Azure DevOps, .NET, .NET Core, C#, JavaScript, React, SQL Server.",
  ],
  [
    "What kind of projects do you enjoy most ?",
    "Web Applications. It is awesome when one application can be accessed anywhere any time with either zero or little restrictions.",
  ],
  ["What is next in your bucket list to learn ?", "Docker, Kubernetes"],
];

export default function About() {
  return (
    <div className="row">
      <div class="col-md-3">
        <img src={me_avatar} className="img-thumbnail" alt="Me Avatar" />
      </div>
      <div class="col text-justified">
        <WelcomeText />
      </div>
      <div class="col-12 my-4 py-3 border border-custom-color rounded-1 shadow text-center">
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
      <div class="col mt-2">
        <h4 className="mb-3 text-white-50">My frequent answers</h4>
        <dl class="row">
          {faqs.map((faq, index) => (
            <React.Fragment key={index}>
              <dt class="col-sm-4">{faq[0]}</dt>
              <dd class="col-sm-8">{faq[1]}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
  );
}
