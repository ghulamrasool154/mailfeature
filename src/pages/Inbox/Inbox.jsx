import React, { useDebugValue } from "react";
import { useState } from "react";
import { Mialimages } from "../../feature/Mialimages";
import "./Inbox.css";
import { InboxUser } from "../../data/InboxUser";
import InBoxUser from "../../components/InBoxUser/InBoxUser";
const Inbox = () => {
  return (
    <div className="inbox--page">
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0 m-0">
            <div className="in--p--icons--wrapper">
              <div className="wrapper--left">
                <span className="inbox---icons">
                  <input type="checkbox" />
                  <span className="inbox---icons--down">
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                </span>
                <span className="inbox---icons">
                  <img src={Mialimages.archive} alt="" />
                </span>
                <span className="inbox---icons">
                  <img src={Mialimages.alert} alt="" />
                </span>
                <span className="inbox---icons">
                  <img src={Mialimages.delete} alt="" />
                </span>
                <span className="inbox---icons foler--move--border">
                  <img src={Mialimages.foldermove} alt="" />
                </span>
                <span className="inbox---icons">
                  <img src={Mialimages.readmail} alt="" />
                </span>
              </div>
              <div className="wrapper--center">
                <div className="search--box">
                  <span className="inbox---icons">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input type="text" placeholder="Search..." />
                </div>
              </div>
              <div className="wrapper--right">
                <div className="total--messagesss">
                  <p>
                    <span className="inbox---icons">
                      <i className="fa-solid fa-angle-left"></i>
                    </span>
                    1 of 200
                    <span className="inbox---icons">
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </p>
                </div>
                <span className="inbox---icons">
                  <img src={Mialimages.filter} alt="" />
                </span>
                <span className="inbox---icons">
                  <img src={Mialimages.setting} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {InboxUser.map((element) => {
            return <InBoxUser element={element} key={element.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
