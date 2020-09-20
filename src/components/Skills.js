import React, { useContext } from "react";
import reactCertificate from "../assets/img/react-certificate.webp";
import ImageLoader from "./ImageLoader";
import { ThemeDispatch } from "../reducer";
import { SKILLS } from "../assets/data/skill";

const Skill = ({ imgSrc, imgAlt, skill, alignTop, whiteImgSrc, theme }) => (
  <li
    className={`list-inline-item text-center ml-4 ${
      alignTop ? "align-top" : ""
    }`}
  >
    <img
      src={whiteImgSrc && theme === "dark" ? whiteImgSrc : imgSrc}
      width="50"
      height="65"
      alt={imgAlt}
    />
    <p>{skill}</p>
  </li>
);

const Skills = ({ translate }) => {
  const { theme } = useContext(ThemeDispatch);
  const { programming, librairies, tools } = SKILLS;

  return (
    <div className="row mt-md-5">
      <h1 className="col-12 text-primary">{translate("skills title")}</h1>

      <div className="col-12 col-lg-6">
        <p className="col-12 lead mt-2">{translate("programming skills")}</p>
        <ul className="list-inline text-center text-lg-left">
          {programming.map((prog) => {
            const { imgSrc, imgAlt, skill, alignTop } = prog;

            return (
              <Skill
                key={skill}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                skill={skill}
                alignTop={alignTop}
              />
            );
          })}
        </ul>

        <p className="col-12 lead mt-2">{translate("libraries title")}</p>
        <ul className="list-inline text-center text-lg-left">
          {librairies.map((library) => {
            const { imgSrc, imgAlt, skill, alignTop, whiteImgSrc } = library;

            return (
              <Skill
                key={skill}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                skill={skill}
                alignTop={alignTop}
                whiteImgSrc={whiteImgSrc}
                theme={theme.theme}
              />
            );
          })}
        </ul>

        <p className="col-12 lead mt-2">{translate("Tools & other")}</p>
        <ul className="list-inline text-center text-lg-left">
          {tools.map((tool) => {
            const { imgSrc, imgAlt, skill, alignTop } = tool;

            return (
              <Skill
                key={skill}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                skill={skill}
                alignTop={alignTop}
              />
            );
          })}
        </ul>
      </div>

      <div className="col-12 col-lg-6">
        <p className="lead">{translate("coursera certificate title")}</p>
        <figure>
          <ImageLoader
            imgSrc={reactCertificate}
            imgAlt="react certificate"
            imgClass="img-fluid border border-primary"
            loaderHeight={415}
          />
          <figcaption>
            {translate("follow this link")}
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/ZQ2QJJBBK28R?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              {translate("coursera title")}{" "}
            </a>
            {translate("know more about course")}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Skills;
