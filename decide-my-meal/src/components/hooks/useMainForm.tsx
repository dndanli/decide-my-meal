import { useState } from "react";
import StyledFoodInput from "../forms/FoodInput.style";

const useMainForm = () => {
  const [counter, setCounter] = useState(0);
  const [foodInputArr, updateFoodInputArr] = useState<JSX.Element[]>([]);
  const [textInputs, updateInputs] = useState<string[]>([]);

  const handleOnRemove = (i: number) => {
    updateInputs(textInputs.filter((_, index) => index !== i));
    updateFoodInputArr(foodInputArr.filter((_, index) => index !== i));
  };
  const handleOnAdd = () => {
    let foodIputEl = document.getElementById("food-input") as HTMLInputElement;
    let valueToSearch = foodIputEl.value.toLowerCase();
    if (!textInputs.includes(valueToSearch)) {
      setCounter(counter + 1);

      updateFoodInputArr((oldArr) => [
        ...oldArr,
        <StyledFoodInput
          className="styled-food-input"
          foodName={foodIputEl.value.toLowerCase()}
        />,
      ]);
      updateInputs((oldTextArr) => [...oldTextArr, valueToSearch]);
    } else {
      alert(`${valueToSearch} has already been added`);
    }
  };
  return { foodInputArr, textInputs, handleOnAdd, handleOnRemove };
};

export default useMainForm;
