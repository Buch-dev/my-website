import React, { ReactNode } from "react";

const RegularButton = ({
  onClick,
  children,
  className,
  disabled,
  type = "button",
}: {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}) => {
  return (
    <button
      className={`${className} cursor-pointer`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default RegularButton;
