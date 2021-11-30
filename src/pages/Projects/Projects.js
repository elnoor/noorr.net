import React from "react";
import { projectsData } from "./projectsData";

export default function Projects() {
  return (
    <div className="row">
      <div className="col-12 text-center mb-5">
        Some of the projects that i built just to have fun when I had some spare
        time.
      </div>
      {projectsData.map((project, index) => {
        return (
          <div key={index} className="col-md-6 mb-4">
            <div className="card h-100 shadow bg-dark border border-custom-color overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    height: "17rem",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              ) : (
                getPlaceholderSvg()
              )}
              <div className="card-body">
                <h5 className="card-title text-light text-opacity-75">
                  {project.name}
                </h5>
                <p className="card-text">{project.description}</p>
              </div>
              <div className="card-footer d-flex">
                {project.link && (
                  <a
                    href={project.link}
                    className="btn btn-outline-info btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkText ? project.linkText : "View"}
                  </a>
                )}
                {!project.active && (
                  <small className="text-warning text-opacity-25">
                    Removed, this project is not active
                  </small>
                )}
                {project.year && (
                  <small
                    className="text-muted ms-auto mt-auto"
                    title="The year it was developed"
                  >
                    {project.year}
                  </small>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const getPlaceholderSvg = () => {
  return (
    <svg
      className="bd-placeholder-img card-img-top"
      width="100%"
      height="17rem"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: No Image"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c"></rect>
      <text x="50%" y="50%" fill="#eceeef" dy=".3em" dx="-1.8rem">
        No Image
      </text>
    </svg>
  );
};
