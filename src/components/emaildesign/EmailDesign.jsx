import React, { useState } from "react";
import "./EmailDesign.css";
import { Mialimages } from "../../feature/Mialimages";
import EmailTemplate from "../emailtemplate/EmailTemplate";
const EmailDesign = () => {
  const [emailContent, setEmailContent] = useState([
    {
      icon: Mialimages.user1,
      title: "Regina Cooper",
      emailaddress: "regina_cooper@mail.com",
      date: "May 27,2020",
      time: "10:45",
      subject: "Creative Director Resume",
      discription: "Hello, Regina Cooper!   ",
      pdfimage: Mialimages.pdf,
      fileName: "Resume.pdf",
      size: "520 KB",
      downloadicon: Mialimages.download,
    },
  ]);

  return (
    <>
      <section className="email_design_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <div className="main_top_bar d-flex justify-content-between align-items-center">
                <div className="first_">
                  <i className="fa-sharp fa-solid fa-reply"></i>
                </div>
                <div className="second_ d-flex">
                  <img
                    src={Mialimages.leftarrow}
                    alt="left-arrow"
                    className="left_icon"
                  />
                  <p className="mb-0 number_emails"> 1 of 200</p>
                  <img
                    src={Mialimages.rightarrow}
                    alt="right-arrow"
                    className="right_icon"
                  />
                </div>
                <div className="third_ d-flex align-items-center">
                  <i className="fa-solid fa-bookmark iconsss book"></i>
                  <img
                    src={Mialimages.printer}
                    alt="delete"
                    className="iconsss"
                  />
                  <img
                    src={Mialimages.delete}
                    alt="delete "
                    className="iconsss"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 p-0">
              {emailContent.map((e, idx) => (
                <EmailTemplate
                  key={idx}
                  icon={e.icon}
                  title={e.title}
                  emailaddress={e.emailaddress}
                  date={e.date}
                  time={e.time}
                  subject={e.subject}
                  discription={e.discription}
                  pdfimage={e.pdfimage}
                  fileName={e.fileName}
                  size={e.size}
                  downloadicon={e.downloadicon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailDesign;
