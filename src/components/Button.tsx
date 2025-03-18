import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={` h-[60px] bg-purple-600 text-white text-xl font-semibold rounded-md hover:bg-purple-700 transition  ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
