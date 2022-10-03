import React, { memo } from "react";

import "./People.css";
import { PeopleData } from "../../Constants/PeopleData";
const index = () => {
  return (
    <article className="people-section">
      <div className="section-heading">People</div>
      <div className="people-card">
        {PeopleData.map((people, index) => (
          <div className="people-item" key={index}>
            <img src={people.imageUrl} alt="" />
            <div className="people-user-name">{people.name}</div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default memo(index);
