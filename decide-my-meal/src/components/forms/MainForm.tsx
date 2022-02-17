import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import postFormData from "../functions/postFormData";
import getApiData from "../functions/getApiData";
import StyledFoodInput from "./FoodInput.style";
import StyledResult from "../layout/result/Result.style";

const MainForm = () => {
  const [counter, setCounter] = useState(0);
  const [foodInputArr, updateFoodInputArr] = useState<JSX.Element[]>([]);
  const [textInputs, updateInputs] = useState<string[]>([]);
  const foodChosenRef = useRef("");

  const handleOnRemove = (i: number) => {
    updateInputs(textInputs.filter((input, index) => index !== i));
    updateFoodInputArr(foodInputArr.filter((input, index) => index !== i));
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
          let errorh4 = document.getElementById("food-error") as HTMLElement;
          if (textInputs.length <= 1) {
            errorh4.style.visibility = "visible";
          } else {
            const random =
              textInputs[Math.floor(Math.random() * textInputs.length)];

            // posting data
            postFormData(data, random);
            console.log('the random food chosen',random)
            foodChosenRef.current = random;
            let comp = document.querySelector(".result-display") as HTMLElement;
            comp.style.visibility = "visible";
            errorh4.style.visibility = "hidden"; 
          
            setTimeout(()=>{

              getApiData().then(res => console.log(res));
            },2000);  
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
