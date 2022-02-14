import { AiOutlineCloseCircle } from "react-icons/ai";
type ResultProp = {
  className: string;
  foodChosen: string;
};

const Result = ({ className, foodChosen }: ResultProp) => {
  const handleOnClose = () => {
    let resultSection = document.querySelector(
      ".result-display"
    ) as HTMLElement;
    resultSection.style.visibility = "hidden";
  };
  return (
    <div className={className}>
      {<h2 className="choice">You'll be having ✨{foodChosen}!✨</h2>}
      <div className="close-btn" onClick={handleOnClose}>
        <AiOutlineCloseCircle />
      </div>
      <div
        className="get-restaurants-nearby"
        onClick={() => {
          console.log("fetching for restaurants nearby");
        }}
      >
        <h3>Find restaurants.</h3>
      </div>
    </div>
  );
};

export default Result;
