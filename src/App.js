import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/shared/Navigation/Navigation";
function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Home />
    </>
  );
}

export default App;
