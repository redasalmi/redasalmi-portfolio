import React, { useContext } from "react";
import reactCertificate from "../assets/img/react-certificate.jpg";
import ImageLoader from "./ImageLoader";
import {
  archlinux,
  html,
  css,
  javascript,
  python,
  sass,
  bootstrap,
  react,
  redux,
  flask,
  express,
  expressWhite,
  git,
  npm,
  flaskWhite,
} from "../assets/svg";
import { ThemeDispatch } from "../reducer";

const Skills = ({ translate }) => {
  const { theme } = useContext(ThemeDispatch);
  return (
    <div className="row mt-md-5">
      <h1 className="col-12 text-primary">{translate("skills title")}</h1>

      <div className="col-12 col-lg-6">
        <p className="col-12 lead mt-2">{translate("programming skills")}</p>
        <ul className="list-inline text-center text-lg-left">
          <li className="list-inline-item text-center ml-4">
            <img src={html} width="50" height="65" alt="html5" />
            <p>HTML5</p>
          </li>
          <li className="list-inline-item text-center ml-4">
            <img src={css} width="50" height="65" alt="css" />
            <p>CSS3</p>
          </li>
          <li className="list-inline-item text-center ml-4">
            <img src={javascript} width="50" height="65" alt="javascript" />
            <p>Javascript</p>
          </li>
          <li className="list-inline-item text-center ml-4 align-top">
            <img src={python} width="50" height="65" alt="python" />
            <p>Python</p>
          </li>
        </ul>

        <p className="col-12 lead mt-2">{translate("libraries title")}</p>
        <ul className="list-inline text-center text-lg-left">
          <li className="list-inline-item text-center ml-4 align-top">
            <img src={sass} width="50" height="65" alt="sass" />
            <p>SASS</p>
          </li>
          <li className="list-inline-item text-center ml-4 align-top">
            <img src={bootstrap} width="50" height="65" alt="bootstrap" />
            <p>Bootstrap</p>
          </li>
          <li className="list-inline-item text-center ml-4">
            <img src={react} width="50" height="65" alt="react" />
            <p>React</p>
          </li>
          <li className="list-inline-item text-center ml-4 align-top">
            <img src={redux} width="50" height="65" alt="redux" />
            <p>Redux</p>
          </li>
          <li className="list-inline-item text-center ml-4 align-top">
            <img
              src={theme.theme === "dark" ? flaskWhite : flask}
              width="50"
              height="65"
              alt="flask"
            />
            <p>Flask</p>
          </li>
          <li className="list-inline-item text-center ml-4 align-top">
            <img
              src={theme.theme === "dark" ? expressWhite : express}
              width="50"
              height="65"
              alt="exrpessjs"
            />
            <p>ExpressJs</p>
          </li>
        </ul>

        <p className="col-12 lead mt-2">{translate("Tools & other")}</p>
        <ul className="list-inline text-center text-lg-left">
          <li className="list-inline-item text-center ml-4">
            <img src={git} width="50" height="65" alt="git" />
            <p>Git</p>
          </li>
          <li className="list-inline-item text-center ml-4">
            <img src={npm} width="50" height="65" alt="npm" />
            <p>NPM</p>
          </li>
          <li className="list-inline-item text-center ml-4 align-top">
            <img src={archlinux} width="50" height="65" alt="archlinux" />
            <p>Archlinux</p>
          </li>
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
