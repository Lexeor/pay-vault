import MainRoutes from "./Routes";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import Menu from "./components/Menu";
import { MenuContextProvider } from "./contexts/MenuContext";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <MenuContextProvider>
        {location.pathname !== "/login" && <Navbar />}
        <MainRoutes />
        <Menu />
      </MenuContextProvider>
    </div>
  );
}

export default App;
