import { useState } from "react";
import StyledFoodInput from "./FoodInput.style";

const MainForm = () => {
  const [foodInputArr, updateFoodInputArr] = useState<JSX.Element[]>([]);

  const handleOnAdd = () => {
    let foodIputEl = document.getElementById("food-input") as HTMLInputElement;
    updateFoodInputArr((oldArr) => [
      ...oldArr,
      <StyledFoodInput
        className="styled-food-input"
        foodName={foodIputEl.value}
      />,
    ]);
  };

  return (
    <div className="wrapper">
      <form className="form-content">
        <h1 id="form-text-h1">Welcome</h1>
        <h4 id="form-text-h4">please fill the form bellow</h4>
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <div className="food-input-wrapper">
          <input type="text" placeholder="Food" id="food-input" />
          <input
            type="button"
            id="add-button"
            value="+"
            onClick={handleOnAdd}
          />
        </div>
        <input type="submit" />
      </form>

      <div className="result-content">
        <ul className="options-entered">
          {foodInputArr.map((input, index) => {
            return <li key={index}>{input}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default MainForm;
