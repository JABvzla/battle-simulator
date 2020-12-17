import * as React from "react";
import { Card } from "./card";
import { TroopSelector } from "./troop-selector";
import { TowerValues } from "./tower-values";

interface PlayerCardProps {
  name: string;
  isPlayer2?: boolean;
}

export const PlayerCard = ({ name, isPlayer2 }: PlayerCardProps) => {
  return (
    <Card background={isPlayer2 ? "player2" : "player1"}>
      <p>{name.toUpperCase()}</p>

      <span>warriors</span>
      <TroopSelector name={`${name}-troops`} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TowerValues name={`${name}-tower-1`} label="tower 1" />
        <TowerValues name={`${name}-tower-2`} label="tower 2" />
      </div>
    </Card>
  );
};
