const kebabConvert = require("../src/index");

test("Converts Hello World to hello-world", () => {
  expect(kebabConvert("Hello World")).toBe("hello-world");
});
