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
  color: #f66d9f;
  background-color: #d3dbeb;
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
    overflow: auto;
    height: 70vh;
    margin-top: 2rem;
  }
`;

export default StyledResult;
