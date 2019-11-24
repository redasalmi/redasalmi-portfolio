import React from "react";

const About = () => {
  return (
    <div className="row mt-md-5">
      <div className="col-12 col-md-6">
        <div className="col-12">
          <h1 className="text-primary">Reda Salmi</h1>
          <h4>
            Searching for a first experience as a web developer (react JS)
          </h4>
          <h5>
            <span className="fas fa-map-marker-alt text-info">
              {" "}
              Algiers, Algeria
            </span>
          </h5>
        </div>

        <div className="col-12 mt-5 lead">
          <p>
            I am a web development and programming enthusiast. I am a self
            taught programmer, I learned to program by doing courses on the
            <span className="font-weight-bold text-primary"> Coursra</span>{" "}
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
                <span className="fab fa-linkedin fa-3x contact text-info"></span>
              </a>
            </li>
            <li className="list-inline-item ml-4">
              <a
                href="https://twitter.com/redsalmi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="fab fa-twitter fa-3x contact text-info"></span>
              </a>
            </li>
            <li className="list-inline-item ml-4 mt-4 mt-md-2">
              <a
                href="https://github.com/redasalmi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="fab fa-github fa-3x contact text-info"></span>
              </a>
            </li>
            <li className="list-inline-item ml-4 mt-4  mt-md-2">
              <a
                href="mailto:reda.salmi.elt@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="fas fa-envelope fa-3x contact text-info"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-12 col-md-6 text-center">
        <img src="/reda-pic.jpg" alt="reda" className="img-fluid" />
      </div>
    </div>
  );
};

export default About;
