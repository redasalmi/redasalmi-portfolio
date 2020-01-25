import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter
} from "reactstrap";
import CustomIcon from "./Icons";

const ProjectCard = ({
  imgSrc,
  imgAlt,
  title,
  subtitle,
  subtitleTech,
  text,
  githubLink,
  websiteLink
}) => (
  <div className="col-12 col-md-6 col-lg-4">
    <Card className="m-auto" outline color="secondary">
      <img height="300px" src={imgSrc} alt={imgAlt} />
      <CardBody>
        <CardTitle className="text-center font-weight-bold">{title}</CardTitle>
        <CardSubtitle>
          {subtitle}
          <span className="font-weight-bold text-primary"> {subtitleTech}</span>
        </CardSubtitle>
        <CardText>{text}</CardText>
      </CardBody>
      <CardFooter className="text-center">
        <a href={githubLink} rel="noopener noreferrer" target="_blank">
          <CustomIcon
            iconName="github"
            className="fa-3x contact project text-info"
          />
        </a>
        <a
          href={websiteLink}
          rel="noopener noreferrer"
          target="_blank"
          className="ml-4"
        >
          <CustomIcon
            iconName="eye"
            className="fa-3x contact project text-info"
          />
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
            imgSrc="./itbooks.png"
            imgAlt="it books website"
            title={translate("it books")}
            subtitle={translate("built with")}
            subtitleTech={translate("react js")}
            text={translate("it books text")}
            githubLink="https://github.com/redasalmi/it-books"
            websiteLink="https://itbooks.netlify.com/"
          />

          <ProjectCard
            imgSrc="./freeimages.jpg"
            imgAlt="Free Images website"
            title={translate("free images")}
            subtitle={translate("built with")}
            subtitleTech={translate("react js")}
            text={translate("free images text")}
            githubLink="https://github.com/redasalmi/free-images"
            websiteLink="https://freeimg.netlify.com/"
          />

          <ProjectCard
            imgSrc="./archery.jpg"
            imgAlt="Archery website"
            title={translate("archery project")}
            subtitle={translate("built with")}
            subtitleTech={translate("react js")}
            text={translate("archery project text")}
            githubLink="https://github.com/redasalmi/archery"
            websiteLink="https://archerie.netlify.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
