import * as React from "react";
import { theme } from "../theme";

interface KeyValueFieldProps {
  label: string;
  name?: string;
  value?: string;
  defaultValue?: string;
}

export const KeyValueField = ({
  label,
  name,
  value,
  defaultValue
}: KeyValueFieldProps) => (
  <div
    style={{
      display: "flex",
      marginRight: theme.size * 2,
      marginLeft: theme.size * 2,
      border: "1px #fff solid",
      borderRadius: theme.size,
      padding: theme.size,
      whiteSpace: "nowrap",
      margin: theme.size,
      justifyContent: "space-between"
    }}
  >
    {label}
    <input
      type="field"
      name={name}
      defaultValue={defaultValue}
      readOnly={!!value}
      value={value}
      style={{
        width: theme.size * 4,
        textAlign: "center",
        borderRadius: theme.size,
        border: "none",
        marginLeft: theme.size * 2
      }}
      maxLength={3}
    />
  </div>
);
