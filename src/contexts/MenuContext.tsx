import { createContext, useState } from "react";

type MenuContextProviderProps = {
  children: React.ReactNode;
};

type MenuContextType = {
  isVisible: boolean;
  toggleMenu: () => void;
};

const MenuContext = createContext<MenuContextType>({
  isVisible: false,
  toggleMenu: () => {},
});

function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [isVisible, setIsVisible] = useState(false);

  function toggleMenu() {
    console.log("toggle");
    setIsVisible((prev) => !prev);
  }

  return (
    <MenuContext.Provider value={{ isVisible, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContextProvider, MenuContext };
