import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/css/App.css";

const Skills = () => {
  return (
    <div className="text-center sm:flex sm:flex-col sm:items-center">
      <div className="flex text-2xl justify-center font-medium mb-4">
        <h2>Skills</h2>
      </div>
      <h2 className="flex items-center justify-center pt-2 text-xl">
        Programming Languages
      </h2>
      <div className="flex items-center justify-center pt-4 text-lg flex-wrap">
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          {/* <FontAwesomeIcon icon={faPython} className="fa-xl" /> */}
          <i class="fa-brands fa-python fa-xl"></i> Python
        </button>
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          {/* <FontAwesomeIcon icon={faJs} className="fa-xl" /> */}
          <i class="fa-brands fa-js fa-xl"></i> JavaScript
        </button>
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          {/* <FontAwesomeIcon icon={faHtml5} className="fa-xl" /> */}
          <i class="fa-brands fa-html5 fa-xl"></i> HTML/CSS
        </button>
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          {/* <FontAwesomeIcon icon={faLinux} className="fa-xl" /> */}
          <i class="fa-brands fa-linux fa-xl"></i> Linux
        </button>
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          {/* <FontAwesomeIcon icon="fa-solid fa-database" /> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-database" className="fa-xl" /> */}
          <i class="fa-solid fa-database fa-xl"></i> SQL
        </button>
      </div>
      <h2 className="flex items-center justify-center pt-4 text-xl ">
        Frameworks
      </h2>
      <div className="flex items-center justify-center pt-4 text-lg flex-wrap">
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          <i class="fa-solid fa-flask fa-xl"></i> Flask
        </button>
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          <i class="fa-brands fa-react fa-xl"></i> React.js
        </button>
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          <i class="fa-brands fa-node fa-xl"></i> Node.js
        </button>
      </div>
      <h2 className="flex items-center justify-center pt-4 text-xl">
        Databases
      </h2>
      <div className="flex items-center justify-center pt-4 text-lg flex-wrap">
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          <i class="fa-solid fa-server fa-xl"></i> Microsoft SQL Server
        </button>
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          <i class="fa-solid fa-share-nodes fa-xl"></i> MongoDB
        </button>
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          <i class="fa-solid fa-terminal fa-xl"></i> PostgreSQL
        </button>
      </div>
      <h2 className="flex items-center justify-center pt-4 text-xl">
        Cloud Platforms
      </h2>
      <div className="flex items-center justify-center pt-4 text-lg flex-wrap">
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          <i class="fa-solid fa-cloud fa-xl"></i> Microsoft Azure
        </button>
        <button className="rounded-full text-s font-bold text-white bg-orange-500 py-1 px-2 ml-2 mr-2 mb-2">
          <i class="fa-solid fa-snowflake fa-xl"></i> Snowflake
        </button>
      </div>
    </div>
  );
};

export default Skills;
