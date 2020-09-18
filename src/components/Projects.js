import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
} from "reactstrap";
import itbooks from "../assets/img/itbooks.webp";
import freeimages from "../assets/img/freeimages.webp";
import khedemni from "../assets/img/khedemni.webp";
import ImageLoader from "./ImageLoader";
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
    <Card className="m-auto" outline color="secondary">
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
          <ProjectCard
            imgSrc={itbooks}
            imgAlt="it books website"
            title={translate("it books")}
            subtitle={translate("built with")}
            subtitleTech={translate("react js")}
            text={translate("it books text")}
            githubLink="https://github.com/redasalmi/it-books"
            websiteLink="https://itbooks.netlify.app/"
          />

          <ProjectCard
            imgSrc={freeimages}
            imgAlt="Free Images website"
            title={translate("free images")}
            subtitle={translate("built with")}
            subtitleTech={translate("react js")}
            text={translate("free images text")}
            githubLink="https://github.com/redasalmi/free-images"
            websiteLink="https://freeimg.netlify.app/"
          />

          <ProjectCard
            imgSrc={khedemni}
            imgAlt="Khedemni website"
            title={translate("khedemni project")}
            subtitle=""
            subtitleTech={translate("professional project")}
            text={translate("khedemni project text")}
            websiteLink="https://khedemni.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
