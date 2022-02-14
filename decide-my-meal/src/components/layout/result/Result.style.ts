import Result from "./Result";
import styled from "styled-components";

const StyledResult = styled(Result)`
  visibility: hidden;
  margin-top: 5rem;
  position: absolute;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: rgb(255, 254, 252);
  background-color: rgba(255, 254, 252, 0.2);
  background: linear-gradient(rgba(255, 255, 255, 0.5));
  backdrop-filter: blur(7px);
  min-height: 80vh;
  width: 40vw;
  .choice {
    margin-top: 3rem;
  }
  .close-btn {
    font-size: 2rem;
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    cursor: pointer;
  }
  .get-restaurants-nearby {
    font-family: Montserrat, sans-serif;
    text-align: center;
    cursor: pointer;
    margin-top: 1rem;
    height: 2rem;
    width: 310px;
    padding: 13px;
    font-size: 1.4rem;
    border-radius: 3px;
    background-color: #d5adc8;
    background-image: linear-gradient(315deg, #d5adc8 0%, #ff8489 74%);
    color: rgba(255, 254, 252);
  }
`;

export default StyledResult;
