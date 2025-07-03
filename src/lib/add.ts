export default function add(numbers: string): number {
  if (!numbers || numbers.trim() == "") return 0;

  let numberArray: number[] = numbers
  .split(/[,\n]+/)
  .map(x => x.trim())
  .filter(x => x !== "")
  .map(x => parseInt(x, 10))
  .filter(x => !isNaN(x))

  return numberArray.reduce((sum, num) => sum+num, 0)
}
