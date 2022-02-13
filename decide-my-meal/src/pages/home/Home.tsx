import React from "react";
import StyledNavbar from "../../components/layout/navbar/Navbar.style";
import MainForm from "../../components/forms/MainForm";

const Home: React.FC = () => {
  return (
    <div>
      {/* <StyledNavbar className="main-nav" /> */}
      <div className="content-wrapper">
        <MainForm />
      </div>
    </div>
  );
};

export default Home;
