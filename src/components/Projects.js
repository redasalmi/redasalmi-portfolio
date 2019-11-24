import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter
} from "reactstrap";

const Projects = () => {
  return (
    <div className="row mt-md-5">
      <h1 className="col-12 text-primary">Projects</h1>
      <p className="col-12 lead">
        Here you can see all my personal projects, click on the github icon to
        view the selected project code, or click on the view icon to visit the
        selected project website.
      </p>

      <div className="col-12 sm-text-center">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <Card className="m-auto" outline color="secondary">
              <img height="300px" src="./itbooks.png" alt="it books website" />
              <CardBody>
                <CardTitle className="text-center font-weight-bold">
                  IT Books
                </CardTitle>
                <CardSubtitle>
                  Built with{" "}
                  <span className="font-weight-bold text-primary">
                    {" "}
                    react JS
                  </span>
                </CardSubtitle>
                <CardText>
                  Website for IT, Programming and Computer Science Books.
                </CardText>
              </CardBody>
              <CardFooter className="text-center">
                <a
                  href="https://github.com/redasalmi/it-books"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="fab fa-github fa-3x contact text-info"></span>
                </a>
                <a
                  href="https://itbooks.netlify.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="ml-4"
                >
                  <span className="fas fa-eye fa-3x contact text-info"></span>
                </a>
              </CardFooter>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card className="m-auto" outline color="secondary">
              <img
                height="300px"
                src="./freeimages.jpg"
                alt="Free Images website"
              />
              <CardBody>
                <CardTitle className="text-center font-weight-bold">
                  Free Images
                </CardTitle>
                <CardSubtitle>
                  Built with{" "}
                  <span className="font-weight-bold text-primary">
                    {" "}
                    react JS
                  </span>
                </CardSubtitle>
                <CardText>
                  A website to browse for free images and download them.
                </CardText>
              </CardBody>
              <CardFooter className="text-center">
                <a
                  href="https://github.com/redasalmi/free-images"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="fab fa-github fa-3x contact text-info"></span>
                </a>
                <a
                  href="https://freeimg.netlify.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="ml-4"
                >
                  <span className="fas fa-eye fa-3x contact text-info"></span>
                </a>
              </CardFooter>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <Card className="m-auto" outline color="secondary">
              <img height="300px" src="./archery.jpg" alt="Archery website" />
              <CardBody>
                <CardTitle className="text-center font-weight-bold">
                  Archery
                </CardTitle>
                <CardSubtitle>
                  Built with{" "}
                  <span className="font-weight-bold text-primary">
                    {" "}
                    react JS
                  </span>
                </CardSubtitle>
                <CardText>
                  A website About Archery with definitions, articles and videos.
                </CardText>
              </CardBody>
              <CardFooter className="text-center">
                <a
                  href="https://github.com/redasalmi/archery"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="fab fa-github fa-3x contact text-info"></span>
                </a>
                <a
                  href="https://archerie.netlify.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="ml-4"
                >
                  <span className="fas fa-eye fa-3x contact text-info"></span>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
