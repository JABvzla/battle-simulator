import * as React from "react";
import { Card } from "./card";
import { theme } from "../theme";

interface InlineListProps {}
export const InlineList = (props: InlineListProps) => {
  //const list = [{ key: "asd" }];

  return (
    <Card
      style={{
        alignItems: "center"
      }}
    >
      <div style={{ display: "flex" }}>
        <span style={{ marginRight: theme.size * 2 }}>List</span>
        <input />
      </div>
    </Card>
  );
};
