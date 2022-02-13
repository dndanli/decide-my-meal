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
    </div>
  );
};

export default Result;
