import React from "react";
import ReactTooltip from "react-tooltip";
import { ReactComponent as Python } from "../logo/python.svg";
import { ReactComponent as Bootstrap } from "../logo/bootstrap.svg";
import { ReactComponent as Flask } from "../logo/flask.svg";
import { ReactComponent as Archlinux } from "../logo/archlinux.svg";
import { ReactComponent as Mysql } from "../logo/mysql.svg";
import { ReactComponent as PhpMyAdmin } from "../logo/phpmyadmin.svg";

const Skills = () => {
  return (
    <div className="row mt-md-5">
      <h1 className="col-12 text-primary">Skills</h1>

      <div className="col-12 col-md-6">
        <p className="col-12 lead mt-2">Programming skills:</p>
        <ul className="list-inline text-center text-md-left">
          <li className="list-inline-item ml-4">
            <span
              className="fab fa-html5 fa-4x skill text-danger"
              data-tip="HTML"
            ></span>
          </li>
          <li className="list-inline-item ml-4">
            <span
              className="fab fa-css3-alt fa-4x skill text-primary"
              data-tip="CSS"
            ></span>
          </li>
          <li className="list-inline-item ml-4">
            <span
              className="fab fa-js fa-4x skill text-warning"
              data-tip="javascript"
            ></span>
          </li>
          <li className="list-inline-item ml-4 align-top">
            <Python
              width="56px"
              height="64px"
              data-tip="python"
              className="python"
            />
          </li>
        </ul>

        <p className="col-12 lead mt-2">Frameworks:</p>
        <ul className="list-inline text-center text-md-left">
          <li className="list-inline-item ml-4 align-top">
            <Bootstrap
              width="56px"
              height="64px"
              data-tip="bootstrap"
              className="bootstrap"
            />
          </li>
          <li className="list-inline-item ml-4">
            <span
              className="fab fa-react fa-4x skill text-info"
              data-tip="react"
            ></span>
          </li>
          <li className="list-inline-item ml-4 align-top">
            <Flask
              width="56px"
              height="64px"
              data-tip="flask"
              className="flask"
            />
          </li>
        </ul>

        <p className="col-12 lead mt-2">Database:</p>
        <ul className="list-inline text-center text-md-left">
          <li className="list-inline-item ml-4 align-top">
            <Mysql
              width="56px"
              height="64px"
              data-tip="mysql"
              className="mysql"
            />
          </li>
          <li className="list-inline-item ml-4 align-top">
            <PhpMyAdmin
              width="120px"
              height="64px"
              data-tip="phpmyadmin"
              className="phpmyadmin"
            />
          </li>
        </ul>

        <p className="col-12 lead mt-2">Tools & other:</p>
        <ul className="list-inline text-center text-md-left">
          <li className="list-inline-item ml-4">
            <span
              className="fab fa-git fa-4x skill text-danger"
              data-tip="git"
            ></span>
          </li>
          <li className="list-inline-item ml-4">
            <span
              className="fab fa-npm fa-4x skill text-danger"
              data-tip="npm"
            ></span>
          </li>
          <li className="list-inline-item ml-4 align-top">
            <Archlinux
              width="56px"
              height="64px"
              data-tip="archlinux"
              className="archlinux"
            />
          </li>
        </ul>
      </div>

      <div className="col-12 col-md-6">
        <p className="lead">One of my coursera certificates:</p>
        <figure>
          <img
            src="/react-certificate.jpg"
            alt="react certificate"
            className="img-fluid border border-primary"
          />
          <figcaption>
            Follow this link to
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/ZQ2QJJBBK28R?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate"
              rel="noopener noreferrer"
              target="_blank"
            >
              &nbsp;coursera&nbsp;
            </a>
            to know more about this course.
          </figcaption>
        </figure>
      </div>

      <ReactTooltip place="bottom" type="info" />
    </div>
  );
};

export default Skills;
