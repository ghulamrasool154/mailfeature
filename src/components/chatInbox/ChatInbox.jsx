import "./chatInbox.css";
import { Mialimages } from "../../feature/Mialimages";
import { useContext } from "react";
import { contentCreate } from "../../utils/useReducer";
const ChatInbox = () => {
  const data = useContext(contentCreate);

  const memerShow = () => {
    data.dispatch({
      type: "MOBILEPROFILE",
    });
  };
  return (
    <div className="ChatInbox">
      <div className="chat--user--profile">
        <div className="prof--u---left">
          <img src={Mialimages.user2} alt="" />
          <span className="active---user"></span>
          <h3 onClick={memerShow}>jane wilson</h3>
        </div>
        <div className="prof--u---right">
          <span className="pro--icon pro--r">
            <i className="fa-solid fa-plus"></i>
          </span>
          <span className="pro--icon">
            <i className="fa-solid fa-ellipsis"></i>
          </span>
        </div>
      </div>
      <div className="chat--user--message--detail">
        <div className="chat--01">
          <div className="chat-001-left">
            <img src={Mialimages.user1} alt="" />
          </div>
          <div className="chat-001-right">
            <span className="type--icon">
              <i className="fa-regular fa-face-smile"></i>
            </span>
            <span className="type--icon icons--sss">
              <i className="fa-solid fa-ellipsis"></i>
            </span>
            <span className="chat--01--day">1 day ago</span>
          </div>
        </div>
        <div className="chat--02">
          <div className="user--02--user">
            <p>
              <b>
                Hi Jane! <br />
              </b>
              Yes, i just finished developing the "Chat" template.
              <span className="type--icon">
                <i className="fa-solid fa-ellipsis"></i>
              </span>
            </p>

            <img src={Mialimages.user2} alt="" />
          </div>
          <p className="chat--01--day">1 day ago</p>
          <div className="chat--02--imagess">
            <img src={Mialimages.bg} alt="" />
            <img src={Mialimages.bg2} alt="" />
            <img src={Mialimages.bg3} alt="" />
            <img src={Mialimages.threePlus} alt="" />
            <span></span>
          </div>
        </div>

        <div className="chat-03">
          <p className="today">today</p>
          <div className="chat--details">
            <h5>Brand Styles Guide.pdf</h5>
            <div className="chat--03--sizing">
              <p className="size">487 kb</p>
              <span className="type--icon">
                <i className="fa-solid fa-ellipsis"></i>
              </span>
            </div>
            <div className="down--section">
              <img src={Mialimages.user3} alt="" />
              <div className="download">
                download{" "}
                <span className="type--icon">
                  <i className="fa-solid fa-arrow-down-long"></i>
                </span>
                <span className="down--time">2 min ago</span>
              </div>
            </div>
          </div>
        </div>
        <div className="chat--04">
          <div className="chat--04--content">
            <span className="type--icon">
              <i className="fa-solid fa-ellipsis"></i>
            </span>
            <p>Ill see later</p>
            <img src={Mialimages.user3} alt="" />

            <span className="down--time">2 min ago</span>
          </div>
        </div>
      </div>
      <div className="chat--user--type--message">
        <div className="type--message--left">
          <span className="type--icon">
            <i className="fa-solid fa-paperclip"></i>
          </span>
          <span className="type--icon">
            <i className="fa-regular fa-face-smile"></i>
          </span>
          <span className="chating--inbox">
            <input type="text" placeholder="Type a Message here..." />
          </span>
        </div>
        <div className="type--message--right">
          <span className="type--icon">
            <i className="fa-solid fa-paper-plane"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatInbox;
