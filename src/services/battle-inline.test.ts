import { Troop } from "../types/troop";
import { battleInline } from "./battle-inline";

describe("battle-inline", () => {
  test("battle ineline example", () => {
    // Arrange
    const troops1: Troop[] = [
      { type: "piedra", hp: "3" },
      { type: "papel", hp: "3" },
      { type: "papel", hp: "3" }
    ];
    const troops2: Troop[] = [
      { type: "papel", hp: "3" },
      { type: "papel", hp: "3" },
      { type: "papel", hp: "3" },
      { type: "tijeras", hp: "3" }
    ];

    const expectResult: [Troop[], Troop[]] = [
      [],
      [
        { type: "papel", hp: "3" },
        { type: "tijeras", hp: "3" }
      ]
    ];

    // Action
    const result = battleInline(troops1, troops2);

    // Asserts
    expect(result).toStrictEqual(expectResult);
  });
});
