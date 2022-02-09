import { useState } from "react";
import FormFoodInput from "./FormFoodInput";

const MainForm = () => {
  const [inputArray, updateArrInput] = useState([<FormFoodInput />]);

  const addFoodInput = () => {
    updateArrInput((oldArr) => [...oldArr, <FormFoodInput />]);
  };
  return (
    <div className="form-section">
      <form className="main-form">
        <input type="text" className="user-input" placeholder="City" />
        <input type="text" className="user-input" placeholder="State" />
        <div className="food-input-wrapper">
          {inputArray.map((input, i) => {
            return <div key={i}>{input}</div>;
          })}
        </div>
        <input type="button" value="+" id="more-food" onClick={addFoodInput} />
        <input type="submit" />
      </form>
      ;
    </div>
  );
};
export default MainForm;
