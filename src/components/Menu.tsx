import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

type Props = {};

const Menu = () => {
  const { isVisible } = useContext(MenuContext);

  const menuClass = `menu-container ${isVisible ? " active" : ""}`;

  return (
    <div className={menuClass}>
      <ul>
        <li>Statistics</li>
        <li>New element</li>
        <li>Third option</li>
        <li className="li-logout">Logout</li>
      </ul>
    </div>
  );
};

export default Menu;
