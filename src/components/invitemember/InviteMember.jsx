import React, { useContext } from "react";
import { Mialimages } from "../../feature/Mialimages";
import "./InviteMember.css";
import { TagsInput } from "react-tag-input-component";
import DataInviteMem from "../datainvitemember/DataInviteMem";
import { useState } from "react";
import { contentCreate } from "../../utils/useReducer";
const InviteMember = ({ toggleModel }) => {
  const data = useContext(contentCreate);

  const [invite, setInvite] = useState("6");
  const [selected, setSelected] = useState(["Refina Cooper"]);
  const [invited, setInvited] = useState([
    { inviteicon: Mialimages.user1, UserName: "Regina Cooper" },
    {
      inviteicon: Mialimages.user2,
      UserName: "Jane Wilson",
    },
    {
      inviteicon: Mialimages.user3,
      UserName: "Jane Wilson",
    },
    {
      inviteicon: Mialimages.user4,
      UserName: "Dustin Williamsonk",
    },
    {
      inviteicon: Mialimages.user5,
      UserName: "Brandon Pena",
    },
  ]);

  const hanldeCloseMemnu = () => {
    data.dispatch({
      type: "NEWTEAM",
    });
  };
  return (
    <>
      <div className="invitemember">
        <div className="popup--filter--modal--dialog">
          <div className="">
            <h4>Invite New Members</h4>
            <img
              src={Mialimages.closemenu}
              className="close--icon"
              onClick={hanldeCloseMemnu}
            />
          </div>
          <div className="popup--modal--content">
            <div className="popup--modal--body">
              <div className="modal--top">
                <div>
                  <h5 className="memberInSearch">
                    Invite Members to <span>Designers</span> Team
                  </h5>
                </div>
                <div className="invite_name_place">
                  <TagsInput
                    value={selected}
                    onChange={setSelected}
                    name="e-mail"
                    placeHolder="Please Enter Email"
                  />
                </div>

                <div className="inviteHeading">
                  <h5>Invited {invite}</h5>
                </div>
                {invited.map((e, idx) => (
                  <DataInviteMem
                    key={idx}
                    inviteicon={e.inviteicon}
                    UserName={e.UserName}
                  />
                ))}
                <button className="inviteButton">Invite</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteMember;
