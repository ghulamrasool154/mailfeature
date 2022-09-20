import React from "react";
import "./ResponsiveInbox.css";
import { useState } from "react";
import { useEffect } from "react";
import EmailBody from "../../components/emailbody/EmailBody";
import { InboxUser } from "../../data/InboxUser";
import { Link, NavLink, useParams } from "react-router-dom";
const ResponsiveInbox = () => {
  const parms = useParams();

  const [recent, setRecent] = useState("");
  const [IbUser, setIbUser] = useState(InboxUser);
  const [singlData, setSinglData] = useState([]);
  const handleRecent = () => {
    setRecent(recent);
    console.log(recent, "recent is properly worked");
  };
  const hanldeChangeData = (_id) => {
    const newdata = IbUser.find((el) => el.id === _id);

    setSinglData(newdata);
    console.log("test", newdata);
  };
  useEffect(() => {
    const newdata = InboxUser.slice(0, 1)[0];
    console.log(newdata);
    setSinglData(newdata);
  }, []);

  return (
    <>
      <div className="mobile_responsive_view_inbox">
        <section className="email_left_section">
          <div className="containr-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 p-0">
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
                {InboxUser.map((els, index) => (
                  <div className="email_body_main_wrapper" key={index}>
                    <div className="first justify-content-between align-items-center">
                      <div className="d-flex align-items-center ">
                        <img
                          src={els.img}
                          alt="email"
                          className="email_image"
                        />
                        <Link to={`/mail/${els.id}`}>
                          <h5 className="mb-0">{els.name}</h5>
                        </Link>
                      </div>

                      <div className="d-flex name_date">
                        <p className="mb-0">{els.time}</p>
                      </div>
                    </div>
                    <div className="second d-flex">
                      <p className="menu_list_icon mb-0">{els.icon1}</p>
                      <h5 className="subject_title">{els.subject}</h5>
                    </div>
                    <div className="third d-flex">
                      <p className="bookmark_icon">{els.icon2}</p>
                      <h5 className="detail_para">{els.disc}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResponsiveInbox;
