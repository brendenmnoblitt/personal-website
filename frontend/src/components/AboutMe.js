import React from "react";
import Lottie from "lottie-react";
import codeAnimation from "../static/json/codeAnimation.json";
import "../static/css/App.css";

const AboutMe = () => {
  return (
    <div className="justify-center pb-4">
      <h2 className="text-2xl text-center font-medium mb-4">About Me</h2>
      <div className="flex flex-col-reverse md:flex-row text-center justify-center">
        <div className="flex items-center">
          <p className="text-xl font-medium text-gray-900 max-w-lg leading-relaxed pt-8">
            I'm a software developer and data engineer based in Dallas-Fort
            Worth, TX. I enjoy building full stack data applications and data
            infrastructure. I am currently focused on building high-quality
            software and data solutions for{" "}
            <a
              href="https://www.mouser.com/"
              className="text-black-500 underline hover:font-bold"
            >
              Mouser Electronics
            </a>
            .
          </p>
        </div>
        <div className="flex items-center justify-center pl-8">
          <Lottie
            animationData={codeAnimation}
            style={{ width: "80%" }}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
