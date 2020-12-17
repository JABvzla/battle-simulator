import React from "react";
import { theme } from "../theme";

interface ButtonProps {
  type: string;
  value: string;
}

export const Button = ({ type, value }: ButtonProps) => (
  <input
    style={{
      marginTop: theme.size * 2,
      padding: `${theme.size * 2}px ${theme.size * 5}px`,
      borderRadius: 4,
      border: "none",
      color: "#fff",
      background: "#33a"
    }}
    type={type}
    value={value}
  />
);
