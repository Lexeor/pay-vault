import MainRoutes from "./Routes";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/login" && <Navbar />}
      <MainRoutes />
    </div>
  );
}

export default App;
