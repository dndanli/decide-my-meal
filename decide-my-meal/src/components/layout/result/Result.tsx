import { AiOutlineCloseCircle } from "react-icons/ai";
import StyledList from "../list/List.style";

type ResultProp = {
  className: string;
  foodChosen: string;
  restaurants: any;
};

const Result = ({ className, foodChosen, restaurants }: ResultProp) => {
  const HandleOnClose = () => {
    let resultSection = document.querySelector(
      ".result-display"
    ) as HTMLElement;
    resultSection.style.visibility = "hidden";
  };
  return (
    <div className={className}>
      {<h2 className="choice">You'll be having ✨{foodChosen}!✨</h2>}
      <div className="close-btn" onClick={HandleOnClose}>
        <AiOutlineCloseCircle />
      </div>
      <div className="restaurant-list">
        {restaurants.map((el: any) => {
          return (
            <div key={el.id}>
              <StyledList
                className="res-list"
                title={el.poi.name}
                phoneNumber={el.poi.phone}
                address={el.address.freeformAddress}
                website={el.poi.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
