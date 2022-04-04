// import styles from './App.module.css';
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <NavBar />
    </Router>
  );
}

export default App;
