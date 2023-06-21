import { useState, useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

import { logout } from "../services/auth.service";

const Menu = () => {
  const { isVisible } = useContext(MenuContext);
  const [userOptVisible, setUserOptVisible] = useState(false);

  function toggleUserOptions() {
    setUserOptVisible((prev) => !prev);
  }

  const menuClass = `menu-container ${isVisible ? " active" : ""}`;

  return (
    <div className={menuClass}>
      <ul>
        <li>Statistics</li>
        <li>New element</li>
        <li>Third option</li>
      </ul>
      <button className="user-btn" onClick={toggleUserOptions}>
        User Name
        <i
          className={`ri-arrow-down-s-fill${userOptVisible ? " rotated" : ""}`}
        ></i>
      </button>
      <div className={`user-options${!userOptVisible ? " hidden" : ""}`}>
        <ul>
          <li>Settings</li>
          <li onClick={logout}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
