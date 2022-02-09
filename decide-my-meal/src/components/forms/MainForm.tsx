import FormFoodInput from "./FormFoodInput";
const MainForm = () => {
  return (
    <div className="form-section">
      <form className="main-form">
        <input type="text" className="user-input" placeholder="City" />
        <input type="text" className="user-input" placeholder="State" />
        <FormFoodInput></FormFoodInput>
        <input type="submit" />
      </form>
      ;
    </div>
  );
};
export default MainForm;
