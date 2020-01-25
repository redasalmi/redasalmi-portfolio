import React from "react";
import CustomIcon from "./Icons";

const Interests = ({ translate }) => {
  return (
    <div className="row mt-md-5">
      <h1 className="col-12 text-primary">{translate("interests title")}</h1>

      <div className="m-4">
        <h4 className="d-inline text-info">
          <CustomIcon iconName="code" /> {translate("programming title")}
        </h4>
        <p className="d-inline lead"> {translate("programming text")}</p>
      </div>

      <div className="m-4">
        <h4 className="d-inline text-info">
          <CustomIcon iconName="bow" width="22px" height="22px" />{" "}
          {translate("archery title")}
        </h4>
        <p className="d-inline lead"> {translate("archery text")}</p>
      </div>

      <div className="m-4">
        <h4 className="d-inline text-info">
          <CustomIcon iconName="gamepad" /> {translate("pc building")}
        </h4>
        <p className="d-inline lead"> {translate("pc building text")}</p>
      </div>
    </div>
  );
};

export default Interests;
