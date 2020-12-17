import * as React from "react";
import { theme } from "../theme";
import { BattleAction } from "../types/battle-action";
import { Card } from "./card";
import { KeyValueField } from "./key-value-field";
import { ResultCard } from "./result-card";

interface BattleActionCardProps {
  data: BattleAction;
}

export const BattleActionCard = ({ data }: BattleActionCardProps) => {
  return (
    <Card
      style={{
        flexDirection: "row",
        margin: "auto",
        flexWrap: "wrap",
        marginTop: theme.size * 4
      }}
    >
      <Card
        background="muted"
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          padding: theme.size
        }}
      >
        <KeyValueField label="piedra" value={data.troops.piedra} />
        <KeyValueField label="papel" value={data.troops.papel} />
        <KeyValueField label="tijeras" value={data.troops.tijeras} />
      </Card>
      <ResultCard
        title="START"
        troops={data.player1.troops.map((t) => ({ type: t, hp: "-" }))}
        tower1={data.player1.tower1}
        tower2={data.player1.tower2}
      />
      <ResultCard title="RESULT" {...data.result.player1} />

      <ResultCard title="RESULT" {...data.result.player2} isPlayer2 />
      <ResultCard
        title="START"
        troops={data.player2.troops.map((t) => ({ type: t, hp: "-" }))}
        tower1={data.player2.tower1}
        tower2={data.player2.tower2}
        isPlayer2
      />
    </Card>
  );
};
