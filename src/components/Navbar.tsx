import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

type Props = {};

const Navbar = (props: Props) => {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <div className="navbar">
      <span>Navbar</span>
      <i className="ri-menu-line" onClick={toggleMenu}></i>
    </div>
  );
};

export default Navbar;
