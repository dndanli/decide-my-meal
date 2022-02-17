type ListProps = {
  className: string;
  title: string;
  phoneNumber: string;
  address: string;
};

const List = ({ className, title, phoneNumber, address }: ListProps) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <h4>{phoneNumber}</h4>
      <h4>{address}</h4>
    </div>
  );
};
export default List;
