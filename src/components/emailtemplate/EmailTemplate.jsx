import React, { useState } from "react";
import "./EmailTemplate.css";
import CkEditior from "../ckeditior/CkEditior";
import { TagsInput } from "react-tag-input-component";
import { Mialimages } from "../../feature/Mialimages";
const EmailTemplate = (props) => {
  const [selected, setSelected] = useState(["Refina Cooper"]);
  const {
    icon,
    emailaddress,
    date,
    time,
    title,
    subject,
    discription,
    pdfimage,
    fileName,
    size,
    downloadicon,
  } = props;

  return (
    <>
      <div className="email_template_wrapper_main">
        <div className="email_template_top_section">
          <div className="d-flex align-items-center">
            <img src={icon} alt="icon" />
            <div className="title_email">
              <h5 className="mb-0">{title}</h5>
              <a href="#">{emailaddress}</a>
            </div>
          </div>

          <div className="email__template__top__right__side">
            <p>
              {date}-{time}
            </p>
          </div>
        </div>
        <div className="subject_Disp">
          <h2>{subject}</h2>
          <p>{discription}</p>
        </div>
        <div className="d-flex">
          <div className="download_file">
            <a href="#" download>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img src={Mialimages.pdf} alt="pdf icon" />
                  <div className="filename_size">
                    <h5>Resume.pdf</h5>
                    <p>570 KB</p>
                  </div>
                </div>
                <img src={Mialimages.download} alt="download " />
              </div>
            </a>
          </div>
          <div className="download_file2">
            <a href="#" download>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img src={Mialimages.zip} alt="pdf icon" />
                  <div className="filename_size">
                    <h5>Portfolio.zip</h5>
                    <p className="mb-0">250MB</p>
                  </div>
                </div>
                <img src={Mialimages.download} alt="download " />
              </div>
            </a>
          </div>
        </div>
        <div className="email_body">
          <div className="first_email_section d-flex justify-content-between align-items-center">
            <div className="ccBcc d-flex align-items-center">
              <span className="to">To: </span>

              <div className="name_place">
                <TagsInput
                  value={selected}
                  onChange={setSelected}
                  name="e-mail"
                  placeHolder="Please Enter Email"
                />
              </div>
            </div>
            <div className="cctitkle">
              <span>Cc</span>
              <span>Bcc</span>
            </div>
          </div>

          <CkEditior />

          <div className="button_send_section d-flex align-items-center">
            <div
              className="btn-group"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <button type="button" className="btn btn-primary">
                Send
              </button>
              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <li>
                    <i className="fa-solid fa-clock"></i>
                  </li>
                </button>
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <li>
                    <i className="fa-solid fa-clock"></i>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mb-0 ms-2 attachment">
              <i className="fa-solid fa-paperclip"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailTemplate;
