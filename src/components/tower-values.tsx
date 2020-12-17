import * as React from "react";
import { Select } from "./select";
import { theme } from "../theme";

interface TowerValuesProps {
  name: string;
  label: string;
}
export const TowerValues = ({ name, label }: TowerValuesProps) => (
  <div
    style={{
      width: theme.size * 15,
      display: "flex",
      flexDirection: "column"
    }}
  >
    {label}
    <Select name={`${name}-type`} />
    <input
      name={`${name}-hp`}
      type="text"
      style={{ textAlign: "center" }}
      maxLength={3}
    />
  </div>
);
