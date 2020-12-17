import * as React from "react";
import { theme } from "../theme";

interface CardProps {
  style?: React.CSSProperties;
  children?: React.ReactChildren | React.ReactFragment;
  background?: "primary" | "player1" | "player2" | "muted";
}

export const Card = (props: CardProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      background: props.background ? theme[props.background] : theme.primary,
      padding: theme.size * 3,
      margin: theme.size,
      borderRadius: theme.size,
      ...props?.style
    }}
    children={props.children}
  />
);
