import StyledList from "../list/List.style";
import { AiOutlineCloseCircle } from "react-icons/ai";

type ResultProp = {
  className: string;
  foodChosen: string;
};

const Result = ({ className, foodChosen }: ResultProp) => {
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
        <StyledList
          className="res-list"
          title="res1"
          website="google.com"
          hasWebsite={true}
          phoneNumber="515-111-1111"
          address="123 main Street"
        />
      </div>
    </div>
  );
};

export default Result;
