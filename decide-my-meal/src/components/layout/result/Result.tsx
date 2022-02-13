type ResultProp = {
  className: string;
  foodChosen: string;
};

const Result = ({ className, foodChosen }: ResultProp) => {
  return (
    <div className={className}>{<h3>You'll be having {foodChosen}!</h3>}</div>
  );
};

export default Result;
