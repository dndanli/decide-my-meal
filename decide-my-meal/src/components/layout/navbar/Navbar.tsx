import React from "react";

type NavProps = {
  className: string;
};

const Navbar: React.FC<NavProps> = ({ className }: NavProps) => {
  return (
    <div className={className}>
      <ul className="nav-ul">
        <li>Home</li>
        <li>About</li>
        <li>Github</li>
      </ul>
    </div>
  );
};

export default Navbar;
