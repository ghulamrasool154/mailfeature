import { useState } from "react";
import "./Newlabel.css";
import { contentCreate } from "../../utils/useReducer";
import { useContext } from "react";
const Newlabel = ({ hanldeNewlabel }) => {
  const [labelIcon, setLabelIcon] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  const data = useContext(contentCreate);
  return (
    <div
      className="new--label"
      style={{
        left: data.state.menuToggle ? "100px" : "300px",
      }}
    >
      <div className="label--title">
        <h4>new label </h4>
        <span className="sidebar--icon">
          <i className="fa-solid fa-plus" onClick={hanldeNewlabel}></i>
        </span>
      </div>
      <div className="label--input">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Personal" />
      </div>
      <div className="label--color">
        <label htmlFor="">Color</label>
        <div className="color--wrappper">
          {labelIcon.map((element, index) => {
            return (
              <div className="label--color" key={index}>
                <div className={`color--icon color--icon-${index + 1}`}></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="label--button">
        <a href="/" target="_blank" rel="noopener noreferrer">
          Create
        </a>
      </div>
    </div>
  );
};

export default Newlabel;
