import React from "react";
import StyledNavbar from "../../components/layout/navbar/Navbar.style";
const Home: React.FC = () => {
  return (
    <div>
      <StyledNavbar className="main-nav" />
      <div className="content-wrapper">
        <div className="instructions">
          <ul>
            <li>Instruction 1</li>
            <li>Instruction 2</li>
            <li>Instruction 3</li>
            <li>Instruction 4</li>
            <li>Instruction 5</li>
          </ul>
        </div>
        <div className="form-section">form will go here</div>
      </div>
    </div>
  );
};

export default Home;
