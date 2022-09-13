import "./Header.css";
import { Mialimages } from "../../feature/Mialimages";
import { useContext } from "react";
import { contentCreate } from "../../utils/useReducer";
const Header = () => {
  const data = useContext(contentCreate);

  return (
    <>
      <header>
        <div className="container-fluid ps-0">
          <div className="row  align-items-center justify-content-between">
            <div className="col-lg-6 ps-0">
              <div className="header--leftside">
                <img
                  src={Mialimages.menu}
                  alt="logo"
                  className="img-fluid"
                  onClick={() =>
                    data.dispatch({
                      type: "TOGGLE",
                    })
                  }
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="header--rightside">
                <div className="header--icons">
                  <span className="h--icons--">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <span className="h--icons--  bell--notifi">
                    <i className="fa-solid fa-bell"></i>

                    <div className="header--notifi"></div>
                  </span>
                </div>
                <div className="header--profile">
                  <img src={Mialimages.user1} alt="" />
                  <h4>ArtTemplate</h4>
                  <span className="header--pro--icon">
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
