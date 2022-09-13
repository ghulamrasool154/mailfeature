import React from "react";
import { useState } from "react";

const InBoxUser = ({ element }) => {
  const [bookmark, setbookmark] = useState(element.isbookmard);
  const [stare, setstare] = useState(element.isStart);
  const hanldeChnageChecked = () => {};
  const haldeBookmark = () => {
    setbookmark(!bookmark);
  };
  const haldeStare = () => {
    setstare(!stare);
  };
  return (
    <div className="col p-0">
      <div className="inbox--content--render">
        <div className="content--left">
          <span className="cont--icon">
            <input
              type="checkbox"
              checked={element.isChecked ? true : false}
              onChange={() => {
                hanldeChnageChecked(element.id);
              }}
            />
          </span>
          <span className="cont--icon">
            <i
              className={stare ? "fa-regular fa-star" : "fa-solid fa-star"}
              onClick={haldeStare}
            ></i>
          </span>
          <span className="cont--icon">
            <i
              className={
                bookmark ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"
              }
              onClick={() => haldeBookmark(element.id)}
            ></i>
          </span>
          <span className="cont--icon">
            <img src={element.img} alt="" />
          </span>
          <h4 className="title--inbox--user">{element.name}</h4>
        </div>
        <div className="content--center">
          <p className="contnet---disctipion">
            <strong className="subject">{element.subject}</strong>-
            {element.disc}
          </p>
        </div>
        <div className="content--right">
          <span className="cont--icon">
            <i className="fa-solid fa-paperclip"></i>
          </span>
          <span className="time--inbox--comming">{element.time}</span>
        </div>
      </div>
    </div>
  );
};

export default InBoxUser;
