import add from "./add";

describe("string calculator", () => {
    test("empty string should return ", () => {
      expect(add("")).toBe(0);
    });   
    
    test("single number 1 should output 1", () =>{
        expect(add("1")).toBe(1)
    })

    test("output of two numbers 1,2 = 3", () => {
      expect(add("1,2")).toBe(3);
    });

    test("output of any numbers 1,2,3,4,5,6 = 21", () => {
      expect(add("1,2,3,4,5,6")).toBe(21);
    });
})
