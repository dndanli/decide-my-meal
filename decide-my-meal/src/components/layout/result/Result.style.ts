import Result from "./Result";
import styled from "styled-components";

const StyledResult = styled(Result)`
  visibility: hidden;
  margin-top: 3rem;
  position: absolute;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: rgb(255, 254, 252);
  background-color: #252422;
  background: linear-gradient(rgba(255, 255, 255, 0.5));
  backdrop-filter: blur(7px);
  min-height: 90vh;
  width: 45vw;
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
  .restaurant-list {
    /* background-color: aliceblue; */
    overflow: auto;
    height: 70vh;
    margin-top: 2rem;
  }
`;

export default StyledResult;
