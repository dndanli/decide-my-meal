type FoodInputProps = {
  foodName: string;
  className: string;
};

const FoodInput = ({ foodName, className }: FoodInputProps) => {
  return (
    <div className={className}>
      <h3>
        <span className="food-name"> {foodName} </span>
        <span className="remove-mark">X</span>
      </h3>
    </div>
  );
};

export default FoodInput;
