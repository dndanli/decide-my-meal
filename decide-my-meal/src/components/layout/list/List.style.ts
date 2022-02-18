import styled from "styled-components";
import List from "./List";

const StyledList = styled(List)`
  margin-top: 1rem;
  background-color: rgba(255, 254, 252, 0.2);
  backdrop-filter: blur(7px);
  color: rgb(255, 254, 252);
  width: 450px;
  height: 120px;
  padding: 0.5rem;
  margin: 0 1rem 1rem 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title,
  .phone-number,
  .address {
    margin-bottom: 0.5rem;
  }
`;

export default StyledList;
