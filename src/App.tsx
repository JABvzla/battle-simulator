import * as React from "react";
import { BattleActionCard } from "./components/battle-action-card";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { PlayerCard } from "./components/player-card";
import { TroopValuesCard } from "./components/troop-values-card";
import { battleInline } from "./services/battle-inline";
import { battleTroopsTowers } from "./services/battle-troops-tower";
import { getBattleFormData } from "./services/get-battle-form-data";
import "./styles.css";
import { theme } from "./theme";
import { BattleAction } from "./types/battle-action";
import { Troop, TroopType } from "./types/troop";

export default function App() {
  const [data, setData] = React.useState<BattleAction[]>([]);
  const handleForm = (event: React.FormEvent) => {
    event.preventDefault();
    const formResult = getBattleFormData(event.target as HTMLFormElement);

    const setInitialHp = (troop: TroopType): Troop => ({
      hp: formResult.troops[troop],
      type: troop
    });

    const [player1Troops, player2Troops] = battleInline(
      formResult.player1.troops.map(setInitialHp),
      formResult.player2.troops.map(setInitialHp)
    );

    const [player1Fallback, player2Tower1, player2Tower2] = battleTroopsTowers(
      player1Troops,
      formResult.player2.tower1,
      formResult.player2.tower2
    );

    const [player2Fallback, player1Tower1, player1Tower2] = battleTroopsTowers(
      player2Troops,
      formResult.player2.tower1,
      formResult.player2.tower2
    );

    const newData: BattleAction = {
      ...formResult,
      result: {
        player1: {
          fallback: player1Fallback,
          troops: player1Troops,
          tower1: player1Tower1,
          tower2: player1Tower2
        },
        player2: {
          fallback: player2Fallback,
          troops: player2Troops,
          tower1: player2Tower1,
          tower2: player2Tower2
        }
      }
    };

    setData([newData, ...data]);
  };

  return (
    <div className="App">
      <h1>Battle Simulator</h1>
      <form id="form1" onSubmit={handleForm}>
        <Card
          style={{
            maxWidth: theme.size * 76,
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <TroopValuesCard />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <PlayerCard name="player-1" />
            <PlayerCard name="player-2" isPlayer2 />
          </div>

          <Button type="submit" value="Fight!" />
        </Card>
      </form>
      {data.map((battle) => (
        <BattleActionCard data={battle} />
      ))}
    </div>
  );
}
