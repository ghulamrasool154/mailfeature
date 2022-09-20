import { SidebarMenu } from "../../data/SidebarMenu";
import "./MobileSidebar.css";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { contentCreate } from "../../utils/useReducer";
import { LabelList } from "../../data/LabelList";
const MobileSidebar = () => {
  const data = useContext(contentCreate);

  return (
    <div className="mobil--menu">
      <aside className="MobileSidebar--overlay">
        <div className="mobile--side--bar--menu">
          <span
            className="close---side--menu"
            onClick={() =>
              data.dispatch({
                type: "MOBILETOGGLE",
              })
            }
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
          <ul>
            {SidebarMenu.map((element) => {
              return (
                <li key={element.id}>
                  <NavLink
                    to={element.link}
                    onClick={() =>
                      data.dispatch({
                        type: "MOBILETOGGLE",
                      })
                    }
                  >
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
            {/* onClick={hanldeNewlabel} */}
            <span className="sidebar--icon">
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
          <ul>
            {LabelList.map((element) => {
              return (
                <li key={element.id}>
                  <Link to={""}>
                    <div
                      className={`color-${element.id} icon`}
                      style={{ position: "relative" }}
                    ></div>
                    <span
                      className={data.state.menuToggle ? "menu--hidden" : ""}
                    >
                      {element.name}
                    </span>
                  </Link>{" "}
                  <div className="three--doot">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </div>
                </li>
              );
            })}
            {/* {editlabel && (
              <EditLabel
                state={data.state.menuToggle}
                hanldeEditLabel={hanldeEditLabel}
              />
            )} */}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default MobileSidebar;
