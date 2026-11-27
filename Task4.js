
const { filterItems, mapItems, reduceItems } = require("./utils.js");

const numbers = [1, 2, 3, 4, 5];

// Filter
const filtered = filterItems(numbers, (num) => num > 2);
console.log("Filtered:", filtered);

// Map
const mapped = mapItems(numbers, (num) => num * 2);
console.log("Mapped:", mapped);

// Reduce
const total = reduceItems(numbers, (sum, num) => sum + num, 0);
console.log("Total:", total);
