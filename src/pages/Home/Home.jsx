import React, { useState } from "react";
import "./Home.css";
import EmailBody from "../../components/emailbody/EmailBody";
import { InboxUser } from "../../data/InboxUser";
import EmailDesign from "../../components/emaildesign/EmailDesign";
const Home = () => {
  const [recent, setRecent] = useState("");
  const handleRecent = () => {
    setRecent(recent);
    console.log(recent, "recent is properly worked");
  };
  return (
    <>
      <div className="d-flex">
        <section className="email_left_section">
          <div className="containr-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-4">
                <div className="email_main_wrapper">
                  <div className="email_search_area">
                    <div className="search_icon">
                      <input
                        type="email"
                        className="form-control input_area"
                        id="exampleFormControlInput1"
                        placeholder="Search..."
                      />
                      <i className="fa-solid fa-magnifying-glass search_icon"></i>
                      <div className="recents">
                        <h4 onClick={handleRecent}>
                          Recent{" "}
                          <span>
                            <i className="fa-sharp fa-solid fa-angle-down"></i>
                          </span>{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {InboxUser.map((e, idx) => (
                  <EmailBody
                    key={idx}
                    name={e.name}
                    subject={e.subject}
                    disc={e.disc}
                    time={e.time}
                    img={e.img}
                    icon1={e.icon1}
                    icon2={e.icon2}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <EmailDesign />
      </div>
    </>
  );
};

export default Home;
