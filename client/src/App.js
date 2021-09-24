import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./Components/NavBar";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <h1>New page</h1>
    </div>
  );
}

export default App;
