import "./DashbordScreen.css";
import { FaChevronDown } from "react-icons/fa";
import Activity from "../activity/Activity";
import OrgansSection from "./organs/OrgansSection";
import humanbody from "../../assets/humanbody.png";
import { FaArrowRight } from "react-icons/fa";

const Dashbord = () => {
  return (
    <div className="dashbord-screen">
      <div className="dashbord-container">
        <div>
          <h5 className="dashbord-heading">Dashboard</h5>
        </div>

        <div className="dashbord-week-container">
          <p style={{ margin: 5 }}>This Week</p>
          <FaChevronDown />
        </div>
      </div>
      <div className="dashboard-human-organs-container">
        <div className="dashbord-human-container">
          <img
            src="https://res.cloudinary.com/dqnutkhli/image/upload/v1748183940/ChatGPT_Image_May_25_2025_08_06_30_PM_qibrkw.png"
            alt="Human"
            className="dashbord-human-image"
          />
        </div>

        <div className="dashbord-organs-section">
          <div className="lungs">
            {" "}
            <OrgansSection name={"lung"} date={"12-3-2034"} />
          </div>

          <div className="lungs">
            <OrgansSection name={"tooth"} date={"12-3-2034"} />
          </div>
          <div className="lungs">
            {" "}
            <OrgansSection name={"bone"} date={"12-3-2034"} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {" "}
              <div style={{ margin: "10px", display:'flex',  alignItems:'center'}}>
                <p
                  style={{ margin: "10px", color: "#313396", fontSize: "12px" }}
                >
                  Details
                </p>
                <FaArrowRight style={{ color: "#313396", fontSize: "12px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Activity />
    </div>
  );
};
export default Dashbord;
