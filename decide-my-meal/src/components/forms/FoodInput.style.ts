import styled from "styled-components";
import FoodInput from "./FoodInput";

const StyledFoodInput = styled(FoodInput)`
  text-align: center;
  border-radius: 7px;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #252422;
  width: 200px;
  border: 1px solid #252422;

  &:hover {
    background-color: pink;
    transition: ease-in-out 0.5s;
    color: #ffff;
  }
`;

export default StyledFoodInput;
