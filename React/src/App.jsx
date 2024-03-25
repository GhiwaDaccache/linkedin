import "./styles/utilities.css";
import "./styles/colors.css";
import "./styles/buttons.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
// import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/home" element={<Home />} />
          {/*  <Route path="/jobs" element={<Jobs />} /> */}
         <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
