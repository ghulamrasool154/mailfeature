import { Route, Routes } from "react-router-dom";
import { Home, Inbox, Chat, PageNotFound, MultiUser } from "../pages/Pages";
import "./Routes.css";
import Sidebar from "../layout/siderbar/Sidebar";
import { contentCreate } from "../utils/useReducer";
import { useContext } from "react";
import MobileSidebar from "../layout/siderbar/MobileSidebar";
import ResponsiveEmailDesign from "../pages/ResponsiveEmailDesign/ResponsiveEmailDesign";
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
            <Route path="/" element={<Home />} />
            <Route path="mail" element={<Home />} />
            <Route path="mail/:id" element={<ResponsiveEmailDesign />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="Chat" element={<Chat />} />
            <Route path="private-grou-chat" element={<MultiUser />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default Routing;
