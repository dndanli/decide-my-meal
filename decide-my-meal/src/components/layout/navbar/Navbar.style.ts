import styled from "styled-components";
import Navbar from "./Navbar";

const StyledNavbar = styled(Navbar)`
  font-size: 1.6rem;
  .nav-ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .nav-ul li {
    list-style-type: none;
    margin-right: 1.8rem;
  }
  /* main nav color */
  background-color: rgb(255, 254, 252);
`;

export default StyledNavbar;
