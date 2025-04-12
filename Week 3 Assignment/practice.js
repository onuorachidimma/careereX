// 1. Variables storing my name, age, and nationality, I combined it into a sentence
let my_name = "Chidimma Onuora";
let age = 33;
let nationality = "Nigerian";

let introduction = `My name is ${my_name}, I am ${age} years old, and I am ${nationality}.`;
// This will display my sentence
console.log(introduction);

// 2. Favorite quote or lyric - change to uppercase and lowercase
let favoriteQuote = "You can be whatever you want to be.";
// This will change my quote to uppercase
let upperQuote = favoriteQuote.toUpperCase();
// This will display my quote in uppercase
console.log("Uppercase:", upperQuote);
// This will change my quote to lowercase
let lowerQuote = favoriteQuote.toLowerCase();
// This will display my quote in lowercase
console.log("Lowercase:", lowerQuote);

// 3. Reverse a word
let word = "Chidimma";
let reversedWord = word.split("").reverse().join("");
// This will display mreversed word
console.log("Reversed Word:", reversedWord);

// 4. Price of 3 items and total
let price1 = 15;
let price2 = 20;
let price3 = 25;
// This will add the prices of three items
let total = price1 + price2 + price3;
// This will display my total price
console.log(`The total price of the items is $${total.toFixed(2)}.`);

// 5. Average of 5 test scores
let score1 = 85;
let score2 = 90;
let score3 = 78;
let score4 = 88;
let score5 = 92;
// This uses the mathematical formular of average to calculate the average
let averageScore = (score1 + score2 + score3 + score4 + score5) / 5;
// This will display the average of five test scores
console.log(`The average test score is ${averageScore}.`);

// 6. Array of 5 favorite foods - display first and last
let favoriteFoods = [
  "Native Rice",
  "Efo riro",
  "Coconut rice",
  "Yam",
  "Egg sauce",
];
// This will display my first favourite food
console.log("First food:", favoriteFoods[0]);
// This will display my last favourite food
console.log("Last food:", favoriteFoods[favoriteFoods.length - 1]);

// 7. Add two food items - one at beginning, one at end
// This will add to the beginning of the array
favoriteFoods.unshift("Egusi Soup");
// This will add to the ending of the array
favoriteFoods.push("Ice Cream");
// This will display the updated array
console.log("Updated food list:", favoriteFoods);

// 8-10. Create three arrays with 10 student names each
let jssOne = [
  "Chidimma",
  "Odinaka",
  "John",
  "Grace",
  "Tunde",
  "Olu",
  "Emeka",
  "Halima",
  "Bola",
  "Kemi",
];
let jssTwo = [
  "Destiny",
  "Isioma",
  "Femi",
  "Emeka",
  "Ugo",
  "Ngozi",
  "Paul",
  "Tola",
  "Uche",
  "Amaka",
];
let jssThree = [
  "Blessing",
  "Iruoma",
  "Nkechi",
  "Peter",
  "Mary",
  "Jide",
  "Esther",
  "Samson",
  "Janet",
  "Daniel",
];

// This will display all the arraus
console.log("JSS One:", jssOne);
console.log("JSS Two:", jssTwo);
console.log("JSS Three:", jssThree);
