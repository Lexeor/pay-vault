import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

type Props = {};

const Menu = () => {
  const { isVisible, toggleMenu } = useContext(MenuContext);

  const menuClass = `menu-container ${isVisible ? " active" : ""}`;

  return (
    <div className={menuClass}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <div className="close-btn" onClick={toggleMenu}>
        <i className="ri-close-line"></i>
      </div>
    </div>
  );
};

export default Menu;
