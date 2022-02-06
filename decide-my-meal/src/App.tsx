import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import StyledNavbar from "./components/layout/navbar/Navbar.style";

const App: React.FC = () => {
  return (
    <div className="App">
      <StyledNavbar className="main-nav" />
    </div>
  );
};

export default App;
