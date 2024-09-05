import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";  // Ensure this import is correct
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  
  // Helper function to open URL in a new tab
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  // Use the context to determine if dark mode is active
  const { isDark } = useContext(StyleContext);
  
  // Debugging: Log the bigProjects object to check if it's loaded correctly
  console.log(bigProjects);

  // If the display property is false, return null (no rendering)
  if (!bigProjects.display) {
    return null;
  }

  // Render the project cards
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          {/* Project Title */}
          <h1 className="skills-heading">{bigProjects.title}</h1>

          {/* Project Subtitle */}
          <p
            className={
              isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          {/* Container for projects */}
          <div className="projects-container">
            {/* Map over the projects array */}
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {/* Conditional rendering for project image */}
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image} // Ensure the image path is correct
                        alt={project.projectName}
                        className="card-image"
                      />
                    </div>
                  ) : null}

                  {/* Project Details */}
                  <div className="project-detail">
                    {/* Project Name */}
                    <h5
                      className={
                        isDark ? "dark-mode card-title" : "card-title"
                      }
                    >
                      {project.projectName}
                    </h5>

                    {/* Project Description */}
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>

                    {/* Footer links like "View Project" */}
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
