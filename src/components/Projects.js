import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from "reactstrap";
import ImageLoader from "./ImageLoader";
import { PROJECTS } from "../assets/data/project";
import { GithubSVG, EyeSVG } from "../assets/svg";

const ProjectCard = ({
  imgSrc,
  imgAlt,
  title,
  subtitle,
  subtitleTech,
  text,
  githubLink,
  websiteLink,
}) => (
  <div className="col-12 col-md-6 col-lg-4">
    <Card className="project-card" outline color="secondary">
      <ImageLoader
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        imgHeight={300}
        loaderHeight={300}
        spinnerColor="dark"
      />
      <CardBody>
        <CardTitle className="text-center font-weight-bold">{title}</CardTitle>
        <CardSubtitle>
          {subtitle}
          <span className="font-weight-bold text-primary"> {subtitleTech}</span>
        </CardSubtitle>
        <CardText>{text}</CardText>
      </CardBody>
      <CardFooter className="text-center">
        {githubLink && (
          <a href={githubLink} rel="noopener noreferrer" target="_blank">
            <GithubSVG width="45" height="50" className="github-svg-icon" />
          </a>
        )}
        <a
          href={websiteLink}
          rel="noopener noreferrer"
          target="_blank"
          className="ml-4"
        >
          <EyeSVG width="50" height="50" className="eye-svg-icon" />
        </a>
      </CardFooter>
    </Card>
  </div>
);

const Projects = ({ translate }) => {
  return (
    <div className="row mt-md-5">
      <h1 className="col-12 text-primary">{translate("projects title")}</h1>
      <p className="col-12 lead">{translate("projects intro text")}</p>

      <div className="col-12 sm-text-center">
        <div className="row">
          {PROJECTS.map((project) => {
            const {
              imgSrc,
              imgAlt,
              title,
              subtitle,
              subtitleTech,
              text,
              githubLink,
              websiteLink,
            } = project;

            return (
              <ProjectCard
                key={translate(title)}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                title={translate(title)}
                subtitle={translate(subtitle)}
                subtitleTech={translate(subtitleTech)}
                text={translate(text)}
                githubLink={githubLink}
                websiteLink={websiteLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
