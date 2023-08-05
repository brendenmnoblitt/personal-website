import React from "react";
import overwatchLeague from "../static/img/overwatchLeague.png";
import "../static/css/App.css";

const Projects = () => {
  return (
    <div className="text-center justify-content align">
      <h2 className="flex text-2xl justify-center font-medium mb-4">
        Projects
      </h2>
      <h3 className="pt-2 text-xl">
        <strong>Overwatch League Web App</strong>
      </h3>
      <div className="flex flex-col-reverse md:flex-row text-center justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-xl font-medium text-gray-900 max-w-lg leading-relaxed pt-4">
              I created a full-stack Overwatch League web app that uses Python
              and MongoDB to process and store data from the Blizzard API while
              displaying the data with HTML/CSS and Vue.js The GitHub repo can
              be found{" "}
              <a
                href="https://github.com/brendenmnoblitt/owl_app_pub"
                target="_blank"
                rel="noreferrer"
                className="underline  hover:text-orange-500"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center pt-4">
            <a
              href="https://brendennoblitt.pythonanywhere.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={overwatchLeague}
                alt="Blizzard Entertainment, Public domain, via Wikimedia Commons, Overwatch Logo"
                width="200px"
                height="200px"
                className="inline-block max-w-md sm:max-w-xs"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
