import React from "react";
import "./Skills.scss";
import { skillsData, SKILL_LEVEL } from "./skillsData.js";

export default function Skills() {
  return (
    <div className="skills">
      <div className="row">
        <div className="col-12 text-center mb-5">
          Some of the skills that I possess.
        </div>
        <div className="table-responsive">
          <table className="table text-secondary table-hover table-dark">
            <thead>
              <tr className="text-light text-opacity-75">
                <th scope="col" className="col-2">
                  Skills
                </th>
                {Object.keys(SKILL_LEVEL).map((level) => {
                  return (
                    <th key={level} scope="col-2" className="text-center col-2">
                      {level}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {skillsData.map((skill, index) => {
                return (
                  <tr key={index} className="border-custom-color text-center">
                    <td className="text-start">{skill[0]}</td>
                    {Object.entries(SKILL_LEVEL).map(([key, value]) => {
                      return (
                        <td key={value}>
                          {skill[1] === value && <CheckMark title={key} />}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CheckMark({ title }) {
  return (
    <span className="fs-3 text-info mt-3 check" title={title}>
      ✓
    </span>
  );
}
