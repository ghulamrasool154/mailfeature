import React from "react";
import { Mialimages } from "../../feature/Mialimages";
import "./MultiUser.css";
import Chatsidebar from "../../components/chatsidebar/Chatsidebar";
import { useContext } from "react";
import { contentCreate } from "../../utils/useReducer";
import GroupMembersChat from "../GroupMembersChat/GroupMembersChat";
const MultiUser = () => {
  const data = useContext(contentCreate);
  const teamProfile = data.state.popTeamProfile;
  const memerShow = () => {
    data.dispatch({
      type: "TEAMPROFILE",
    });
  };
  return (
    <>
      <section className="full_wrapper_invite">
        <div className="d-flex inner_wrapper_multi_user">
          <div className="multi_user_sideBar">
            <Chatsidebar />
          </div>
          <div className="inbox_multi_user_">
            <div className="chat--user--profile">
              <div className="prof--u---left">
                <img src={Mialimages.designer} alt="" />
                {/* <span className="active---user"></span> */}
                <h3 onClick={memerShow}>Designers</h3>
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
            <div className="inobx_chat">
              {" "}
              <div className="first_user_ d-flex ">
                <div className="">
                  <img src={Mialimages.user2} alt="designer icon" />
                </div>
                <div className="nameNdate">
                  <div className="d-flex time_ago align-items-center">
                    <h5 className="mb-0">Jane Wilson</h5>
                    <p className="mb-0">1 day ago</p>
                  </div>
                  <p className="detail_mulit">
                    Hi Cody, any progress on the project ?{" "}
                    <i className="fa-solid fa-face-smile"></i>
                  </p>
                </div>
              </div>
              <div className="second_user_ d-flex ">
                <div>
                  <img src={Mialimages.user4} alt="designer icon" />
                </div>
                <div className="nameNdate">
                  <div className="d-flex time_ago align-items-center">
                    <h5 className="mb-0">Jacob Hawkins</h5>
                    <p className="mb-0">1 day ago </p>
                  </div>
                  <p className="detail_mulit">
                    Hi Jane! <br /> Yes. I just finished developing the "Chat"
                    template. <i className="fa-solid fa-face-smile"></i>
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      src={Mialimages.bg}
                      alt="background"
                      className="imagemulti"
                    />
                    <img
                      src={Mialimages.bg2}
                      alt="background"
                      className="imagemulti2"
                    />
                    <img
                      src={Mialimages.bg3}
                      alt="background"
                      className="imagemulti3"
                    />
                    <h5 className="more">+3</h5>
                  </div>
                </div>
              </div>
              <div className="third_user_ d-flex ">
                <div>
                  <img src={Mialimages.user2} alt="designer icon" />
                </div>
                <div className="nameNdate">
                  <div className="d-flex time_ago align-items-center">
                    <h5 className="mb-0">Jane Wilson</h5>
                    <p className="mb-0">1 day ago</p>
                  </div>
                  <p className="detail_mulit">
                    It looks amazing.
                    <br />
                    The customer will be very satisfied.{" "}
                    <i className="fa-solid fa-face-smile"></i>
                  </p>
                </div>
              </div>
              <div className="fourth_user_ d-flex ">
                <div>
                  <img src={Mialimages.user4} alt="designer icon" />
                </div>
                <div className="nameNdate">
                  <div className="d-flex time_ago align-items-center">
                    <h5 className="mb-0">Jacob Hawkins</h5>
                    <p className="mb-0">1 day ago</p>
                  </div>
                  <p className="detail_mulit">
                    Thank you, glad you liked it. Send me Styles Guide.
                  </p>
                </div>
              </div>
              <div className="todaty_invite">
                <h6 className="text-center">Today</h6>
              </div>
              {/* today section start here */}
              <div className="fourth_user_ d-flex ">
                <div>
                  <img src={Mialimages.user4} alt="designer icon" />
                </div>
                <div className="nameNdate">
                  <div className="d-flex time_ago align-items-center">
                    <h5 className="mb-0">Jane Wilson</h5>
                    <p className="mb-0">2 Min ago</p>
                  </div>
                  <div className="download_section">
                    <div className="d-flex align-items-center">
                      <img src={Mialimages.pdf} alt="pdf icon" />
                      <div className="detail_invite">
                        <h5 className="mb-0">Brand Styles Guide.pdf</h5>
                        <p className="mb-0">487 KB</p>
                      </div>
                    </div>
                    <img src={Mialimages.download} alt="download" />
                  </div>
                </div>
              </div>
              <div className="fifth_user_ d-flex ">
                <div>
                  <img src={Mialimages.user5} alt="designer icon" />
                </div>
                <div className="nameNdate">
                  <div className="d-flex time_ago align-items-center">
                    <h5 className="mb-0">Jacob Hawkins</h5>
                    <p className="mb-0">1 Min ago</p>
                  </div>
                  <div>
                    <p className="detail_mulit">I'll see later</p>
                  </div>
                  <div className="download_section">
                    <div className="d-flex align-items-center">
                      <img src={Mialimages.figma} alt="pdf icon" />
                      <div className="detail_invite">
                        <h5 className="mb-0">Rocket - Admin Dashboard.fig</h5>
                        <p className="mb-0">8.2 MB</p>
                      </div>
                    </div>
                    <img src={Mialimages.download} alt="download" />
                  </div>
                </div>
              </div>
              <div className="first_user_ d-flex ">
                <div>
                  <img src={Mialimages.user2} alt="designer icon" />
                </div>
                <div className="nameNdate">
                  <div className="d-flex time_ago align-items-center">
                    <h5 className="mb-0">Jane Wilson</h5>
                    <p className="mb-0">1 min ago</p>
                  </div>
                  <p className="detail_mulit">
                    OK, Thank You Jacob{" "}
                    <i className="fa-solid fa-face-smile"></i>
                  </p>
                </div>
              </div>
              {/* today section ends here */}
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
          <div
            className={
              teamProfile
                ? "overlay_wrapper_designer "
                : "overlay_wrapper_designer hidden"
            }
          >
            <GroupMembersChat memerShow={memerShow} />
          </div>
        </div>
      </section>
    </>
  );
};

export default MultiUser;
