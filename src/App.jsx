import "./App.css";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/Sidebar";
import Dashbord from "./components/dashbord/DashbordScreen";
import Appointments from "./components/appointments/AppointmentsScreen";

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="home-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>

        <div className="content-row">
          <div className="dashboard-container">
            <Dashbord />
          </div>
          <div className="appointments-container">
            <Appointments />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
