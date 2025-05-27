import React from "react";
import "./SidebarSection.css";
const SidebarSection = ({ title, items, titleClass }) => (
  <div className={titleClass}>
    {title && (
      <h5 className="title" style={{ color: "#c8cdd1" }}>
        {title}
      </h5>
    )}
    <ul>
      {items?.map(({ label, icon, link }) => (
        <div className="sliderbar-item" key={label}>
          <div style={{ margin: "10px" }}>{icon}</div>
          <a className="link-names" style={{ color: "#c8cdd1" }} href={link}>
            {label}{" "}
          </a>
        </div>
      ))}
    </ul>
  </div>
);

export default SidebarSection;
