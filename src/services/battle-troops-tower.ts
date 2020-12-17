import { Troop } from "../types/troop";
import { battleTower } from "../services/battle-tower";

export const battleTroopsTowers = (
  troop: Troop[],
  tower1: Troop,
  tower2: Troop
): [Troop[], Troop, Troop] => {
  const fallback: Troop[] = [];
  const troopBattle: Troop[] = [...troop];
  let tower1Result = tower1;
  let tower2Result = tower2;
  let i = 0;
  while (!!troopBattle.length && i < 100) {
    i++;

    const [troopR, tower1R, tower2R] = battleTower(
      troopBattle[0],
      tower1Result,
      tower2Result
    );
    if (+troopR.hp > 0) {
      fallback.push(troopR);
    }
    tower1Result = tower1R;
    tower2Result = tower2R;
    troopBattle.shift();
  }

  return [fallback, tower1Result, tower2Result];
};
