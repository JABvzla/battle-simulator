import React from "react";
import { theme } from "../theme";

interface SelectProps {
  name: string;
  value?: string;
}

export const Select = ({ name, value }: SelectProps) => {
  return (
    <select name={name} style={{ marginBottom: theme.size }} value={value}>
      <option value="">-</option>
      <option value="piedra">Piedra</option>
      <option value="papel">Papel</option>
      <option value="tijeras">Tijeras</option>
    </select>
  );
};
