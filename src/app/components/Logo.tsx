import React from "react";

function Logo({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) {
  // Default values for width, height, and color
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 61 32"
      fill="none"
      style={{ fill: color }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z"
        fill={color}
      />
    </svg>
  );
}

export default Logo;
