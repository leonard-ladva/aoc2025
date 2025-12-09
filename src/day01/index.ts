import run from "aocrunner";

// const parseInput = (rawInput: string) => rawInput.substring(998, 2101).split("\n");
const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
	let pointer = 50;
	let zeroCounter = 0;
	for (let step of input) {
		const sign = step[0] == "L" ? -1 : 1;  
		const amount = parseInt(step.substring(1));

		pointer += (amount % 100) *sign
		if (pointer < 0) pointer = 100 + pointer
		if (pointer > 99) pointer = pointer % 100

		if (pointer == 0) {
			zeroCounter += 1;
		}
	}
  return zeroCounter;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
	let pointer = 50;
	let zeroCounter = 0;
	for (let step of input) {
		const sign = step[0] == "L" ? -1 : 1;  
		let amount = parseInt(step.substring(1));
		
		// for every full 100 add 1 to the count
		zeroCounter += Math.floor(amount / 100)
		amount = amount % 100

		if (amount == 0) continue

		// add amount that is less than hundred and not zero to the pointer
		pointer += amount * sign

		// going negative over 0
		if (pointer < 0) {
			if (Math.abs(pointer) != Math.abs(amount)) {
				zeroCounter++;
			}
			pointer = 100 + pointer;
		} 
		// going positive over 100 
		else if (pointer > 99) {
			pointer = pointer % 100;
			zeroCounter++;
		} 
		// staying on 0
		else if (pointer == 0) {
			zeroCounter++;
		}
		// console.log(step, pointer, zeroCounter)
	}
  return zeroCounter;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
R50
L89
R6
R23
		`,
        expected: 28,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});

// L500
// R550 0 28
// L789 11 28
// R906 17 28
// R123 40 28