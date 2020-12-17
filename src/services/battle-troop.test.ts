import { Troop, TroopType } from "../types/troop";
import { battleTroop } from "./battle-troop";

const testMap: [TroopType, TroopType, [Troop, Troop]][] = [
  // papel
  [
    "papel",
    "tijeras",
    [
      { hp: "0", type: "papel" },
      { hp: "2", type: "tijeras" }
    ]
  ],
  [
    "papel",
    "piedra",
    [
      { hp: "2", type: "papel" },
      { hp: "0", type: "piedra" }
    ]
  ],
  [
    "papel",
    "papel",
    [
      { hp: "0", type: "papel" },
      { hp: "0", type: "papel" }
    ]
  ],

  // tijeras
  [
    "tijeras",
    "tijeras",
    [
      { hp: "0", type: "tijeras" },
      { hp: "0", type: "tijeras" }
    ]
  ],
  [
    "tijeras",
    "piedra",
    [
      { hp: "0", type: "tijeras" },
      { hp: "2", type: "piedra" }
    ]
  ],
  [
    "tijeras",
    "papel",
    [
      { hp: "2", type: "tijeras" },
      { hp: "0", type: "papel" }
    ]
  ],

  // piedra
  [
    "piedra",
    "tijeras",
    [
      { hp: "2", type: "piedra" },
      { hp: "0", type: "tijeras" }
    ]
  ],
  [
    "piedra",
    "piedra",
    [
      { hp: "0", type: "piedra" },
      { hp: "0", type: "piedra" }
    ]
  ],
  [
    "piedra",
    "papel",
    [
      { hp: "0", type: "piedra" },
      { hp: "2", type: "papel" }
    ]
  ]
];

describe("battle-troop", () => {
  test("Battle TestMap", () => {
    // Arrange
    const battles: [Troop, Troop][] = testMap.map((arr) => [
      { type: arr[0], hp: "3" },
      { type: arr[1], hp: "3" }
    ]);

    const expectResult = testMap.map((arr) => arr[2]);
    // Action
    const result = battles.map((b) => battleTroop(...b));

    // Asserts
    expect(result).toStrictEqual(expectResult);
  });

  test("When troop wins should decrease hp in one", () => {
    // Arrange
    const troop1: Troop = { hp: "3", type: "papel" };
    const troop2: Troop = { hp: "3", type: "piedra" };
    const expectResult = [
      { hp: "2", type: "papel" },
      { hp: "0", type: "piedra" }
    ];

    // Action
    const result = battleTroop(troop1, troop2);

    // Asserts
    expect(result).toStrictEqual(expectResult);
  });

  test("When troops are same types should be lose both", () => {
    // Arrange
    const troop1: Troop = { hp: "3", type: "tijeras" };
    const troop2: Troop = { hp: "1", type: "tijeras" };
    const expectResult = [
      { hp: "0", type: "tijeras" },
      { hp: "0", type: "tijeras" }
    ];

    // Action
    const result = battleTroop(troop1, troop2);

    // Asserts
    expect(result).toStrictEqual(expectResult);
  });
});
