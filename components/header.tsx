import React from "react";

interface IHeader {}

const Header: React.FC<IHeader> = ({}) => {
  return (
    <header className="bg-surface h-[60px] w-full border-b-2 border-border">
      header
    </header>
  );
};

export default Header;
