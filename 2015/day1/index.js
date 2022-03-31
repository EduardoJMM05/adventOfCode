let input = require("fs")
    .readFileSync(__dirname + "/input", "utf-8")
    .split("")
    .filter((chart) => chart === "(" || chart === ")");

function part1() {
    return input.reduce((acc, cur) => (cur === "(" ? ++acc : --acc), 0);
}

function part2() {
    let acc = 0;
    for (let i = 0; i < input.length; i++) {
        const chart = input[i];
        chart === "(" ? ++acc : --acc;
        if (acc === -1) return i + 1;
    }
    return 0;
}

console.log("part 1 = " + part1());
console.log("part 2 = " + part2());
