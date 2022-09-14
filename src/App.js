import Header from "./layout/header/Header";
import "./App.css";
import Routing from "./routes/Routing";
import Dashboardsidebar from "./layout/dashboardsidebar/Dashboardsidebar";
import MobileSidebar from "./layout/siderbar/MobileSidebar";
function App() {
  return (
    <div className="App">
      <Header />

      <Dashboardsidebar />
      <Routing />
    </div>
  );
}

export default App;
