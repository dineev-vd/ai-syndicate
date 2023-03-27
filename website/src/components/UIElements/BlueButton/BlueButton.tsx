import React from "react";
import "./BlueButton.scss";

interface BlueButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const BlueButton: React.FC<BlueButtonProps> = ({ name, ...props }) => {
  return (
    <button className="blue-button" {...props}>
      {name}
    </button>
  );
};

export default BlueButton;
