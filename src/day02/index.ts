import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split(',');

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let result = 0;
  for (let range of input) {
	const [rangeStartString, rangeEndString] = range.split('-');
	const rangeStart = parseInt(rangeStartString);
	const rangeEnd = parseInt(rangeEndString);
	// console.log(range, rangeStart, rangeEnd)
	for (let id = rangeStart; id <= rangeEnd; id++) {
		const idString = id.toString();	
		const length =idString.length
		if (length % 2 == 1) continue
		const firstHalf  = idString.substring(0, Math.floor(length/2));
		const secondHalf = idString.substring(Math.floor(length/2));
		if (firstHalf == secondHalf) {
			// console.log(firstHalf, secondHalf, id)
			result += id;
		}
	}
  }

  return result;
};
const repetitionRegex = /^(\w+)\1+$/gm

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let result = 0;
  for (let range of input) {
	const [rangeStartString, rangeEndString] = range.split('-');
	const rangeStart = parseInt(rangeStartString);
	const rangeEnd = parseInt(rangeEndString);
	for (let id = rangeStart; id <= rangeEnd; id++) {
		const idString = id.toString();	
		if (repetitionRegex.test(idString)) {
			// console.log(id)
			result += id;
		}
	}
}
  return result;
};

run({
  part1: {
    tests: [
      {
        input: `92916254-92945956,5454498003-5454580069`,
        expected: "",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `92916254-92945956,5454498003-5454580069`,
        expected: "",
      },
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
