import React, { useState, useRef, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const Navbar = ({ onNavClick, activeSection }) => {
  const [isMobile, setIsMobile] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setIsMobile(false));

  return (
    <nav className="bg-orange-500 text-black py-4 relative" ref={node}>
      <div className="container mx-auto flex justify-between">
        <button
          className="lg:hidden block"
          onClick={() => setIsMobile(!isMobile)}
        >
          <FiMenu />
        </button>
        <ul
          className={`absolute left-0 top-full space-y-2 text-center  bg-orange-500 text-black py-2 px-4 w-48 transform transition-transform duration-500 ease-in-out ${
            isMobile
              ? "translate-y-0 opacity-100 visible"
              : "translate-y-1 opacity-0 invisible"
          } lg:relative lg:flex lg:space-x-4 lg:space-y-0 lg:bg-transparent lg:w-auto lg:p-0 lg:mt-0 lg:translate-y-0 lg:opacity-100 lg:visible`}
        >
          <li>
            <button
              className={`nav-link ${
                activeSection === "intro" ? "active" : ""
              }`}
              onClick={() => onNavClick("intro")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${
                activeSection === "skills" ? "active" : ""
              }`}
              onClick={() => onNavClick("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${
                activeSection === "projects" ? "active" : ""
              }`}
              onClick={() => onNavClick("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${
                activeSection === "certifications" ? "active" : ""
              }`}
              onClick={() => onNavClick("certifications")}
            >
              Certifications
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${
                activeSection === "timeline" ? "active" : ""
              }`}
              onClick={() => onNavClick("timeline")}
            >
              Timeline
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${
                activeSection === "contact" ? "active" : ""
              }`}
              onClick={() => onNavClick("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
