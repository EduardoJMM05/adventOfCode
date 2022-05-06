const STRING_PART1 = "00000";
const STRING_PART2 = "000000";
let crypto = require("crypto");
/** GETTING THE SECRET WORD FROM THE INPUT FILE
 * Reading the input file
 * Replace the new line in case it have it
 */
let input = require("fs")
	.readFileSync(__dirname + "/input", "utf-8")
	.replace(/\n/, "");

function part1() {
	let fullSecret = "";
	let lowestNumber = 0;
	let isSolved = false;
	while (!isSolved) {
		lowestNumber += 1;
		fullSecret = input + lowestNumber;
		let hash = crypto.createHash("md5").update(fullSecret).digest("hex");
		isSolved = hash.startsWith(STRING_PART1);
	}
	return lowestNumber;
}

function part2() {
	let fullSecret = "";
	let lowestNumber = 0;
	let isSolved = false;
	while (!isSolved) {
		lowestNumber += 1;
		fullSecret = input + lowestNumber;
		let hash = crypto.createHash("md5").update(fullSecret).digest("hex");
		isSolved = hash.startsWith(STRING_PART2);
	}
	return lowestNumber;
}

console.log("Part 1 = " + part1());
console.log("Part 2 = " + part2());
