// const findColorMeaning2 = () => {
//   const color = "purple";

//   if (color === "blue") {
//     console.log("Blue: You love calm and peace.");
//   } else if (color === "red") {
//     console.log("Red: You are passionate and bold.");
//   } else if (color === "green") {
//     console.log("Green: You are connected to nature.");
//   } else if (color === "yellow") {
//     console.log("Yellow: You radiate happiness and energy.");
//   } else {
//     console.log("That's a unique choice!");
//   }
// };

// findColorMeaning2();

// const calculateLateFee = function (overdueDays) {
//   const feePerDay = 0.25;
//   const totalFee = overdueDays * feePerDay;
//   return totalFee.toFixed(2);
// };

// const input = process.argv[2];
// const overdueDays = Number(input);

// if (isNaN(overdueDays) || overdueDays < 0) {
//   console.log("Please enter a valid number of overdue days.");
// } else {
//   const lateFee = calculateLateFee(overdueDays);
//   console.log(`The late fee is $${lateFee}.`);
// }

// console.log(calculateLateFee(10));

// const degreeSymbol = "\u00b0";
// const fahrenheit = 120;
// const celsious = ((fahrenheit - 32) * 5) / 9;
// if (celsious > 0) {
//   console.log(
//     `it is freezing! the temperature is${celsious.toFixed(2)} ${degreeSymbol}f`
//   );
// } else if (celsious > 100) {
//   console.log(
//     `fire alert! the tempreture is ${celsious.toFixed(2)} ${degreeSymbol}f`
//   );
// } else {
//   console.log("the tempreture is normal today");
// }
// const supercar = {
//   model: "ferrari sf90",
//   price: 500000,
//   features: {
//     color: "red",
//   },
// };

// const addFeature = (car, featureName) => {
//   if (!featureName || typeof featureName !== "string") {
//     console.error("invalid feature name. please provide a feature string.");
//     return;
//   }
//   car.features[featureName] = true;
//   console.log(
//     `${featureName.charAt[0] + featureName.slice[1]} has been added to ${
//       car.model
//     }`
//   );
// };

// const logFeatures = (car) => {
//   console.log("features:");
//   for (const feature in car.features) {
//     console.log(`-${feature}: ${car.features[feature]}`);
//   }
// };
// addFeature(supercar, "turbo");
// logFeatures(supercar);

// const supercar = {
//   model: "Ferrari SF90",
//   price: 500000,
//   features: {
//     color: "Red",
//   },
// };

// // Step 2: Define the addFeature function
// const addFeature = (car, featureName) => {
//   if (!featureName || typeof featureName !== "string") {
//     console.error("Invalid feature name. Please provide a valid string.");
//     return;
//   }

//   car.features[featureName] = true; // Add the feature to the features object
//   console.log(
//     `${
//       featureName.charAt(0).toUpperCase() + featureName.slice(1)
//     } has been added to ${car.model}.`
//   );
// };

// // Step 3: Use a for...in loop to log all the features of the supercar
// const logFeatures = (car) => {
//   console.log("Features:");
//   for (const feature in car.features) {
//     console.log(`- ${feature}: ${car.features[feature]}`);
//   }
// };

// // Example Usage:
// addFeature(supercar, "turbo"); // Adds the "turbo" feature
// logFeatures(supercar);

// const sendMessage = (userName, callback) => {
//   return callback(userName);
// };

// const welcomeMessage = (name) => {
//   return `Welcome ${name}`;
// };
// console.log(sendMessage("amina", welcomeMessage));

// function greet(name, callback) {
//   console.log(`Welcome ${name}`);
//   callback();
// }
// function sayGoodBye() {
//   console.log("good bye");
// }
// greet("aisha", sayGoodBye);
// greet("amina", sayGoodBye);
// greet("mohamud", sayGoodBye);
// function calculate(num1, num2, operation) {
//   return operation(num1, num2);
// }
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;

// console.log(calculate(4, 3, multiply));
// console.log(calculate(4, 3, add));

// console.log("start");
// setTimeout(() => {
//   console.log("this runs after 2 seconds");
// }, 2000);
// console.log("end");

// function fetchData(callback) {
//   console.log("fetching data.....");
//   setTimeout(() => {
//     const data = { id: 1, name: "mohamud" };
//     callback(data);
//   }, 2000);
// }

// fetchData((data) => {
//   console.log("data received", data);
// });
// document.getElementById("btn").addEventListener("click", () => {
//   console.log("button clicked");
// });

//using callback with .map
// const numbers = [1, 2, 3, 4];
// const squares = numbers.map((num) => num * num);
// console.log(squares);
// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter((num) => num % 2 === 0); // [2, 4]

// console.log(evenNumbers);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);
