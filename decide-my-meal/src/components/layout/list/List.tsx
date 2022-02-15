import React from "react";
type ListProps = {
  className: string;
  title: string;
  website: string;
  hasWebsite: boolean;
  phoneNumber: string;
  address: string;
};

const List = ({
  className,
  title,
  website,
  hasWebsite,
  phoneNumber,
  address,
}: ListProps) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <h4 className={hasWebsite == true ? "has-a-website" : "no-website"}>
        {website}
      </h4>
      <h4>{phoneNumber}</h4>
      <h4>{address}</h4>
    </div>
  );
};
export default List;
