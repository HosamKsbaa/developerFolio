import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {skillsSection.skillGroups.map((group, index) => (
          <div key={index}>
            <h3>{group.groupName}</h3>
            <ul className="dev-icons">
              {group.skills.map((skill, i) => (
                <li key={i} className="software-skill-inline" name={skill.skillName}>
                  <i className={skill.fontAwesomeClassname}></i>
                  <p>{skill.skillName}</p>
                  <div className="progress-container">
                    <div
                      className="progress-value"
                      style={{ width: `${skill.familiarity * 20}%` }} // Assuming familiarity is a scale of 1 to 5
                    >
                      {/* {skill.familiarity}/5 */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
