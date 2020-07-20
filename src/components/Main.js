import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Interests from "./Interests";
import CustomIcon from "./Icons";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { CSSTransition } from "react-transition-group";
import Switch from "react-switch";
import { ThemeDispatch } from "../reducer";

const SectionsNav = ({
  translate,
  setComponent,
  setShowComponent,
  setnavTogglerOpen,
  isLinkActive,
  setIsLinkActive,
}) => {
  const sections = [
    {
      sectionName: translate("about section"),
      component: <About translate={translate} />,
      id: "about",
    },
    {
      sectionName: translate("projects section"),
      component: <Projects translate={translate} />,
      id: "projects",
    },
    {
      sectionName: translate("skills section"),
      component: <Skills translate={translate} />,
      id: "skills",
    },
    {
      sectionName: translate("interests section"),
      component: <Interests translate={translate} />,
      id: "interests",
    },
  ];
  return sections.map((section) => (
    <NavItem className="ml-3" key={section.id}>
      <NavLink
        id={section.id}
        onClick={() => {
          setShowComponent(false);
          setTimeout(() => {
            setComponent(section.component);
            setShowComponent(true);
          }, 200);
          setnavTogglerOpen(false);
          setIsLinkActive(section.id);
        }}
        className={isLinkActive === section.id ? "active-link" : null}
      >
        {section.sectionName}
      </NavLink>
    </NavItem>
  ));
};

const LangDropdown = ({
  lngDropdownOpen,
  toggleLngDropdown,
  textColor,
  translate,
  i18n,
}) => {
  return (
    <ButtonDropdown
      isOpen={lngDropdownOpen}
      toggle={toggleLngDropdown}
      className={`text-${textColor} p-1`}
      style={{ cursor: "pointer" }}
    >
      <DropdownToggle caret tag="span">
        <CustomIcon iconName="language" />{" "}
        <span>{translate("languages btn")}</span>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem
          active={i18n.language === "en"}
          onClick={() => {
            localStorage.setItem("lng", "en");
            i18n.changeLanguage("en");
          }}
        >
          {translate("lng english")}
        </DropdownItem>
        <DropdownItem
          active={i18n.language === "fr"}
          onClick={() => {
            localStorage.setItem("lng", "fr");
            i18n.changeLanguage("fr");
          }}
        >
          {translate("lng french")}
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

const ThemeSwitch = ({ theme, toggleTheme, className }) => {
  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.theme === "dark"}
      onColor="#222"
      offColor="#333"
      className={className}
      checkedIcon={<CustomIcon iconName="moon" className="align-self-center" />}
      uncheckedIcon={
        <CustomIcon iconName="sun" className="align-self-center" />
      }
      boxShadow="0 0 2px 3px #B38CD9"
      activeBoxShadow="0 0 2px 3px #dfb3e6"
    />
  );
};

const Main = () => {
  // translation hook
  const { t, i18n } = useTranslation();
  // variable used to switch between components
  const [showComponent, setShowComponent] = useState(true);
  // component variable set to the About component per default
  const [component, setComponent] = useState(<About translate={t} />);
  const [isLinkActive, setIsLinkActive] = useState("about");
  // NavbarToggler variable
  const [navTogglerOpen, setnavTogglerOpen] = useState(false);
  // language dropdown
  const [lngDropdownOpen, setLngDropdownOpen] = useState(false);

  // theme toggle logic
  const { theme, dispatch } = useContext(ThemeDispatch);
  const toggleTheme = () => {
    if (theme.theme === "light") {
      localStorage.setItem("theme", "dark");
      dispatch({ type: "dark" });
    } else {
      localStorage.setItem("theme", "light");
      dispatch({ type: "light" });
    }
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">{t("reda salmi")}</NavbarBrand>
          <NavbarToggler onClick={() => setnavTogglerOpen(!navTogglerOpen)} />
          <Collapse isOpen={navTogglerOpen} navbar>
            <Nav className="ml-auto" navbar>
              <SectionsNav
                translate={t}
                setComponent={setComponent}
                setShowComponent={setShowComponent}
                setnavTogglerOpen={setnavTogglerOpen}
                isLinkActive={isLinkActive}
                setIsLinkActive={setIsLinkActive}
              />
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <div style={{ backgroundColor: "#4C515D" }}>
        <div className="container p-1 pr-4 pl-4">
          <div className="row">
            <LangDropdown
              lngDropdownOpen={lngDropdownOpen}
              toggleLngDropdown={() => setLngDropdownOpen(!lngDropdownOpen)}
              textColor="white"
              translate={t}
              i18n={i18n}
            />
            <ThemeSwitch
              theme={theme}
              toggleTheme={toggleTheme}
              className="d-inline-flex align-middle ml-auto mr-2 mr-sm-0"
            />
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-4">
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
