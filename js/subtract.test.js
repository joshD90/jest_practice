const subtract = require("./subtract");

test("Make sure subtracts one number from the other correctly", () => {
  expect(subtract(3, 2)).toBe(1);
});
