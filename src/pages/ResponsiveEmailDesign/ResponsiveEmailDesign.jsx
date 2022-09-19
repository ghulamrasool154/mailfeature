import React, { useState, useEffect } from "react";
import { Mialimages } from "../../feature/Mialimages";
import EmailTemplate from "../../components/emailtemplate/EmailTemplate";
import { InboxUser } from "../../data/InboxUser";
import { useParams, Link } from "react-router-dom";
const ResponsiveEmailDesign = () => {
  const parmes = useParams();
  console.log("id", parmes.id);

  const [singlData, setSingleData] = useState(null);
  useEffect(() => {
    const userSingle = InboxUser.find((els) => els.id == parmes.id);
    if (userSingle) {
      setSingleData(userSingle);
    } else {
      setSingleData(null);
    }
    console.log("data ", userSingle);
  }, []);

  return (
    <>
      <div className="responsive_email_design">
        <section className="email_design_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 p-0">
                <div className="main_top_bar d-flex justify-content-between align-items-center">
                  <div className="first_">
                    <Link to="/mail">
                      <i className="fa-sharp fa-solid fa-reply"></i>
                    </Link>
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
                {singlData && (
                  <EmailTemplate
                    icon={singlData.img}
                    title={singlData.name}
                    subject={singlData.subject}
                    discription={singlData.disc}
                    emailaddress={singlData.email}
                    pdfimage={singlData.icon1}
                    date={singlData.date}
                    time={singlData.time}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResponsiveEmailDesign;
