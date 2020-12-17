import { Troop } from "../types/troop";
import { battleTroop } from "./battle-troop";

export const battleInline = (
  troops1: Troop[],
  troops2: Troop[]
): [Troop[], Troop[]] => {
  const t1Result = [...troops1];
  const t2Result = [...troops2];

  let i = 0;
  while (!!t1Result.length && !!t2Result.length && i < 100) {
    i++;
    const [t1, t2] = battleTroop(t1Result[0], t2Result[0]);
    t1Result[0] = t1;
    t2Result[0] = t2;

    if (+t1Result[0].hp <= 0) t1Result.shift();
    if (+t2Result[0].hp <= 0) t2Result.shift();
  }

  return [t1Result, t2Result];
};
