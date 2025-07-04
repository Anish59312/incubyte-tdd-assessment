export default function add(numbers: string): number {
  if (!numbers || numbers.trim() == "") return 0;

  let defaultDelimiter = ",";
  if (numbers.substring(0, 2) === "//") {
    if(numbers.search('\n') - numbers.search('//') > 2){
        defaultDelimiter = numbers.substring(3+1, numbers.search('\n')-1)
        numbers = numbers.substring(numbers.search('\n'))
    }
    else{
        defaultDelimiter = numbers.substring(2, 3);
        numbers = numbers.substring(4);    
    }
  }

  let numberArray: number[] = numbers
    .split(new RegExp(`[${defaultDelimiter}\n]+`))
    .map((x) => x.trim())
    .filter((x) => x !== "")
    .map((x) => parseInt(x, 10))
    .filter((x) => !isNaN(x))
    .filter((x) => x <= 1000)

  let negativeNumbers: number[] = numberArray.filter((x) => x < 0);
  if (negativeNumbers.length > 0)
    throw new Error(`negatives not allowed ${negativeNumbers.join(",")}`);

  return numberArray.reduce((sum, num) => sum + num, 0);
}