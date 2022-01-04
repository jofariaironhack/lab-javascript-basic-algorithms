// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
let hacker1 = "Joana";
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
let hacker2 = "Raymond";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let driverCapitals = "";

for (let i = 0; i < hacker1.length; i++) {
  let upperCaseLetter = hacker1[i].toUpperCase();

  if (i === 0) {
    driverCapitals += upperCaseLetter;
  } else {
    driverCapitals = driverCapitals + " " + upperCaseLetter;
  }
}

console.log(driverCapitals);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName = reversedName + hacker2[i];
}

console.log(reversedName);

// 3.3 Depending on the lexicographic order of the strings, print:

let longestWord = "";

if (hacker1.length >= hacker2.length) {
  longestWord = hacker1;
} else {
  longestWord = hacker2;
}

for (let i = 0; i < longestWord.length; i++) {
  if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
    break;
  } else if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker2[i] < hacker1[i] || hacker2[i] === undefined) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  }
}

// Bonus 1: Iorem Ipsum

let ipsumStr =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet est at justo tempor mollis. Aliquam consequat lacinia interdum. Fusce sodales dui a elit pulvinar ornare. Integer ullamcorper nunc vel finibus venenatis. Sed lectus velit, lacinia non posuere a, porta fringilla turpis. Cras sagittis erat malesuada risus posuere fringilla. Etiam vulputate dolor metus, in pharetra velit dictum non. Vivamus eu augue nec est tempus viverra. Phasellus eu augue volutpat, fermentum risus et, dapibus purus. Quisque vel augue mauris. Maecenas mattis ipsum sit amet metus dictum, quis pharetra enim cursus. Sed ac ullamcorper turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In consectetur diam ac turpis malesuada rutrum. Sed porta nulla id enim vulputate, eu tristique tortor cursus.";

// to count all words

let wordCount = 1;

for (let i = 0; i < ipsumStr.length; i++) {
  // counting the spaces means counting the words!
  if (ipsumStr[i] === " ") {
    wordCount++;
  }
}

console.log("Amount of words: " + wordCount);

// to count only "et" words

let etCount = 0;

for (let i = 0; i < ipsumStr.length; i++) {
  // counts if current letter is "e" and the next letter is "t"
  if (ipsumStr[i] === "e" && ipsumStr[i + 1] === "t") {
    etCount++;
  }
}

console.log("Amount of et: " + etCount);

// Bonus 2: Palindrome

let phraseToCheck = "tacocat";

// first we create a clean variable with all special characters removed.
let cleanPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  // only add characters between "A" and "z"
  if (phraseToCheck[i] >= "A" && phraseToCheck[i] <= "z") {
    cleanPhrase = cleanPhrase + phraseToCheck[i];
  }
}

// then we reverse the phrases
let reversedPhrase = "";

// to do that, we do a reverse loop and add the characters to a new string
for (let i = cleanPhrase.length - 1; i >= 0; i--) {
  reversedPhrase = reversedPhrase + cleanPhrase[i];
}

// then simply compare the two variables to check for a palindrome!
if (cleanPhrase === reversedPhrase) {
  console.log("The phrase is a palindrome!");
} else {
  console.log("The phrase is not a palindrome");
}
