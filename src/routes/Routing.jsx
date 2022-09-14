import { Route, Routes } from "react-router-dom";
import { Home, Inbox } from "../pages/Pages";
import "./Routes.css";
import Sidebar from "../layout/siderbar/Sidebar";
import { contentCreate } from "../utils/useReducer";
import { useContext } from "react";
import SingleUserProfile from "../components/singleUserProfile/SingleUserProfile";
import MobileSidebar from "../layout/siderbar/MobileSidebar";
const Routing = () => {
  const data = useContext(contentCreate);
  const classChange = data.state.menuToggle;
  const mobSidebar = data.state.mobileMenuToggle;
  console.log(">", mobSidebar);

  return (
    <>
      <main className="content">
        <Sidebar />

        {mobSidebar && <MobileSidebar />}

        <div className={classChange ? "main--content--min" : "main--content"}>
          <Routes>
            <Route path="/" element={<SingleUserProfile />} />
            <Route path="mail" element={<Home />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="chat" element={<h1>Home page</h1>} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default Routing;
