import "./Header.css";
import { Mialimages } from "../../feature/Mialimages";
import { useContext } from "react";
import { contentCreate } from "../../utils/useReducer";
const Header = () => {
  const data = useContext(contentCreate);

  const MobileResponseMenuToggle = () => {
    data.dispatch({ type: "MOBILETOGGLE" });
    console.log(data.state.mobileMenuToggle);
  };

  return (
    <>
      <header>
        <div className="container-fluid ps-0">
          <div className="row  align-items-center justify-content-between">
            <div className="col-lg-6 col-md-4 col-sm-3 col-2   ps-0">
              <div className="header--leftside">
                <img
                  src={Mialimages.menu}
                  alt="logo"
                  className="img-fluid disktop--responsice---menu"
                  onClick={() =>
                    data.dispatch({
                      type: "TOGGLE",
                    })
                  }
                />
                <img
                  src={Mialimages.menu}
                  alt="logo"
                  className="img-fluid mobile--responsice---menu"
                  onClick={MobileResponseMenuToggle}
                />
              </div>
            </div>
            <div className="col-lg-6  col-md-8  col-sm-9 col-10  ps-0">
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
                <div className="search--icon--header--reponsive">
                  <input type="text" placeholder="Search In Email" />
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
