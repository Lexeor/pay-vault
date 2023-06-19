import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

import { logout, getCurrentUser } from "../services/auth.service";

type Props = {};

const Menu = () => {
  const { isVisible } = useContext(MenuContext);

  console.log(getCurrentUser());

  const menuClass = `menu-container ${isVisible ? " active" : ""}`;

  return (
    <div className={menuClass}>
      <ul>
        <li>Statistics</li>
        <li>New element</li>
        <li>Third option</li>
      </ul>
      <button className="user-btn" onClick={logout}>
        User Name
        <i className="ri-arrow-down-s-fill"></i>
      </button>
    </div>
  );
};

export default Menu;
