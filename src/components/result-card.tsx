import * as React from "react";
import { theme } from "../theme";
import { BattleResult } from "../types/battle-action";
import { Card } from "./card";
import { KeyValueField } from "./key-value-field";

interface ResultCardProps extends BattleResult {
  title: string;
  isPlayer2?: boolean;
}

export const ResultCard = ({
  troops,
  tower1,
  tower2,
  title,
  fallback,
  isPlayer2
}: ResultCardProps) => (
  <Card
    background={!!isPlayer2 ? "player2" : "player1"}
    style={{
      display: "flex",
      padding: 0,
      flexGrow: 1,
      minWidth: theme.size * 30
    }}
  >
    <span
      style={{
        paddingTop: theme.size * 4,
        paddingBottom: theme.size * 2,
        marginBottom: theme.size * 4,
        borderBottom: "1px #eee solid"
      }}
    >
      {title}
    </span>
    {!!troops.length && (
      <div style={{ marginBottom: theme.size }}>
        Inline
        {troops.map((troop) => (
          <KeyValueField label={troop.type} value={troop.hp} />
        ))}
      </div>
    )}
    {!!fallback?.length && (
      <div style={{ marginBottom: theme.size }}>
        Fallback
        {fallback?.map((troop) => (
          <KeyValueField label={troop.type} value={troop.hp} />
        ))}
      </div>
    )}
    <div style={{ marginBottom: theme.size * 4 }}>
      {(!!tower1.type || !!tower2.type) && "Towers"}
      {!!tower1.type && !!tower1.hp && (
        <KeyValueField label={tower1.type} value={tower1.hp} />
      )}
      {!!tower2.type && !!tower2.hp && (
        <KeyValueField label={tower2.type} value={tower2.hp} />
      )}
    </div>
  </Card>
);
