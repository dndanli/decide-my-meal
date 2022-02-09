import { removeFoodInput } from "../../functions/FormCreation";

const FormFoodInput = () => {
  return (
    <div className="food-input-section">
      <input type="text" className="food-input" placeholder="Food" />
      <input type="button" value="-" id="less-food" onClick={removeFoodInput} />
    </div>
  );
};

export default FormFoodInput;
