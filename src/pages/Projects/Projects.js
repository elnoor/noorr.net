import React from "react";
import { projectsData } from "./projectsData";


export default function Projects() {
  return (
    <div className="row">
      {projectsData.map((project, index) => {
        return (
          <div key={index} className="col-12">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-3 d-flex flex-column position-static">
                <h5 className="mb-1">{project.name}</h5>
                <p className="card-text mb-auto">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    className="btn btn-outline-info d-block width-fit-content mt-3"
                  >
                    View
                  </a>
                )}
              </div>
              <div className="col-auto d-none d-lg-block">
                {project.image ? (
                  <img src={project.image} alt={project.name} />
                ) : (
                  getPlaceholderSvg()
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
      className="bd-placeholder-img"
      width="200"
      height="250"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: Thumbnail"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#55595c"></rect>
      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
        Thumbnail
      </text>
    </svg>
  );
};
