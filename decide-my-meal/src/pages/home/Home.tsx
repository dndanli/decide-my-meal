import React from "react";
import StyledNavbar from "../../components/layout/navbar/Navbar.style";
import MainForm from "../../components/forms/MainForm";
/**
 *
 * if only one food input then display the + and - buttons
 * if more than 1 then
 *  then display normal food input
 *  make last food input display + and - buttons
 */
const Home: React.FC = () => {
  return (
    <div>
      <StyledNavbar className="main-nav" />
      <div className="content-wrapper">
        <MainForm />
      </div>
    </div>
  );
};

export default Home;
