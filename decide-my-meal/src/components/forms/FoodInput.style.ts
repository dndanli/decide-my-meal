import styled from "styled-components";
import FoodInput from "./FoodInput";

const StyledFoodInput = styled(FoodInput)`
  text-align: center;
  align-items: center;
  border-radius: 7px;
  padding: 1rem;
  margin-bottom: 1rem;
  color: rgb(255, 254, 252);
  width: 200px;
  border: 1px solid #d4d2d2;
  .remove-mark {
    font-size: 1.2rem;
    color: #ffff;
    display: none;
  }
  &:hover {
    background-color: #f7c9d4;
    transition: ease-in-out 0.8s;
    color: #ffff;
    cursor: pointer;
    .food-name {
      display: none;
    }
    .remove-mark {
      display: block;
    }
  }
`;

export default StyledFoodInput;
