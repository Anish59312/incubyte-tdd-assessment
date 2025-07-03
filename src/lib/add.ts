export default function add(numbers: string): number {
  if (!numbers || numbers.trim() == "") return 0;

  let numberArray: number[] = numbers.split(",").map((x) => {
    x = x.trim();
    if (x == "" || isNaN(parseInt(x, 10))) return 0;
    return parseInt(x, 10);
  });

  console.log("numberArray", numberArray)

  return numberArray.reduce((sum, num) => sum+num, 0)
}
