import React from "react";
import "../static/css/App.css";
import badgeAzure from "../static/img/badgeAzure.png";
import badgeAlteryx from "../static/img/badgeAlteryx.png";
import badgePython from "../static/img/badgePython.png";

const Certifications = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-medium mb-4">Certifications</h2>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center justify-center space-y-4 lg:pr-4 md:pr-4">
          <a
            href="https://www.credly.com/badges/69865680-4e81-4436-8ea6-fa84336c1a6f/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={badgeAzure}
              alt="Microsoft Azure Fundamentals"
              width="200px"
              height="200px"
              className="max-w-full sm:max-w-xs"
            />
          </a>
          <div className="font-bold text-xl">Microsoft Azure Fundamentals</div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 lg:pr-4">
          <a
            href="https://www.credly.com/badges/1eda432b-3abf-4d41-88d5-8d33de6e0847/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={badgePython}
              alt="Certified Entry-Level Python Programmer"
              width="200px"
              height="200px"
              className="max-w-full sm:max-w-xs"
            />
          </a>
          <div className="font-bold text-xl">
            Certified Entry-Level Python Programmer
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <a
            href="https://www.credly.com/badges/04abdf14-c7eb-4f70-8be9-ce20dcdd56c2/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={badgeAlteryx}
              alt="Alteryx Server Administrator"
              width="200px"
              height="200px"
              className="max-w-full sm:max-w-xs"
            />
          </a>
          <div className="font-bold text-xl">Alteryx Server Administrator</div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
