import "./Sidebar.css";
import { SidebarMenu } from "../../data/SidebarMenu";
import { NavLink, Link } from "react-router-dom";
import { LabelList } from "../../data/LabelList";
import { useContext, useState } from "react";
import { contentCreate } from "../../utils/useReducer";
import PopOver from "../../components/popover/PopOver";
import Newlabel from "../../components/NewLabel/Newlabel";
import EditLabel from "../../components/editlabel/EditLabel";
const Sidebar = () => {
  const hanldEdit = () => {
    console.log("edit");
  };

  const data = useContext(contentCreate);
  const menuToggleTF = data.state.menuToggle;
  const [popUp, setPopup] = useState(false);
  const [labelPop, setLabelPo] = useState(false);
  const [editlabel, setEidtLabel] = useState(false);
  const hanldeNewlabel = () => {
    setLabelPo(!labelPop);
    setEidtLabel(false);
  };
  const hanldePoup = () => {
    setPopup(!popUp);
  };
  const hanldeEditLabel = () => {
    setEidtLabel(!editlabel);
    setLabelPo(false);
  };
  return (
    <>
      {popUp && <PopOver hanldePoup={hanldePoup} />}

      <div
        className={
          data.state.menuToggle ? " side--bar--menu hidden" : "side--bar--menu"
        }
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col p-0 m-0">
              <div className="sidebar--mail--feature">
                {data.state.menuToggle ? (
                  <span
                    className="new--message--button"
                    style={{
                      margin: "10px",
                    }}
                    title="New Messgae"
                    onClick={hanldePoup}
                  >
                    <i className="fa-solid fa-plus" />
                  </span>
                ) : (
                  <div onClick={hanldePoup} className="new--message--button">
                    new message{" "}
                  </div>
                )}

                <ul>
                  {SidebarMenu.map((element) => {
                    return (
                      <li key={element.id}>
                        <NavLink to={element.link}>
                          <img src={element.icon} alt={element.name} />
                          <span
                            className={
                              data.state.menuToggle
                                ? "menu---text hidden"
                                : "menu---text"
                            }
                          >
                            {element.name}
                          </span>
                        </NavLink>

                        <span
                          className="inbox---bage--- badge bg-danger "
                          style={{
                            right: menuToggleTF && "25px",
                            top: menuToggleTF && "10px",
                          }}
                        >
                          {element.inbox}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="sidebar--label">
                <div
                  className="sidebar--label--title"
                  style={{
                    flexDirection: data.state.menuToggle ? "column " : "",
                  }}
                >
                  <h4>label </h4>
                  <span className="sidebar--icon" onClick={hanldeNewlabel}>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
                <ul>
                  {LabelList.map((element) => {
                    return (
                      <li key={element.id}>
                        <a>
                          <div
                            className={`color-${element.id} icon`}
                            style={{ position: "relative" }}
                          ></div>
                          <span
                            className={
                              data.state.menuToggle ? "menu--hidden" : ""
                            }
                          >
                            {element.name}
                          </span>
                        </a>{" "}
                        <div className="three--doot" onClick={hanldeEditLabel}>
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </div>
                      </li>
                    );
                  })}
                  {editlabel && (
                    <EditLabel
                      state={data.state.menuToggle}
                      hanldeEditLabel={hanldeEditLabel}
                    />
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {labelPop && <Newlabel hanldeNewlabel={hanldeNewlabel} />}
      </div>
    </>
  );
};

export default Sidebar;
