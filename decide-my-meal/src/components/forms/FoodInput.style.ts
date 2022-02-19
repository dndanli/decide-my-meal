import styled from "styled-components";
import FoodInput from "./FoodInput";

const StyledFoodInput = styled(FoodInput)`
  text-align: center;
  align-items: center;
  border-radius: 7px;
  padding: 1.7rem;
  margin-bottom: 2rem;
  color: #1a206d;
  width: 230px;
  height: 30px;
  font-size: 1.3rem;
  border: 1px solid #1a206d;
  .remove-mark {
    font-size: 1.2rem;
    color: #ffff;
    display: none;
  }
  &:hover {
    background-color: #6e72fc;
    transition: ease-in-out 0.8s;
    border: 1px solid #f4f4f8;
    color: #ffff;
    cursor: pointer;
    .food-name {
      display: none;
    }
    .remove-mark {
      display: block;
    }
  }

  @media screen and (max-width: 400px) {
    width: 210px;
    height: 27px;
  }
`;

export default StyledFoodInput;
