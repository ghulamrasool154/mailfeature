import React from "react";
import "./EmailBody.css";

const EmailBody = (props) => {
  const {
    img,
    name,
    time,
    icon1,
    subject,
    icon2,
    disc,
    pressedFunction1,
    pressedFunction2,
    hanldeChangeData,
    id,
  } = props;

  return (
    <>
      <div className="email_body_main_wrapper">
        <div className="first justify-content-between align-items-center">
          <div className="d-flex align-items-center ">
            <img src={img} alt="email" className="email_image" />
            <h5 className="mb-0" onClick={() => hanldeChangeData(id)}>
              {name}
            </h5>
          </div>

          <div className="d-flex name_date">
            <p className="mb-0">{time}</p>
          </div>
        </div>
        <div className="second d-flex">
          <p className="menu_list_icon mb-0" onClick={pressedFunction1}>
            {icon1}
          </p>
          <h5 className="subject_title">{subject}</h5>
        </div>
        <div className="third d-flex">
          <p className="bookmark_icon" onClick={pressedFunction2}>
            {icon2}
          </p>
          <h5 className="detail_para">{disc}</h5>
        </div>
      </div>
    </>
  );
};

export default EmailBody;
