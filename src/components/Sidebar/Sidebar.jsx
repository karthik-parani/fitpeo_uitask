import "./Sidebar.css";
import {
  FaTachometerAlt,
  FaHistory,
  FaCalendarAlt,
  FaClipboardList,
  FaChartBar,
  FaComments,
  FaLifeRing,
} from "react-icons/fa";
import { FaCog } from "react-icons/fa";


import SidebarSection from "../SidebarSection/SidebarSection";

const generalMenu = [
  { label: "Dashboard", icon: <FaTachometerAlt />, link: "#" },
  { label: "History", icon: <FaHistory />, link: "#" },
  { label: "Calendar", icon: <FaCalendarAlt />, link: "#" },
  { label: "Appointments", icon: <FaClipboardList />, link: "#" },
  { label: "Statistics", icon: <FaChartBar />, link: "#" },
];

const toolsMenu = [
  { label: "Chat", icon: <FaComments />, link: "#" },
  { label: "Support", icon: <FaLifeRing />, link: "#" },
  { label: "Settings", icon: <FaCog />, link: "#" },
];

const Sidebar = () => (
  <div className="card">
    <SidebarSection title="General" items={generalMenu} titleClass="" />
    <SidebarSection title="Tools" items={toolsMenu} titleClass="mt-8" />
  </div>
);

export default Sidebar;
