import React, { useState } from "react";
import Django from "./Django";
import Flask from "./Flask";
import ReactPage from "./React";
import Unity from "./Unity";

const Projects = () => {
  const [activeComponent, setActiveComponent] = useState("ReactPage");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "ReactPage":
        return <ReactPage />;
      case "Django":
        return <Django />;
      case "Flask":
        return <Flask />;
      case "Unity":
        return <Unity />;
      default:
        return null;
    }
  };

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <section
      className="flex-wrapper relative h-screen project inset-10"
      id="Projects"
    >
      <div className="flex">
        <div className="component-buttons d-col-2 t-col-2 m-col-2">
          <button
            onClick={() => handleComponentChange("ReactPage")}
            className={activeComponent === "ReactPage" ? "active" : ""}
          >
            React
          </button>
          <button
            onClick={() => handleComponentChange("Django")}
            className={activeComponent === "Django" ? "active" : ""}
          >
            Django
          </button>
          <button
            onClick={() => handleComponentChange("Flask")}
            className={activeComponent === "Flask" ? "active" : ""}
          >
            Flask
          </button>
          <button
            onClick={() => handleComponentChange("Unity")}
            className={activeComponent === "Unity" ? "active" : ""}
          >
            Unity
          </button>
        </div>
        <div className="d-col-9 t-col-6 m-col-12">
          <div className="flex-grid">
            <div className="d-col-12 t-col-12 m-col-12">
              <div className="component-container">
                {renderActiveComponent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
