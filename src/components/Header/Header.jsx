import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-search-container">
        <div className="logo-container">
          <h2 className="heading-logo1">
            Health<span className="heading-logo2">care.</span>
          </h2>
        </div>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="search"
            placeholder="Search"
            disabled
            className="search-input"
          />
          <FaBell className="input-icon-right" />
        </div>
      </div>

      <div className="avtar-add-container">
        <button className="avatar-button" disabled>
          <img
            className="avatar"
            src="https://res.cloudinary.com/dqnutkhli/image/upload/v1748084032/c84082ec-d429-4ddd-9e6d-b162ba88a5aa_eywc5p.jpg"
          />
        </button>
        <button className="add-button" disabled>
          <FaPlus style={{ color: "#ffffff" }} />
        </button>
      </div>
    </div>
  );
};

export default Header;
