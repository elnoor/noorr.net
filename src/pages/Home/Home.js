import React, { useState } from "react";
import WelcomeText from "./WelcomeText";

export default function Home() {
  const [showRevisedText, setShowRevisedText] = useState(true);
  return (
    <div className="text-justified">
      <h1 className="text-center text-light text-opacity-75">Hi there,</h1>
      <p>
        <a
          className="link-info text-decoration-none"
          href="https://www.urbandictionary.com/define.php?term=Webcome"
          target="_blank"
          rel="noreferrer"
        >
          Webcome&nbsp;
        </a>
        to my online presence.&nbsp;
        <WelcomeText showRevisedText={showRevisedText} />
        <br />
        <br />
        <em>Thank you for stopping by!</em>
      </p>

      <p className="text-end mt-5">
        I wrote
        <TextOrLink
          active={showRevisedText}
          onClick={() => setShowRevisedText(false)}
        >
          this intro
        </TextOrLink>
        and
        <TextOrLink
          active={!showRevisedText}
          onClick={() => setShowRevisedText(true)}
        >
          ChatGPT revised
        </TextOrLink>
        it for me.
      </p>
    </div>
  );
}

function TextOrLink({ children, active, onClick }) {
  return (
    <>
      &nbsp;
      {active ? (
        <a
          onClick={onClick}
          href="##"
          className="link-info text-decoration-none"
        >
          {children}
        </a>
      ) : (
        children
      )}
      &nbsp;
    </>
  );
}
