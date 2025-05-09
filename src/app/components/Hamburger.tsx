import React from "react";

function Hamburger({
  width = 24,
  height = 13,
  color = "#33323D",
  className,
  onClick,
}: {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}) {
  // Default values for width, height, and color
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 24 13"
        fill="none"
        onClick={onClick}
      >
        <rect width="24" height="1" fill={color} />
        <rect y="6" width="24" height="1" fill={color} />
        <rect y="12" width="24" height="1" fill={color} />
      </svg>
    </div>
  );
}

export default Hamburger;
