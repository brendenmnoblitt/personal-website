import React from "react";
import "../static/css/App.css";

const Contact = () => {
  return (
    <div className="justify-center pb-4">
      <h2 className="text-2xl text-center font-medium mb-4">Contact</h2>
      <div className="text-center items-center justify-center text-xl">
        <div className="pb-4">
          <strong>
            <p>Email</p>
          </strong>
          <p>brendennoblittdev@gmail.com</p>
        </div>
        <div className="pb-4">
          <strong>
            <p>Website</p>
          </strong>
          <p>https://www.brendennoblitt.me</p>
        </div>
        <div className="pb-4">
          <strong>
            <p>Location</p>
          </strong>
          <p>Dallas-Fort Worth, TX, USA</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
