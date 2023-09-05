const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey",
];

console.log("Iteration 01");
const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  const mySentence = `I have ${pokemons.length} pokemons`;
  console.log(mySentence);
};
countThem();
console.log("----");

console.log("Iteration 02");
const orderThem = () => {
  // order the pokemons alphabetically
  // when not specifying, it will sort alphabetcally if data type is string
  const orderedPokemons = pokemons.sort()
  console.table(orderedPokemons);
};
orderThem();
console.log("----");

console.log("Iteration 03");
const flipThem = () => {
  // reverse the order of the pokemons
  // order the pokemons alphabetically
  const reversedPokemons = pokemons.reverse();
  console.table(reversedPokemons);
};
flipThem();
console.log("----");

console.log("Iteration 04");
const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  pokemons.forEach((pokemon) => console.log(pokemon.toUpperCase()));
};
makeThemBig();
console.log("----");

console.log("Iteration 05");
const onlyTheBs = () => {
  // only print the pokemons that starts with B
  // Filtering the array, then printing the filtered array.
  const filteredPokemons = pokemons.filter((pokemon) => pokemon.startsWith("B"));
  console.log(filteredPokemons);
};
onlyTheBs();

const onlyTheBsTwo = () => {
  // only print the pokemons that starts with B
  // only printing the wanted ones, no filtering. 
  pokemons.forEach((pokemon) => {
    if (pokemon.startsWith("B")) {
      console.log(pokemon);
    }
  });
};
onlyTheBsTwo();
console.log("----");

console.log("Iteration 06");
const notTheCs = () => {
  // remove all pokemons that starts with C
  const filtered = pokemons.filter((pokemon) => !pokemon.startsWith("C"));
  filtered.forEach((pokemon) => console.log(pokemon));
};
notTheCs();
console.log("----");

console.log("Iteration 07");
const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  pokemons.forEach((pokemon, i) => {
    const myString = `Number ${i} - ${pokemon}`;
    console.log(myString);
  });
};
nameAndIdThanks();
console.log("----");

console.log("Iteration 08");
const catchPokemon = (name) => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push(name);
  console.log(`${name} has been caught and added to the pokemons array!`);
};
catchPokemon("Raichu");
console.log(pokemons);
console.log("----");

console.log("Iteration 09");
const didICatchIt = (name) => {
  // check the pokemons to see if a specific pokemon is in the array
  // pokemons.includes(name);
  if (pokemons.includes(name)) {
    console.log(`Cool, I already caught this pokemon: ${name}`);
  } else {
    console.log(`You have not catched this pokemon '${name}' yet, go for it!`);
  }
};
didICatchIt("Mewtwo");
console.log("----");

console.log("Iteration 10");
const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  pokemons.splice(2, 0, "Clefairy");
  console.log(
    `Clefairy has been added to the 3rd position of the pokemons array!`
  );
};
addInThirdPlace();
console.log(pokemons);
console.log("----");

console.log("Iteration 11 ");
console.log("Bonus");
// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name

  // one approach is to sort the array by length, and the first item in the array will be the one with the longest name 
  const sortedPokemons = pokemons.sort((a, b) => b.length - a.length);
  longestNamePokemon = sortedPokemons[0];

  console.log(longestNamePokemon, longestNamePokemon.length);
  console.log(
    `The pokemon with the longest name is ${longestNamePokemon} with ${longestNamePokemon.length} characters under his name`
  );
};
theLongestName();

const theLongestName2 = () => {
  // find the pokemon with the longest name
  // if there are multple pokemons with longest names, this approach would work better: 
  let longestNames = [];
  let maxLength = 0;

  pokemons.forEach((pokemon) => {
    if (pokemon.length > maxLength) {
      longestNames = [pokemon]; // Start a new array with the longest name
      maxLength = pokemon.length;
    } else if (pokemon.length === maxLength) {
      longestNames.push(pokemon); // Add to the array if it has the same length as the current longest
    }
  });

  console.log('loooong name(s)', longestNames)
}
theLongestName2();


console.log("----");
// ***BONUS***

// KIWI
//const theLongName = () => {
//   // find the pokemon with the longest name
//   return pokemons.reduce(function (a, b) {
//     return a.length > b.length ? a : b;
//   });
// };

// console.log(theLongName());

// ORANGES
// const theLongestName = () => {
//   // find the pokemon with the longest name
//   let longestName = ""
//   pokemons.forEach((pokemon) => {
//     if (pokemon.length > longestName.length) {
//       longestName = pokemon
//     }
//   })
//   console.log(`The Pokemon ${longestName} has the longest name`)
// };
// theLongestName()

// LEMONS
// const theLongestName = () => {
//   // find the pokemon with the longest name
//   let longestName = []
//   let longestSort = pokemons.sort((a, b) => b.length - a.length);
//   for (let derp of longestSort) {
//     if (derp.length === longestSort[0].length) {
//       longestName.push(derp)
//     }
//   }
//   console.log(longestName)
// };
// theLongestName()



// FOR LOOP - this is a for loop. Not super common to use anymore but sometimes it comes in handy!
// for (let i = 0; i < 5; i++) {
//   console.log('looping', i)
// }




console.log("----");