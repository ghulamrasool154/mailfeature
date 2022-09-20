import React from "react";
import "./GroupMember.css";
const GroupMember = (props) => {
  const {
    logo,
    memberheading,
    members,
    fileImage,
    filename,
    filesize,
    photosbackground,
    userIcon,
    username,
    profession,
    filename2,
    filesize2,
    filename3,
    filesize3,
    fileImage2,
    fileImage3,
    photosbackground2,
    photosbackground3,
    userIcon2,
    username2,
    profession2,
    userIcon3,
    username3,
    profession3,
    memerShow,
  } = props;
  return (
    <>
      <div className="main_group_member_wrapper">
        <span className="desinger---close---menu" onClick={memerShow}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div className="member_top border-bottom">
          <img src={logo} alt="logo" className="logo" />
          <h5>{memberheading}</h5>
          <p>{members}</p>
        </div>
        <div className="files_section border-bottom">
          <div className="files_view">
            <p className="files">Files</p>
            <p className="viewall">View All</p>
          </div>
          <div className="d-flex align-items-center main-file-wrapper">
            <img src={fileImage} alt="fileimage" className="file_image" />
            <div className="nameNsize">
              <h5>{filename}</h5>
              <p>{filesize}</p>
            </div>
          </div>
          <div className="d-flex align-items-center main-file-wrapper">
            <img src={fileImage2} alt="fileimage" className="file_image" />
            <div className="nameNsize">
              <h5>{filename2}</h5>
              <p>{filesize2}</p>
            </div>
          </div>
          <div className="d-flex align-items-center main-file-wrapper">
            <img src={fileImage3} alt="fileimage" className="file_image" />
            <div className="nameNsize">
              <h5>{filename3}</h5>
              <p>{filesize3}</p>
            </div>
          </div>
        </div>
        <div className="photos">
          <div className="photos_view">
            <p className="files">Photos</p>
            <p className="viewall">View All</p>
          </div>
          <div className="images_section border-bottom d-flex justify-content-between">
            <img
              src={photosbackground}
              alt="photos"
              className="imgbackground"
            />
            <img
              src={photosbackground2}
              alt="photos"
              className="imgbackground"
            />
            <img
              src={photosbackground3}
              alt="photos"
              className="imgbackground"
            />
          </div>
        </div>
        <div className="memeberviewlist">
          <div className="members_view">
            <p className="files">Members</p>
            <p className="viewall">View All</p>
          </div>
          <div className="d-flex member_lists">
            <img src={userIcon} alt="iconimage" className="icon_image" />
            <div className="nameNsize">
              <h5>{username}</h5>
              <p>{profession}</p>
            </div>
          </div>
          <div className="d-flex member_lists">
            <img src={userIcon2} alt="iconimage" className="icon_image" />
            <div className="nameNsize">
              <h5>{username2}</h5>
              <p>{profession2}</p>
            </div>
          </div>
          <div className="d-flex member_lists">
            <img src={userIcon3} alt="iconimage" className="icon_image" />
            <div className="nameNsize">
              <h5>{username3}</h5>
              <p>{profession3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupMember;
