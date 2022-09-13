import React, { useState } from "react";
const EditLabel = ({ hanldeEditLabel, state }) => {
  const [labelIcon, setLabelIcon] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  return (
    <div className="edit--label--overlay">
      <div
        className="edit---label--box"
        style={{
          left: state ? "100px" : "300px",
        }}
      >
        <span className="edit--icon--close" onClick={hanldeEditLabel}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div className="edit--topp--box">
          <div className="edit--box">
            <span className="edit-icon">
              <i className="fa-solid fa-pen"></i>
            </span>
            <p>Edit</p>
          </div>
          <div className="add--sublabel">
            <span className="edit-icon">
              <i className="fa-solid fa-plus"></i>
            </span>
            <p>Add Sublabel</p>
          </div>
        </div>
        <div className="edit--delete--box">
          <span className="edit-icon">
            <i className="fa-solid fa-trash"></i>
          </span>
          <p>delete label</p>
        </div>
        <div className="edit--colors--box">
          <div className="edit--colors--wrapper">
            {labelIcon?.map((element, index) => {
              return (
                <div className="colors--box" key={index}>
                  <div className={`colors--edit ${index + 1}`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLabel;
