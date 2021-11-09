import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

var numberOfCupsOfCoffee: number = 6;

const kelly = {
  fullName: "Kelly Dobson",
  luckyNumber: 42,
  favoriteMovies: ["Star Wars", "MCU"],
};

console.log(
  `${kelly.fullName} drinks ${numberOfCupsOfCoffee} cups of coffee every day!`
);

console.log(`${kelly.fullName} likes the number ${kelly.luckyNumber}!`);

var userName = window.prompt("What is your name?");
console.log(`Hi, ${userName}!`);

var userInput1 = window.prompt("What is the first number?");
var userInput2 = window.prompt("What is the second number?");

var firstOperand = Number.parseFloat(<string>userInput1);
var secondOperand = Number.parseFloat(<string>userInput2);

var sum = firstOperand + secondOperand;
var difference = firstOperand - secondOperand;
var product = firstOperand * secondOperand;
var quotient = firstOperand / secondOperand;
var remainder = firstOperand % secondOperand;

console.log(`sum is ${sum}`);
console.log(`difference is ${difference}`);
console.log(`product is ${product}`);
console.log(`quotient is ${quotient}`);
console.log(`remainder is ${remainder}`);

var numbers: number[] = [
  15020, 48630, 10005, 40895, 27163, 37189, 17491, 33115, 10516, 33970, 18504,
  13387, 36394, 23487, 17209, 26716, 42855, 19551, 46395, 46550, 32838, 39627,
  44770, 46647, 49152, 48148, 20998, 13434, 18874, 16951, 35419, 12085, 13918,
  43809, 17065, 22318, 31210, 31347, 36703, 42901, 12057, 47922, 22770, 21535,
  42167, 29888, 13438, 26673, 16977, 20568, 15711, 31235, 24512, 39837, 40837,
  21097, 21038, 10440, 22831, 24997, 32416, 28338, 22914, 27242, 14978, 42625,
  43029, 17682, 39094, 46095, 39230, 24598, 23957, 32513, 13494, 12540, 29400,
  16565, 10741, 26071, 22214, 15758, 10547, 25792, 47073, 41348, 16021, 29858,
  45170, 37335, 49858, 48343, 38594, 19297, 35157, 31597, 27703, 38465, 41697,
  37807,
];
var smallest: number = numbers[0];
var largest: number = numbers[0];
var arraySum: number = 0;

numbers.forEach((num) => {
  if (num < smallest) smallest = num;
  if (num > largest) largest = num;
  arraySum += num;
});

var average: number = arraySum / numbers.length;

const stats = {
  smallest: smallest,
  largest: largest,
  sum: arraySum,
  average: average,
};

console.log(`smallest is ${stats.smallest} and largest is ${stats.largest}`);
console.log(`arraySum is ${stats.sum} and average is ${stats.average}`);
