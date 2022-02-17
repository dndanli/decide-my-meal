import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import getApiData from "../functions/getApiData";
import StyledResult from "../layout/result/Result.style";
import useMainForm from "../hooks/useMainForm";
import {
  isInputQuantityAccepted,
  handleStyling,
  changeErrorStyling,
  handleFoodChosen,
} from "../functions/helperFunctions";

const MainForm = () => {
  let { foodInputArr, textInputs, handleOnAdd, handleOnRemove } = useMainForm();
  const [apiData, setApiData] = useState([]);
  const foodChosenRef = useRef("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="wrapper">
      <form
        className="form-content"
        onSubmit={handleSubmit((data, e) => {
          e?.preventDefault();

          if (isInputQuantityAccepted(textInputs.length) === false) {
            changeErrorStyling(true);
          } else {
            foodChosenRef.current = handleFoodChosen(data, textInputs);
            handleStyling(false, true);

            //dispaying requested data with delay of 2 seconds
            setTimeout(() => {
              getApiData().then((res) => {
                console.log(res.results);
                setApiData(res.results);
              });
            }, 2000);
          }
        })}
      >
        <h1 id="form-text-h1">Welcome</h1>
        <h4 id="form-text-h4">please fill the form bellow</h4>
        <input
          {...register("city", { required: "city is required." })}
          type="text"
          placeholder="City"
        />
        <h4 className="error-message">{errors.city?.message}</h4>
        <input
          {...register("state", { required: "state is required." })}
          type="text"
          placeholder="State"
        />
        <h4 className="error-message">{errors.state?.message}</h4>
        <div className="food-input-wrapper">
          <input type="text" placeholder="Food" id="food-input" />
          <input
            type="button"
            id="add-button"
            value="+"
            onClick={handleOnAdd}
          />
        </div>
        <h4 className="error-message" id="food-error">
          you need to choose at least 2 foods.
        </h4>
        <input type="submit" />
      </form>

      <div className="result-content">
        <StyledResult
          className={"result-display"}
          foodChosen={foodChosenRef.current}
          restaurants={apiData}
        />
        <ul className="options-entered">
          <h4 id="remove-h4">click on food to remove it.</h4>
          {foodInputArr.map((input, index) => {
            return (
              <li onClick={() => handleOnRemove(index)} key={index}>
                {input}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default MainForm;
