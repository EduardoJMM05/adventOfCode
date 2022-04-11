/** CLEANING THE INPUT FILE
 * Read input file
 * Get an array by split by each character on the string
 * Filter the array by only characters allowing
 */
let input = require("fs")
	.readFileSync(__dirname + "/input", "utf-8")
	.split("")
	.filter(
		(chart) => chart === "<" || chart === ">" || chart === "^" || chart === "v"
	);

function part1() {
	let x = 0; // Increase by 1 with '>' and decrease by 1 with '<', respresents the horizontal axis
	let y = 0; // Increase by 1 with '^' and decrease by 1 with 'v', represents the vertical axis
	let matrixPosition = ["0,0"]; // Matrix to save the positions that Santa has visited... Initialized with (0,0) coordinates

	input.forEach((move) => {
		[x, y] = moveCharacter(move, x, y);
		if (!matrixPosition.includes(`${x}` + "," + `${y}`)) {
			matrixPosition.push(`${x}` + "," + `${y}`);
		}
	});
	return matrixPosition.length;
}

function part2() {
	let santaMovement = [0, 0]; //Represents the Santa movement, first position is equal to the horizontal axis and the second is equal to vertical axis
	let roboMovement = [0, 0]; //Represents the Robo-Santa movement, first position is equal to the horizontal axis and the second is equal to vertical axis
	let matrixPosition = ["0,0"]; // Matrix to save the positions that Santa has visited... Initialized with (0,0) coordinates

	for (let i = 0; i < input.length; i++) {
		let move = input[i];
		let isTurnSanta = i % 2 === 0; //Check for the turn of movement character

		if (isTurnSanta) {
			santaMovement = moveCharacter(move, santaMovement[0], santaMovement[1]);
			if (
				!matrixPosition.includes(
					`${santaMovement[0]}` + "," + `${santaMovement[1]}`
				)
			) {
				matrixPosition.push(
					`${santaMovement[0]}` + "," + `${santaMovement[1]}`
				);
			}
		} else {
			roboMovement = moveCharacter(move, roboMovement[0], roboMovement[1]);
			if (
				!matrixPosition.includes(
					`${roboMovement[0]}` + "," + `${roboMovement[1]}`
				)
			) {
				matrixPosition.push(`${roboMovement[0]}` + "," + `${roboMovement[1]}`);
			}
		}
	}
	return matrixPosition.length;
}

function moveCharacter(move, x, y) {
	if (move === "^" || move === "v") {
		y = move === "^" ? y + 1 : y - 1;
	} else {
		x = move === ">" ? x + 1 : x - 1;
	}
	return [x, y];
}

console.log("part 1 = " + part1());
console.log("part 2 = " + part2());
