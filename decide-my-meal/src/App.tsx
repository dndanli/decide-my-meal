import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Home}></Route>
        </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
};

export default App;
