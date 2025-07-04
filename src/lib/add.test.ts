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

    test("include \n as delimiter too", () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test("changing delimiter to ;", () => {
      expect(add("//;\n1;2")).toBe(3);
    });

    test("negative numbers should throw error", () => {
      expect(() => add("-1,3,-2")).toThrow("negatives not allowed -1,-2");
    });

    test("number greater than 1000 should be ignored", () => {
        expect(add("1002,2")).toBe(2);
    }) 

    test("delimiter should be of different any length when under []", () => {
      expect(add("//[***]\n1***2***3")).toBe(6);
      expect(add("//[***]\n1***2***3"));
    });  



})
