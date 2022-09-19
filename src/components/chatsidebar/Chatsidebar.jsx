import React from "react";
import { InboxUser } from "../../data/InboxUser";
import { Mialimages } from "../../feature/Mialimages";
import { useContext } from "react";
import { contentCreate } from "../../utils/useReducer";

import "./Chatsidebar.css";
const Chatsidebar = () => {
  const data = useContext(contentCreate);
  const popUpshow = () =>
    data.dispatch({
      type: "NEWTEAM",
    });
  return (
    <div className="chat--sidebar">
      <div className="side--bar---seach--chat">
        <div className="search---section---">
          <input type="text" placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="side---bar--items">
        <div className="teams--about">
          <h2>team</h2>
          <i className="fa-solid fa-plus" onClick={popUpshow}></i>
        </div>
        <div className="teams---list">
          <div className="teams-icons">
            <img src={Mialimages.manger} alt="" />
          </div>
          <div className="teams--details">
            <h4 className="teams-tile">#Managers</h4>
            <p>Hello, Mark! I am writing to introduce</p>
          </div>
          <div className="teams--notifction">
            <span className="badge bg-danger"></span>
          </div>
        </div>
        <div className="teams---list">
          <div className="teams-icons">
            <img src={Mialimages.designer} alt="" />
          </div>
          <div className="teams--details">
            <h4 className="teams-tile">#Managers</h4>
            <p>Hello. Can you drop the photos</p>
          </div>
          <div className="teams--notifction">
            <span className="badge bg-danger">4</span>
          </div>
        </div>
      </div>

      <div className="side---bar--people">
        <div className="people--about">
          <h2>team</h2>
          <i className="fa-solid fa-plus"></i>
        </div>

        {InboxUser.map((element, index) => {
          return (
            <div className="side--bar--people" key={element.id}>
              <div className="people---list">
                <div className="people-icons">
                  <img src={element.img} alt={element.name} />
                  <span className={element.userActive}></span>
                </div>
                <div className="people--details">
                  <h4 className="people-tile">{element.name}</h4>
                  <p>{element.disc}</p>
                </div>
                <div className="people--notifction">
                  <span className="badge bg-danger">{element.inbox}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chatsidebar;
