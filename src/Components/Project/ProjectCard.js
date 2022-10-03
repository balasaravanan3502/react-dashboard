import React from "react";
import "./ProjectCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye, faCodeFork } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-title">Super Project</div>
      <div className="project-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laborum quo
        similique repellendus. Nobis repudiandae cupiditate
      </div>
      <div className="action-icon">
        <FontAwesomeIcon icon={faStar} className="icon" />
        <FontAwesomeIcon icon={faEye} className="icon" />
        <FontAwesomeIcon icon={faCodeFork} className="icon" />
      </div>
    </div>
  );
};

export default ProjectCard;
