import React from "react";
import "./DataInviteMem.css";
const DataInviteMem = (props) => {
  const { inviteicon, UserName } = props;
  return (
    <>
      <div className="data_wrapper d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center imgNheadingInvite">
          <img src={inviteicon} alt="invite Icon" />
          <h5 className="mb-0 inviteheading">{UserName}</h5>
        </div>
        <div>
          <i className="fa-sharp fa-solid fa-check"></i>
        </div>
      </div>
    </>
  );
};

export default DataInviteMem;
