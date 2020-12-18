import { getTodos } from "./get-todo";

describe("get-todo", () => {
  test("get-todo api", async () => {
    // Arrange

    const expectResult = [
      {
        checked: false,
        id: "864ab9f3-b291-4e4d-87aa-63e843832fc8",
        title: "Hello, world!"
      },
      {
        checked: false,
        id: "eb624566-579c-4ea4-b979-608faa99e44c",
        title: "Hello, world!"
      }
    ];

    // Action
    const result = await getTodos();

    // Asserts
    expect(result).toStrictEqual(expectResult);
  });
});
