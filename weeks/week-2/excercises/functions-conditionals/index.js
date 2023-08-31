/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/
console.log("Iteration - 01");
const theCoders = (driver, navigator) => {
  console.log(
    `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
  );
};
theCoders("jennie", "Alfons");
console.log("------");
console.log("------");
/*
  2)
  Pass in only ONE name when you call the function and see what happens.
  (HINT, you should get undefined...)
  */
console.log("Iteration - 02");
theCoders("jennie");
console.log("------");
console.log("------");

/*
  3) 
  create a function that checks which name is the longest when comparing the coders 
  and print out: "The driver has the longest name." or "The navigator has the longest name" 
  or if the names ar the same length "The driver and the navigator has equally long names"
  */
console.log("Iteration - 03");
function coderComparison(driver, navigator) {
  let driverCont = driver.length;
  let navigatorCont = navigator.length;
  if (driverCont > navigatorCont) {
    console.log(`${driver} - The driver has the longest name.`);
  } else if (driverCont < navigatorCont) {
    console.log(`${navigator} - The navigator has the longest name.`);
  } else {
    console.log(
      `Both ${driver} & ${navigator} - The driver and the navigator has equally long names`
    );
  }
}
let nameOne = "Jennie";
let nameTwo = "Alfons";
console.log(nameOne.length, nameTwo.length);
coderComparison("jennie", "alfons");
console.log("------");
console.log("------");

/*
  4) 
  to get user input you can use the prompt() and then store that into a variable.
  Such as 
  let userAge = prompt('How old are you?')
  Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
  alert('wow you are 33! that's young!')
  or alert('23! Younger than Zlatan') or something like that.
  Add as many conditonals as you want.
  */
console.log("Iteration - 04");
console.log("Variation 01 - Using IF's ");
function userAgeFunc() {
  let userAge = parseInt(prompt("How old are you?"));
  if (userAge === 21) {
    console.log("Cool, enjoy your youth cause it goes away fast!");
  } else if (userAge >= 21 && userAge <= 31) {
    console.log(
      "Cool, enjoy your muscle joints cause, at 30, you are messed up, start eating calcium"
    );
  } else if (userAge >= 31 && userAge <= 90) {
    console.log("Nice, get your affairs in order, cause you are OLD!");
  } else if (userAge < 21) {
    console.log("Nice, enjoy school!");
  }
}
// userAgeFunc();

console.log("Variation 02 - Using switch");
let tellMeYourAgeSwitch = () => {
  let userAge = parseInt(prompt("How old are you? - Using Switch Statement"));
  console.log(userAge);

  switch (userAge) {
    case 21:
      console.log(`You are 21 years old! - to be young`);
      break;
    case userAge >= 21 && userAge <= 30:
      console.log(`Enjoy your 20's - :)`);
      break;
    case userAge >= 31 && userAge <= 80:
      console.log(`Always try to stay active both physically and mentally!`);
      break;
    case userAge < 20:
      console.log(`Enjoy your early School years`);
      break;
    default:
      console.log(`Sit back and relax!`);
      break;
  }
};
//   tellMeYourAgeSwitch()

console.log("Variation 03 - Using a ternary operator");
let tellMeYourAgeTernary = () => {
  let userAge = parseInt(prompt("How old are you? - Using Ternary"));
  console.log(userAge);

  userAge === "21"
    ? console.log("You are 21 years old! - to be young")
    : userAge >= 21 && userAge <= 30
    ? console.log("Enjoy your 20's - :)")
    : userAge >= 31 && userAge <= 80
    ? console.log("Always try to stay active both physically and mentally!")
    : userAge < 20
    ? console.log("Enjoy your early School years")
    : console.log("Sit back and relax!");
};

//tellMeYourAgeTernary();
console.log("------");
console.log("------");

/*
    5)
    In this function we want to give the user a mathematical calculation to 
    give us the answer to. Something like prompt('What is 5 + 6?')  
    If the answer is correct, congratulate the user. 'Yay! Correct'
    If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
    You choose if to use addition, subtraction, multiplication or division. 
    */
console.log("Iteration - 05");

function calculationTest() {
  const calculation = parseInt(prompt("What is 5 + 6"));
  switch (calculation) {
    case 11:
      console.log("Yay! Correct");
      break;
    default:
      console.log("Noooo, the answer is 11");
      break;
  }
}
calculationTest();
/*
  6) **BONUS**
  Make the calculation machine we just made show random calculations everytime you invoke the function.
  But hey, maybe limit the randomness to be numbers between 0-10?
  */
