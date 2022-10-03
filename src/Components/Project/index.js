import React, { memo } from "react";
import "./Project.css";

import { ProjectData } from "../../Constants/ProjectData";
import ProjectCard from "../Project/ProjectCard";

const index = () => {
  return (
    <div>
      <div className="section-heading">Projects</div>

      <div className="projects">
        {ProjectData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default memo(index);
