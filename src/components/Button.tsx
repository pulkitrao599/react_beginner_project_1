import React from "react";

interface Props {
  children: string;
  onCLick: () => void;
  color?: string;
}

const Button = ({ children, onCLick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onCLick}>
      {children}
    </button>
  );
};

export default Button;
