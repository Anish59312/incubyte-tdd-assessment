export default function add(numbers: string): number {
  if (!numbers || numbers.trim() == "") return 0;

  let { delimiter, numberString } = findDelimiterAndNumbers(numbers);

  //convert string to number array
  let numberArray: number[] = numberString
    .split(new RegExp(`[${delimiter}\n]+`))
    .map((x) => x.trim())
    .filter((x) => x !== "")
    .map((x) => parseInt(x, 10))
    .filter((x) => !isNaN(x))
    .filter((x) => x <= 1000);

  //remove negative numbers
  let negativeNumbers: number[] = numberArray.filter((x) => x < 0);
  if (negativeNumbers.length > 0)
    throw new Error(`negatives not allowed ${negativeNumbers.join(",")}`);

  return numberArray.reduce((sum, num) => sum + num, 0);
}

// find delimiter of any types 
// output delimiter and numberString
function findDelimiterAndNumbers(input: string): {
  delimiter: string;
  numberString: string;
} {
  const DEFAULT_DELIMITER = ",";

  if (!input.startsWith("//")) {
    return { delimiter: DEFAULT_DELIMITER, numberString: input };
  }

  const newlineIndex = input.indexOf("\n");
  const delimiterSection = input.substring(2, newlineIndex);
  const numberString = input.substring(newlineIndex + 1);

  if (delimiterSection.length === 1) {
    return { delimiter: delimiterSection, numberString: numberString };
  } else {//multiple delimiters
    let delimiter = delimiterSection.slice(1, -1).split(/\]\[/).join(''); 
    return { delimiter: delimiter, numberString: numberString };
  }
}
