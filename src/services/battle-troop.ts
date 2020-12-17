import { Troop } from "../types/troop";

export const battleTroop = (t1: Troop, t2: Troop): [Troop, Troop] => {
  if (t1.type === t2.type) {
    return [
      { type: t1.type, hp: "0" },
      { type: t2.type, hp: "0" }
    ];
  }

  return [
    // t1 Win Cases
    t1.type === "piedra" && t2.type === "tijeras",
    t1.type === "papel" && t2.type === "piedra",
    t1.type === "tijeras" && t2.type === "papel"
  ].some((e) => e)
    ? [
        { type: t1.type, hp: (+t1.hp - 1).toString() },
        { type: t2.type, hp: "0" }
      ]
    : [
        { type: t1.type, hp: "0" },
        { type: t2.type, hp: (+t2.hp - 1).toString() }
      ];
};
