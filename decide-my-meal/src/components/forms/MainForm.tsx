import FormFoodInput from "./FormFoodInput";
import { addFoodInput } from "../../functions/FormCreation";
const MainForm = () => {
  return (
    <div className="form-section">
      <form className="main-form">
        <input type="text" className="user-input" placeholder="City" />
        <input type="text" className="user-input" placeholder="State" />
        <div className="food-input-wrapper">
          <FormFoodInput></FormFoodInput>
        </div>
        <input type="button" value="+" id="more-food" onClick={addFoodInput} />
        <input type="submit" />
      </form>
      ;
    </div>
  );
};
export default MainForm;
