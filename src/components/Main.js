import React, { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Interests from "./Interests";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse
} from "reactstrap";
import { CSSTransition } from "react-transition-group";

const Main = () => {
  // variable used to switch between components
  const [showComponent, setShowComponent] = useState(true);
  // component variable set to the About component per default
  const [component, setComponent] = useState(About);
  const [isLinkActive, setIsLinkActive] = useState("about");
  // NavbarToggler variable
  const [isOpen, setIsOpen] = useState(false);

  // links to the available sections
  const SectionSelect = ({ sectionName, Component, id }) => {
    return (
      <NavItem className="ml-3">
        <NavLink
          id={id}
          onClick={() => {
            setShowComponent(false);
            setTimeout(() => {
              setComponent(Component);
              setShowComponent(true);
            }, 200);
            setIsOpen(false);
            setIsLinkActive(id);
          }}
          className={isLinkActive === id ? "active-link" : null}
        >
          {sectionName}
        </NavLink>
      </NavItem>
    );
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">Reda Salmi</NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <SectionSelect sectionName="About" Component={About} id="about" />
              <SectionSelect
                sectionName="Projects"
                Component={Projects}
                id="projects"
              />
              <SectionSelect
                sectionName="Skills"
                Component={Skills}
                id="skills"
              />
              <SectionSelect
                sectionName="Interests"
                Component={Interests}
                id="interests"
              />
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <div className="container mt-4 mb-4">
        <CSSTransition
          in={showComponent}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          {component}
        </CSSTransition>
      </div>
    </div>
  );
};

export default Main;
