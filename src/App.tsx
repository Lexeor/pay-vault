import MainRoutes from "./Routes";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="App">
      {location.pathname !== "/login" && <Navbar />}
      <MainRoutes />
    </div>
  );
}

export default App;
