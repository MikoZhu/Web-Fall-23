// Variables

// What are Variables in JavaScript?
// In JavaScript, variables are like containers that hold information. They let you store different kinds of data, such as numbers, text, or more complex things like lists of items. Think of variables as labeled boxes where you can put stuff to use later.

// Why Use Variables in JavaScript?
// Variables are used to remember and manage information in a program. Instead of repeating the same value over and over, you can use a variable to store that value once and then use the variable name whenever you need it. This makes your code cleaner, easier to understand, and more flexible to change.

// 3 Ways of declaring Variables in JS
// They use JS reserved keywords
// var - Old School
// let - New School - PREFFERED
// const - New School - PREFFERED

// Examples

var firstName = "Michael";
console.log(firstName);

let lastName = "Scott";
console.log(lastName);

const role = "Regional Manager";
console.log(role);

// Camel Case Convention
let myCountryOfOrigin = "Venezuela";

// Example of storing variables inside another variable using a oldSchool approach
let theOfficeInfo = firstName + lastName + "- " + role;
console.log(theOfficeInfo);

// Example of storing variables using backticks ;) --
// Personal Opinion: Better approach because, even though a bit more long in the process due to the ${} its leads to more flexibility as you can see :)
let theOfficeInfoBackticked = `${firstName} ${lastName} - ${role}`;
console.log(theOfficeInfoBackticked);

console.log("---------");
console.log("---------");
console.log("---------");

// Rules & Good Practices

// Use descriptive naming for better clarity and descriptive variable names.
// If your variables are composed of two or more words, use the camelCase convention naming.
// JS is case sensitive so y & Y are parsed different by the compiler since they are different case
// Variable names cannot start with numbers.
// Variables cannot use resrved keyword names
// Variables declared with reserved keywords var & let can be re-assigned while variables using the reserved keyword const cannot.
// YOU CAN assign an empty value to a variable while its declared with "let" or "var", if you try to do so with "const", you will get an error
// THE "var" keyword although its still avaiable, it is not used anymore, since it has been swapped by "let" for modern practices.

// EXAMPLES

// Good Variable naming
// Descriptive naming and use of camelCase
let favoriteFoods = ["Pizza", "Sushi", "Ceviche", "Soup"];
console.table(favoriteFoods);

// Difference of case sensitive variables

let phone = "Iphone";
let Phone = "Android";
console.log(phone, ",", Phone);

console.log("---------");
console.log("---------");

// Variable value reassignment
let coolVariable = "I Love pizza!";
coolVariable = "I love sushi!";
coolVariable = 24;
coolVariable = true;
console.log(coolVariable);

console.log("---------");
console.log("---------");

// Variable using Const
const singers = ["Beyonce", "The Weekend", "Aretha Franklin"];
console.table(singers);

// singers = "Freddie Mercury";

// Empty values using let
let music;
music = ["RCHP", "Foo Fighters", "Nirvana"];
console.table(music);

console.log("---------");
console.log("---------");

// Example of storing an array of objects inside
const movies = [
  {
    movie: "Wolf of Wallstreet",
    genre: ["Drama", "Action", "Comedy"],
    director: ["Martin Scorsese"],
    location: "New York City, NY",
    actors: ["Jonah Hill", "Margo Robbie", "Leo Di Caprio"],
    year: 2010,
  },
  {
    movie: "Fight Club",
    genre: ["Drama", "Noir", "Comedy", "Action"],
    director: ["David Fincher"],
    location: "Los Angeles, California",
    actors: ["Bradd Pitt", "Edward Norton", "Helena Bonham Carter"],
    year: 1999,
  },
];
console.log(movies);
