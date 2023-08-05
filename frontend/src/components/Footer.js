import React from "react";
import "../static/css/App.css";

const Footer = () => {
  return (
    <footer>
      <div className="flex text-center justify-center py-2 bg-orange-500 ">
        <p>
          Icons by{" "}
          <a href="https://fontawesome.com/">
            <strong>Font Awesome</strong>
          </a>{" "}
          • Powered by{" "}
          <a href="https://react.dev/">
            <strong>React</strong>
          </a>{" "}
          • Hosted by{" "}
          <a href="https://www.pythonanywhere.com/">
            <strong>PythonAnywhere</strong>
          </a>{" "}
          • &copy; 2023 Brenden Noblitt
        </p>
      </div>
    </footer>
  );
};

export default Footer;
