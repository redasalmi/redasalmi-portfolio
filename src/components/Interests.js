import React from "react";
import CustomIcon from "./Icons";

const Interests = () => {
  return (
    <div className="row mt-md-5">
      <h1 className="col-12 text-primary">Interests</h1>

      <div className="m-4">
        <h4 className="d-inline text-info">
          <CustomIcon iconName="code" /> Programming:
        </h4>
        <p className="d-inline lead">
          &nbsp;I am a big programming fan, I like to create little scripts to
          simplify my day to day PC usage, Also, I like web programming for its
          accessibility and extensive reach, especially in a world where
          everybody is connected.
        </p>
      </div>

      <div className="m-4">
        <h4 className="d-inline text-info">
          <CustomIcon iconName="bow" width="22px" height="22px" /> Archery:
        </h4>
        <p className="d-inline lead">
          &nbsp;I've been an archer since 2012 and became an archery coach in
          2015 since then I manage groups of a dozen people to teach them this
          discipline. Exhibition, competition or anything related to archery you
          name it, I'll be there, I like to meet people to introduce them to
          archery.
        </p>
      </div>

      <div className="m-4">
        <h4 className="d-inline text-info">
          <CustomIcon iconName="gamepad" /> PC Building &amp; Video Games:
        </h4>
        <p className="d-inline lead">
          &nbsp;Having a big interest in technology, I follow latest PC part
          launches and building tendencies, also I've built my desktop computer
          myself. I've been a gamer since the dawn of time and I am loving it.
        </p>
      </div>
    </div>
  );
};

export default Interests;
