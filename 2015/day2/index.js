/**Read the input file
 * Make an array by split by new line
 * Filter the array by empty array
 * Map each array into arrays by split by 'x'
 */
let input = require("fs")
    .readFileSync(__dirname + "/input", "utf-8")
    .split(/\n/)
    .filter((e) => e != [])
    .map((array) => array.split("x").map((e) => Number(e)));

function part1() {
    let acc = 0;
    input.forEach((array) => {
        let a1 = array[0] * array[1]; // Get the area between lenght and width
        let a2 = array[1] * array[2]; // Get the area between width and height
        let a3 = array[0] * array[2]; // Get the area between length and height
        let minArea = Math.min(a1, a2, a3); // Get the minimun area
        let squareFeet = 2 * (a1 + a2 + a3) + minArea; // Get total square
        acc += squareFeet;
    });
    return acc;
}

function part2() {
    let acc = 0;
    input.forEach((array) => {
        let arraySort = array.sort((a, b) => a - b).slice(0, 3);
        let ribbonToWrap = 2 * (arraySort[0] + array[1]);
        let ribbonToBow = array.reduce((acc, cur) => (acc *= cur));
        acc += ribbonToWrap + ribbonToBow;
    });
    return acc;
}

console.log("part 1 = " + part1());
console.log("part 2 = " + part2());
