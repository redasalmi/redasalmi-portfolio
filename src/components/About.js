import React from "react";
import CustomIcon from "./Icons";

const About = () => {
  const myAge = new Date().getFullYear() - 1992;
  return (
    <div className="row mt-md-5">
      <div className="col-12 col-md-6 p-1 p-md-0">
        <div className="col-12">
          <h1 className="text-primary">Reda Salmi</h1>
          <h4>Web Developer (react JS) at Buileo</h4>
          <h5>{myAge} years old</h5>
          <h5>
            <CustomIcon iconName="mapMarked" className="text-info" />
            <span className="text-info"> Algiers, Algeria</span>
          </h5>
        </div>

        <div className="col-12 mt-5 lead">
          <p>
            I am a web development and programming enthusiast. I am a self
            taught programmer, I learned to program by doing courses on the
            <span className="font-weight-bold text-primary">
              {" "}
              Coursera
            </span>{" "}
            platform and tutorials on
            <span className="font-weight-bold text-primary"> Youtube</span>, my
            main programming languages are
            <span className="font-weight-bold text-primary"> javascript </span>
            for web development and{" "}
            <span className="font-weight-bold text-primary">python </span>
            for web and various scripting tasks. Also, I hold a master's degree
            in Electrical Engineering.
          </p>

          <p className="mt-5 mb-0">Find me here:</p>
          <ul className="list-inline text-center">
            <li className="list-inline-item ml-4">
              <a
                href="https://www.linkedin.com/in/reda-salmi-424a30168/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <CustomIcon
                  iconName="linkedin"
                  className="fa-3x contact text-info"
                />
              </a>
            </li>
            <li className="list-inline-item ml-4">
              <a
                href="https://twitter.com/redsalmi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <CustomIcon
                  iconName="twitter"
                  className="fa-3x contact text-info"
                />
              </a>
            </li>
            <li className="list-inline-item ml-4 mt-4 mt-md-2">
              <a
                href="https://github.com/redasalmi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <CustomIcon
                  iconName="github"
                  className="fa-3x contact text-info"
                />
              </a>
            </li>
            <li className="list-inline-item ml-4 mt-4  mt-md-2">
              <a
                href="mailto:reda.salmi.elt@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <CustomIcon
                  iconName="envelope"
                  className="fa-3x contact text-info"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-12 col-md-6 text-center text-md-right p-1 p-md-0">
        <img src="/reda-pic.jpg" alt="reda" className="img-fluid" />
      </div>
    </div>
  );
};

export default About;
