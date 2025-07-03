import add from "./add";

describe("string calculator", () => {
    test("empty string should return ", () => {
      expect(add("")).toBe(0);
    });   
    
    test("single number 1 should output 1", () =>{
        expect(add("1")).toBe(1)
    })
})
