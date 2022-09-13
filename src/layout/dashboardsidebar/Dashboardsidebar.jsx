import { MainMenu } from "../../data/MainMenu";
import "./dashboardsidebar.css";
import { Link } from "react-router-dom";
import { Mialimages } from "../../feature/Mialimages";
const Dashboardsidebar = () => {
  return (
    <>
      <div className="sidebar--menu--dashboard">
        <ul>
          <li>
            <Link to={"/"}>
              <img src={Mialimages.logo} alt="" className="img-fluid" />
            </Link>
          </li>
          {MainMenu.map((element) => {
            return (
              <li key={element.id}>
                {/* <Link to={element.link}> */}
                <img src={element.icon} alt="" className="img-fluid" />
                {/* </Link> */}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Dashboardsidebar;
