import { Troop } from "../types/troop";
import { battleTower } from "./battle-tower";

describe("battle-tower", () => {
  test("When troop is same the first tower should fallback", () => {
    // Arrange
    const troop: Troop = { type: "papel", hp: "3" };
    const tower1: Troop = { type: "papel", hp: "10" };
    const tower2: Troop = { type: "tijeras", hp: "10" };
    const expectResult: [Troop, Troop, Troop] = [
      { type: "papel", hp: "3" },
      { type: "papel", hp: "10" },
      { type: "tijeras", hp: "10" }
    ];

    // Action
    const result = battleTower(troop, tower1, tower2);

    // Asserts
    expect(result).toStrictEqual(expectResult);
  });

  test("When troop is strongest than towers should fallback", () => {
    // Arrange
    const troop: Troop = { type: "papel", hp: "3" };
    const tower1: Troop = { type: "piedra", hp: "10" };
    const tower2: Troop = { type: "piedra", hp: "10" };
    const expectResult: [Troop, Troop, Troop] = [
      { type: "papel", hp: "1" },
      { type: "piedra", hp: "7" },
      { type: "piedra", hp: "10" }
    ];

    // Action
    const result = battleTower(troop, tower1, tower2);

    // Asserts
    expect(result).toStrictEqual(expectResult);
  });

  test("When the troop is strongest than first tower should fallback", () => {
    // Arrange
    const troop: Troop = { type: "papel", hp: "3" };
    const tower1: Troop = { type: "piedra", hp: "10" };
    const tower2: Troop = { type: "papel", hp: "10" };
    const expectResult: [Troop, Troop, Troop] = [
      { type: "papel", hp: "2" },
      { type: "piedra", hp: "7" },
      { type: "papel", hp: "10" }
    ];

    // Action
    const result = battleTower(troop, tower1, tower2);

    // Asserts
    expect(result).toStrictEqual(expectResult);
  });

  test("When the troop is weakest than  first tower should die", () => {
    // Arrange
    const troop: Troop = { type: "papel", hp: "3" };
    const tower1: Troop = { type: "tijeras", hp: "10" };
    const tower2: Troop = { type: "papel", hp: "10" };
    const expectResult: [Troop, Troop, Troop] = [
      { type: "papel", hp: "0" },
      { type: "tijeras", hp: "9" },
      { type: "papel", hp: "10" }
    ];

    // Action
    const result = battleTower(troop, tower1, tower2);

    // Asserts
    expect(result).toStrictEqual(expectResult);
  });

  test("When the troop is weakest thant second tower should die", () => {
    // Arrange
    const troop: Troop = { type: "papel", hp: "3" };
    const tower1: Troop = { type: "piedra", hp: "10" };
    const tower2: Troop = { type: "tijeras", hp: "10" };
    const expectResult: [Troop, Troop, Troop] = [
      { type: "papel", hp: "0" },
      { type: "piedra", hp: "7" },
      { type: "tijeras", hp: "10" }
    ];

    // Action
    const result = battleTower(troop, tower1, tower2);

    // Asserts
    expect(result).toStrictEqual(expectResult);
  });

  test("When tower1 is dead the troop should attack the tower2", () => {
    // Arrange
    const troop: Troop = { type: "piedra", hp: "3" };
    const tower1: Troop = { type: "tijeras", hp: "-2" };
    const tower2: Troop = { type: "tijeras", hp: "10" };
    const expectResult: [Troop, Troop, Troop] = [
      { type: "piedra", hp: "2" },
      { type: "tijeras", hp: "-2" },
      { type: "tijeras", hp: "7" }
    ];

    // Action
    const result = battleTower(troop, tower1, tower2);

    // Asserts
    expect(result).toStrictEqual(expectResult);
  });
});
