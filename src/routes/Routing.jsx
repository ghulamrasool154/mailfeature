import { Route, Routes } from "react-router-dom";
import { Home, Inbox } from "../pages/Pages";
import "./Routes.css";
import Sidebar from "../layout/siderbar/Sidebar";
import { contentCreate } from "../utils/useReducer";
import { useContext } from "react";
const Routing = () => {
  const data = useContext(contentCreate);
  const classChange = data.state.menuToggle;

  return (
    <>
      <main className="content">
        <Sidebar />
        <div className={classChange ? "main--content--min" : "main--content"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="mail" element={<h1>Home page</h1>} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="chat" element={<h1>Home page</h1>} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default Routing;
