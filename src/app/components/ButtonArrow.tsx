import React from "react";

export default function ButtonArrow({
  width = 60,
  height = 60,
  backgroundColor = "#1D3444",
  strokeColor = "#5FB4A2",
  className,
}: {
  width?: number;
  height?: number;
  backgroundColor?: string;
  strokeColor?: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <rect opacity="0.1" width="48" height="48" fill={backgroundColor} />
      <path d="M16 26L24 30L32 26" stroke={strokeColor} />
      <path opacity="0.5" d="M16 22L24 26L32 22" stroke={strokeColor} />
      <path opacity="0.25" d="M16 18L24 22L32 18" stroke={strokeColor} />
    </svg>
  );
}
