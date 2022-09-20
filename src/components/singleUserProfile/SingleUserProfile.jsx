import "./SingleUserProfile.css";
import { Mialimages } from "../../feature/Mialimages";
import { useContext } from "react";
import { contentCreate } from "../../utils/useReducer";
const SingleUserProfile = () => {
  const data = useContext(contentCreate);
  const newData = data.state.mobileProfile;
  const memerShow = () => {
    data.dispatch({
      type: "MOBILEPROFILE",
    });
  };
  return (
    <span
      className={newData ? "sidebar---overlay" : "sidebar---overlay hidden"}
    >
      <div className="SingleUserProfile">
        <div className="colse---single--user--profile">
          <span className="close--icon" onClick={memerShow}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className="user--detail">
          <div className="user--about">
            <div className="user--about--detail">
              <div className="u--about--img">
                <img src={Mialimages.userprofile} alt="" />
                <div className="user--online"></div>
              </div>
              <h2 className="user--about--name">
                Jane <strong>Wilson</strong>
              </h2>
              <h2 className="user--about--desi">Cretive Director</h2>
            </div>
          </div>
          <div className="user--info">
            <div className="user--about--detail">
              <h2 className="title--">info</h2>
              <div className="u-about--group">
                <label>Email</label>
                <p>examle@mail.com</p>
              </div>
              <div className="u-about--group">
                <label>Email</label>
                <p>examle@mail.com</p>
              </div>
              <div className="u-about--group">
                <label>Birthday</label>
                <p> 17 march, 1995</p>
              </div>
              <div className="u-about--group">
                <label>location</label>
                <p>New York, Ny</p>
              </div>
            </div>
          </div>
          <div className="user--media">
            <div className="user--media--detail">
              <div className="title---section">
                <h2 className="title--">media</h2>
                <a className="view--all" href="/">
                  view all
                </a>
              </div>
              <div className="all--images">
                <div className="imgess--list">
                  <img src={Mialimages.bg} alt="" />
                </div>
                <div className="imgess--list">
                  <img src={Mialimages.bg2} alt="" />
                </div>
                <div className="imgess--list">
                  <img src={Mialimages.bg3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default SingleUserProfile;
