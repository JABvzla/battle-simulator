import React from "react";
import { Select } from "./select";

interface TroopSelectorProps {
  name: string;
}

export const TroopSelector = ({ name }: TroopSelectorProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Select name={name} />
      <Select name={name} />
      <Select name={name} />
      <Select name={name} />
    </div>
  );
};
