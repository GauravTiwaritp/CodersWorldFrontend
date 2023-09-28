import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import StepName from "./pages/Steps/StepName/StepName";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
import Activate from "./pages/Activate/Activate";
import SemiProtectedRoute from "./SemiProtectedRoute";
import Rooms from "./pages/Rooms/Rooms";

function App() {
  const [user, setUser] = useState({
    name: "Gaurav",
    activated: true,
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<Home />} />
            <Route path="/authenticate" element={<Authenticate />} />
            <Route
              path="/rooms"
              element={
                <ProtectedRoute user={user}>
                  <Rooms />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path="/activate"
            element={
              <SemiProtectedRoute user={user}>
                <Activate />
              </SemiProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
