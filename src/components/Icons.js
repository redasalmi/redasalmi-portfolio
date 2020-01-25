import React from "react";
import { InlineIcon } from "@iconify/react";
import linkedinIcon from "@iconify/icons-fa-brands/linkedin";
import twitterIcon from "@iconify/icons-fa-brands/twitter";
import githubIcon from "@iconify/icons-fa-brands/github";
import html5Icon from "@iconify/icons-fa-brands/html5";
import css3Icon from "@iconify/icons-fa-brands/css3-alt";
import javascriptIcon from "@iconify/icons-fa-brands/js";
import reactIcon from "@iconify/icons-fa-brands/react";
import npmIcon from "@iconify/icons-fa-brands/npm";
import mapMarkerAlt from "@iconify/icons-fa-solid/map-marker-alt";
import envelopeIcon from "@iconify/icons-fa-solid/envelope";
import codeIcon from "@iconify/icons-fa-solid/code";
import gamepadIcon from "@iconify/icons-fa-solid/gamepad";
import eyeIcon from "@iconify/icons-fa-solid/eye";
import pythonIcon from "@iconify/icons-logos/python";
import reduxIcon from "@iconify/icons-logos/redux";
import flaskIcon from "@iconify/icons-logos/flask";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import archlinuxIcon from "@iconify/icons-logos/archlinux";
import mySqlIcon from "@iconify/icons-simple-icons/mysql";
import mongoDBIcon from "@iconify/icons-simple-icons/mongodb";
import gitIcon from "@iconify/icons-simple-icons/git";
import bowIcon from "@iconify/icons-emojione-monotone/bow-and-arrow";
import moonIcon from "@iconify/icons-emojione-monotone/crescent-moon";
import sunIcon from "@iconify/icons-emojione-monotone/sun";
import languageIcon from "@iconify/icons-ion/language";

const CustomIcon = ({ iconName, className, width = "", height = "" }) => {
  if (iconName === "linkedin") {
    return <InlineIcon icon={linkedinIcon} className={className} />;
  } else if (iconName === "twitter") {
    return <InlineIcon icon={twitterIcon} className={className} />;
  } else if (iconName === "github") {
    return <InlineIcon icon={githubIcon} className={className} />;
  } else if (iconName === "mapMarked") {
    return <InlineIcon icon={mapMarkerAlt} className={className} />;
  } else if (iconName === "envelope") {
    return <InlineIcon icon={envelopeIcon} className={className} />;
  } else if (iconName === "eye") {
    return <InlineIcon icon={eyeIcon} className={className} />;
  } else if (iconName === "html5") {
    return <InlineIcon icon={html5Icon} className={className} />;
  } else if (iconName === "css3") {
    return <InlineIcon icon={css3Icon} className={className} />;
  } else if (iconName === "javascript") {
    return <InlineIcon icon={javascriptIcon} className={className} />;
  } else if (iconName === "python") {
    return (
      <InlineIcon
        icon={pythonIcon}
        className={className}
        width={width}
        height={height}
      />
    );
  } else if (iconName === "bootstrap") {
    return (
      <InlineIcon
        icon={bootstrapIcon}
        className={className}
        width={width}
        height={height}
      />
    );
  } else if (iconName === "react") {
    return <InlineIcon icon={reactIcon} className={className} />;
  } else if (iconName === "redux") {
    return (
      <InlineIcon
        icon={reduxIcon}
        className={className}
        width={width}
        height={height}
      />
    );
  } else if (iconName === "flask") {
    return (
      <InlineIcon
        icon={flaskIcon}
        className={className}
        width={width}
        height={height}
      />
    );
  } else if (iconName === "mysql") {
    return (
      <InlineIcon
        icon={mySqlIcon}
        className={className}
        width={width}
        height={height}
      />
    );
  } else if (iconName === "mongodb") {
    return (
      <InlineIcon
        color="green"
        icon={mongoDBIcon}
        className={className}
        width={width}
        height={height}
      />
    );
  } else if (iconName === "git") {
    return (
      <InlineIcon
        color="#f44d27"
        icon={gitIcon}
        className={className}
        width={width}
        height={height}
      />
    );
  } else if (iconName === "npm") {
    return <InlineIcon icon={npmIcon} className={className} />;
  } else if (iconName === "archlinux") {
    return (
      <InlineIcon
        icon={archlinuxIcon}
        className={className}
        width={width}
        height={height}
      />
    );
  } else if (iconName === "code") {
    return <InlineIcon icon={codeIcon} className={className} />;
  } else if (iconName === "gamepad") {
    return <InlineIcon icon={gamepadIcon} className={className} />;
  } else if (iconName === "bow") {
    return (
      <InlineIcon
        icon={bowIcon}
        className={className}
        width={width}
        height={height}
      />
    );
  } else if (iconName === "moon") {
    return <InlineIcon icon={moonIcon} className={className} color="yellow" />;
  } else if (iconName === "sun") {
    return <InlineIcon icon={sunIcon} className={className} color="yellow" />;
  } else if (iconName === "language") {
    return (
      <InlineIcon icon={languageIcon} className={className} color="white" />
    );
  }
};

export default CustomIcon;
