import * as React from "react";
import { Card } from "./card";
import { KeyValueField } from "./key-value-field";
import { theme } from "../theme";

export const TroopValuesCard = () => {
  return (
    <Card
      background="muted"
      style={{
        flexDirection: "row",
        justifyContent: "center",
        padding: theme.size
      }}
    >
      <KeyValueField defaultValue="3" name="troop-piedra" label="piedra" />
      <KeyValueField defaultValue="3" name="troop-papel" label="papel" />
      <KeyValueField defaultValue="3" name="troop-tijeras" label="tijeras" />
    </Card>
  );
};
