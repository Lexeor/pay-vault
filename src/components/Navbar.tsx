import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

type Props = {};

const Navbar = (props: Props) => {
  const { isVisible, toggleMenu } = useContext(MenuContext);

  return (
    <div className="navbar">
      <span>{isVisible ? "Menu" : "Pay Vault"}</span>
      <i
        className={isVisible ? "ri-close-line" : "ri-menu-line"}
        onClick={toggleMenu}
      ></i>
    </div>
  );
};

export default Navbar;
