import styled from "styled-components";
import List from "./List";

const StyledList = styled(List)`
  margin-top: 1rem;
  background: #f9fafc;
  color: #3d3d3d;
  width: 520px;
  height: 145px;
  padding: 0.5rem;
  margin: 0 1rem 1rem 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-size: 1.7rem;
  }
  .title,
  .phone-number,
  .address,
  .website {
    margin-bottom: 0.5rem;
  }

  .phone-number,
  .address,
  .website {
    font-size: 1.2rem;
  }
  .website-link {
    color: #2f2f2f;
  }

  &:hover {
    transition: all ease-in-out 1s;
    background-color: rgba(255, 254, 252, 0.7);
  }

  @media screen and (max-width: 1000px) {
    width: 400px;
    padding: 1rem;
    .phone-number,
    .address,
    .website {
      font-size: 15px;
    }
    .title {
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 775px) {
    width: 330px;
  }

  @media screen and (max-width: 700px) {
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 250px;
    height: 130px;
    overflow-x: scroll;
    .title {
      font-size: 1rem;
    }
  }
`;

export default StyledList;
