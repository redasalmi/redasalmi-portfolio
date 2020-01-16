import React from "react";
import ReactTooltip from "react-tooltip";
import CustomIcon from "./Icons";

const Skills = () => {
  return (
    <div className="row mt-md-5">
      <h1 className="col-12 text-primary">Skills</h1>

      <div className="col-12 col-md-6">
        <p className="col-12 lead mt-2">Programming skills:</p>
        <ul className="list-inline text-center text-md-left">
          <li className="list-inline-item ml-4" data-tip="HTML">
            <CustomIcon iconName="html5" className="fa-4x skill text-danger" />
          </li>
          <li className="list-inline-item ml-4" data-tip="CSS">
            <CustomIcon iconName="css3" className="fa-4x skill text-primary" />
          </li>
          <li className="list-inline-item ml-4" data-tip="javascript">
            <CustomIcon
              iconName="javascript"
              className="fa-4x skill text-warning"
            />
          </li>
          <li className="list-inline-item ml-4 align-top" data-tip="python">
            <CustomIcon
              width="56px"
              height="64px"
              iconName="python"
              className="python"
            />
          </li>
        </ul>

        <p className="col-12 lead mt-2">Libraries:</p>
        <ul className="list-inline text-center text-md-left">
          <li className="list-inline-item ml-4 align-top" data-tip="bootstrap">
            <CustomIcon
              width="56px"
              height="64px"
              iconName="bootstrap"
              className="bootstrap"
            />
          </li>
          <li className="list-inline-item ml-4" data-tip="react">
            <CustomIcon iconName="react" className="fa-4x skill text-info" />
          </li>
          <li className="list-inline-item ml-4 align-top" data-tip="redux">
            <CustomIcon
              width="56px"
              height="64px"
              iconName="redux"
              className="redux"
            />
          </li>
          <li className="list-inline-item ml-4 align-top" data-tip="flask">
            <CustomIcon
              width="56px"
              height="64px"
              iconName="flask"
              className="flask"
            />
          </li>
        </ul>

        <p className="col-12 lead mt-2">Database:</p>
        <ul className="list-inline text-center text-md-left">
          <li className="list-inline-item ml-4 align-top" data-tip="mysql">
            <CustomIcon
              width="56px"
              height="64px"
              iconName="mysql"
              className="mysql"
            />
          </li>
          <li className="list-inline-item ml-4 align-top" data-tip="mongodb">
            <CustomIcon
              width="56px"
              height="64px"
              iconName="mongodb"
              className="mongodb"
            />
          </li>
        </ul>

        <p className="col-12 lead mt-2">Tools & other:</p>
        <ul className="list-inline text-center text-md-left">
          <li className="list-inline-item ml-4" data-tip="git">
            <CustomIcon
              width="56px"
              height="64px"
              iconName="git"
              className="git"
            />
          </li>
          <li className="list-inline-item ml-4" data-tip="npm">
            <CustomIcon iconName="npm" className="fa-4x skill text-danger" />
          </li>
          <li className="list-inline-item ml-4 align-top" data-tip="archlinux">
            <CustomIcon
              width="56px"
              height="64px"
              iconName="archlinux"
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
