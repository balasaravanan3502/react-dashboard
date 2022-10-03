import React, { memo } from "react";
import "./Announcement.css";

import { AnnouncmentData } from "../../Constants/AnnouncementData";
const index = () => {
  return (
    <article className="announcement-section">
      <div className="section-heading">Announcements</div>
      <div className="announcement">
        <div className="announcement-card">
          {AnnouncmentData.map((announcement, index) => (
            <div key={index}>
              <div className="announcement-title">{announcement.title}</div>
              <div className="announcement-description">
                {announcement.description}
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default memo(index);
