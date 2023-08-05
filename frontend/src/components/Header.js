import React from "react";
import headshot from "../static/img/headshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="hero-section bg-cover bg-center pt-6 pb-2 px-4 md:pt-10 md:pb-2 md:px-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mb-8">
        <div className="text-center md:pr-8 md:mr-8 pt-4">
          <h2 className="text-lg md:text-2xl font-medium mb-1 md:mb-2 text-gray-900">
            Hello, my name is
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-gray-900">
            Brenden Noblitt
          </h1>
          <h2 className="text-lg md:text-2xl font-medium mb-1 md:mb-2 text-gray-900">
            and I'm a
          </h2>
          <h2 className="text-3xl md:text-5xl font-medium mb-2 md:mb-4 text-osu-orange">
            Software Developer
          </h2>
          <div className="text-lg md:text-2xl font-medium mb-1 md:mb-4 text-gray-900">
            <i class="fa-solid fa-wifi fa-xl"></i> Web •{" "}
            <i class="fa-solid fa-database"></i> Data •{" "}
            <i class="fa-solid fa-cloud"></i> Cloud
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <img
              src={headshot}
              alt="headshot"
              className="max-w-full md:max-w-full rounded-full shadow-lg border-2 border-gray-900"
              width="250px"
              height="250px"
              style={{ maxWidth: "250px" }}
            />
            <div className="flex items-center justify-center pt-4">
              <div className="pr-3 md:pr-5">
                <a
                  href="https://github.com/brendenmnoblitt"
                  alt="https://github.com/brendenmnoblitt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gray-900 text-xl md:text-2xl hover:scale-110 hover:text-gray-900 focus:transition-all focus:duration-500 focus:scale-110"
                  />
                </a>
              </div>
              <a
                href="https://www.linkedin.com/in/brendennoblitt/"
                alt="https://www.linkedin.com/in/brendennoblitt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-gray-900 text-xl md:text-2xl hover:scale-110 focus:transition-all focus:duration-500 focus:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
