import { Troop } from "../types/troop";

const troopVsTower = (t: Troop, tw: Troop) => {
  if (+tw.hp <= 0) return [t, tw];

  return [
    t.type === "piedra" && tw.type === "tijeras",
    t.type === "papel" && tw.type === "piedra",
    t.type === "tijeras" && tw.type === "papel"
  ].some((e) => e)
    ? [
        { type: t.type, hp: (+t.hp - 1).toString() },
        { type: tw.type, hp: (+tw.hp - +t.hp).toString() }
      ]
    : [
        { type: t.type, hp: "0" },
        { type: tw.type, hp: (+tw.hp - 1).toString() }
      ];
};

export const battleTower = (
  troop: Troop,
  tower1: Troop,
  tower2: Troop
): [Troop, Troop, Troop] => {
  if (troop.type === tower1.type) {
    return [troop, tower1, tower2];
  }

  const [troopVsTower1, tower1Result] = troopVsTower(troop, tower1);

  if (troop.type === tower2.type) {
    return [troopVsTower1, tower1Result, tower2];
  }

  const [troopVsTower2, tower2Result] = troopVsTower(troopVsTower1, tower2);
  return [troopVsTower2, tower1Result, +tower1.hp <= 0 ? tower2Result : tower2];
};
