type ListProps = {
  className: string;
  title: string;
  phoneNumber: string;
  address: string;
};

const List = ({ className, title, phoneNumber, address }: ListProps) => {
  return (
    <div className={className}>
      <h2 className="title">{title}</h2>
      <h4 className="phone-number">{phoneNumber}</h4>
      <h4 className="address">{address}</h4>
    </div>
  );
};
export default List;
