import add from "./add";

describe("string calculator", () => {
    test("empty string should return ", () => {
      expect(add("")).toBe(0);
    });      
})
