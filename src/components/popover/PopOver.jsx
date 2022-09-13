import React from "react";
import "./PopOver.css";
import { Mialimages } from "../../feature/Mialimages";
import { useState } from "react";
import CkEditior from "../ckeditior/CkEditior";
import { TagsInput } from "react-tag-input-component";

import PopUpAttach from "../Popupattach/PopUpAttach";
const PopOver = ({ hanldePoup }) => {
  const [attachments, setAttachments] = useState([
    {
      pdfimage: Mialimages.pdf,
      fileName: "Resume.pdf",
      size: "520 KB",
      downloadicon: Mialimages.download,
    },
  ]);
  console.log(attachments, "hello");
  const [selected, setSelected] = useState(["Refina Cooper"]);
  const [subject, setSubject] = useState("Order Status #24197118");
  return (
    <>
      <div className="overlay--popupp--seting">
        <div className="email-popup-filter-modal-dialog">
          <div className="heading_email">
            <h5>New Message</h5>
            <img
              src={Mialimages.closemenu}
              className="close--icon"
              onClick={hanldePoup}
            />
          </div>
          <div className="discover2-popup-modal-content">
            <div className="discover2-popup-modal-body">
              <div className="modal--top">
                <div className="main_to_cc_bc d-flex justify-content-between">
                  <h5>To</h5>
                  <div className="d-flex">
                    {" "}
                    <h5>CC</h5> <h5 className="ms-3">Bcc</h5>
                  </div>
                </div>
                <div>
                  <div className="pop_to">
                    <div className="name_place_2">
                      <TagsInput
                        value={selected}
                        onChange={setSelected}
                        name="e-mail"
                        placeHolder="Please Enter Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="subject_pop">
                  <h5>Subject</h5>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-100"
                  />
                </div>
                <div className="message">
                  <h5>Message</h5>

                  <CkEditior />
                </div>
                <div className="mt-3">
                  {attachments.map((e, idx) => (
                    <PopUpAttach
                      key={idx}
                      pdfimage={e.pdfimage}
                      fileName={e.fileName}
                      size={e.size}
                      downloadicon={e.downloadicon}
                    />
                  ))}
                </div>

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
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="btnGroupDrop1"
                      >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PopOver;
