type FoodInputProps = {
  foodName: string;
  className: string;
};

const FoodInput = ({ foodName, className }: FoodInputProps) => {
  return (
    <div className={className}>
      <h3>{foodName}</h3>
    </div>
  );
};

export default FoodInput;
