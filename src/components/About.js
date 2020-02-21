import React from "react";
import CustomIcon from "./Icons";
import redasPic from "../assets/img/reda-pic.jpg";
import ImageLoader from "./ImageLoader";

const About = ({ translate }) => {
  const myAge = new Date().getFullYear() - 1992;
  return (
    <div className="row mt-md-5">
      <div className="col-12 col-md-6 p-1 p-md-0">
        <div className="col-12">
          <h1 className="text-primary">{translate("reda salmi")}</h1>
          <h4>{translate("job position")}</h4>
          <h5>
            {myAge} {translate("years unit")}
          </h5>
          <h5>
            <CustomIcon iconName="mapMarked" className="text-info" />
            <span className="text-info"> {translate("current position")}</span>
          </h5>
        </div>

        <div className="col-12 mt-5 lead">
          <p>
            {translate("about me text1")}
            <span className="font-weight-bold text-primary">
              {" "}
              {translate("coursera title")}
            </span>{" "}
            {translate("about me text2")}
            <span className="font-weight-bold text-primary">
              {" "}
              {translate("youtube title")}
            </span>
            {translate("about me text3")}
            <span className="font-weight-bold text-primary">
              {" "}
              {translate("javascript title")}{" "}
            </span>
            {translate("about me text4")}{" "}
            <span className="font-weight-bold text-primary">
              {translate("python title")}{" "}
            </span>
            {translate("about me text5")}
          </p>

          <p className="mt-5 mb-0">{translate("find me here")}</p>
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

      <div className="col-12 col-md-6 text-center p-1 p-md-0">
        <ImageLoader
          imgSrc={redasPic}
          imgAlt="reda"
          imgClass="img-fluid text-md-right"
          loaderHeight={500}
        />
      </div>
    </div>
  );
};

export default About;
