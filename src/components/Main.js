import React, { useState, useContext } from "react";
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
import Switch from "react-switch";
import sunIcon from "../logo/sun.svg";
import moonIcon from "../logo/moon.svg";
import { ThemeDispatch } from "../reducer";

const ThemeSwitch = ({ theme, toggleTheme, className }) => {
  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.theme === "dark"}
      onColor="#222"
      offColor="#333"
      className={className}
      checkedIcon={<img src={moonIcon} alt="moon icon" />}
      uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
      boxShadow="0 0 2px 3px #B38CD9"
      activeBoxShadow="0 0 2px 3px #dfb3e6"
    />
  );
};

const Main = () => {
  // variable used to switch between components
  const [showComponent, setShowComponent] = useState(true);
  // component variable set to the About component per default
  const [component, setComponent] = useState(About);
  const [isLinkActive, setIsLinkActive] = useState("about");
  // NavbarToggler variable
  const [isOpen, setIsOpen] = useState(false);

  // theme toggle logic
  const { theme, dispatch } = useContext(ThemeDispatch);
  const toggleTheme = () => {
    if (theme.theme === "light") {
      dispatch({ type: "dark" });
    } else {
      dispatch({ type: "light" });
    }
  };

  // links to the available sections
  const SectionsNav = () => {
    const sections = [
      {
        sectionName: "About",
        component: About,
        id: "about"
      },
      {
        sectionName: "Projects",
        component: Projects,
        id: "projects"
      },
      {
        sectionName: "Skills",
        component: Skills,
        id: "skills"
      },
      {
        sectionName: "Interests",
        component: Interests,
        id: "interests"
      }
    ];
    return sections.map(section => (
      <NavItem className="ml-3" key={section.id}>
        <NavLink
          id={section.id}
          onClick={() => {
            setShowComponent(false);
            setTimeout(() => {
              setComponent(section.component);
              setShowComponent(true);
            }, 200);
            setIsOpen(false);
            setIsLinkActive(section.id);
          }}
          className={isLinkActive === section.id ? "active-link" : null}
        >
          {section.sectionName}
        </NavLink>
      </NavItem>
    ));
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">Reda Salmi</NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <SectionsNav />
            </Nav>
          </Collapse>
          <ThemeSwitch
            theme={theme}
            toggleTheme={toggleTheme}
            className="d-none d-md-inline ml-4"
          />
        </div>
      </Navbar>

      <div className="container mt-4 mb-4">
        <div className="row">
          <ThemeSwitch
            theme={theme}
            toggleTheme={toggleTheme}
            className="d-block d-md-none ml-auto"
          />
        </div>
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
