const names = ['anna', 'bob', 'cody', 'diana']

const leaders = [
  {
    name: 'Angela Merkel',
    age: 67,
    country: 'Germany',
    position: 'Chancellor',
    accomplishments: [
      'Longest-serving female head of government in European history',
      'Discovered a new species of butterfly in her spare time',
    ],
  },
  {
    name: 'Jacinda Ardern',
    age: 41,
    country: 'New Zealand',
    position: 'Prime Minister',
    accomplishments: [
      'Effective response to COVID-19 pandemic',
      'Won a Nobel Prize for her exceptional leadership',
    ],
  },
  {
    name: 'Margaret Thatcher',
    age: 87,
    country: 'United Kingdom',
    position: 'Prime Minister',
    accomplishments: [
      'First female Prime Minister of the UK',
      'Moonwalked during a state visit to the U.S.',
    ],
  },
  {
    name: 'Kamala Harris',
    age: 57,
    country: 'United States',
    position: 'Vice President',
    accomplishments: [
      'First female Vice President of the US',
      'Mastered the art of juggling while in office',
    ],
  },
  {
    name: 'Ellen Johnson Sirleaf',
    age: 82,
    country: 'Liberia',
    position: 'President',
    accomplishments: [
      'First female head of state in Africa',
      'Published a bestselling novel in her spare time',
    ],
  },
  {
    name: 'Indira Gandhi',
    age: '1942-1984',
    country: 'India',
    position: 'Prime Minister',
    accomplishments: [
      'First female Prime Minister of India',
      'Hold the record for most cups of tea consumed in a day',
    ],
  },
  {
    name: 'Ngozi Okonjo-Iweala',
    age: 67,
    country: 'Nigeria',
    position: 'Director-General of the WTO',
    accomplishments: [
      'First African and first woman to lead the WTO',
      'Conquered Mount Everest in her free time',
    ],
  },
  {
    name: 'Queen Elizabeth II',
    age: 95,
    country: 'United Kingdom',
    position: 'Queen',
    accomplishments: [
      'Longest-reigning current monarch',
      'Competed in the Olympics and won a gold medal in archery',
    ],
  },
  {
    name: 'Tsai Ing-wen',
    age: 65,
    country: 'Taiwan',
    position: 'President',
    accomplishments: [
      'First female President of Taiwan',
      'Wrote a bestselling cookbook on Taiwanese cuisine',
    ],
  },
  {
    name: 'Michelle Bachelet',
    age: 70,
    country: 'Chile',
    position: 'President',
    accomplishments: [
      'First female President of Chile',
      'Founded a successful space exploration company',
    ],
  },
];

/********** Q1 *********/
// array.splice(start, deleteCount, item1, item2, ...)
const fruits = ['apple', 'banana', 'cherry', 'date'];


const removed = fruits.splice(1, 2, 'melon');

console.log(removed)
console.log(fruits)



const players = ['matilda', 'diego', 'theres', 'petra', 'jennie', 'poya'];

// Create a new array with elements from index 0 to 3 (exclusive)
const winners = players.slice(0, 3);
console.log(winners)
console.log(players)



/********** Q2 *********/
const person = {
  name: 'John',
  age: 30,
};

console.log(person.name)
console.log(person['name'])


const anotherPerson = {
  'first name': 'John',
  'last name': 'Doe',
};

// const key = 'first name';
const firstName = anotherPerson['first name']; // Using bracket notation for properties with spaces
console.log(firstName)


// Simulated product data received from a server
const productData = {
  product123: {
    name: 'Smartphone',
    price: 499.99,
  },
  product456: {
    name: 'Laptop',
    price: 899.99,
  },
};

// User interaction: User clicks on a product name
const selectedProductId = 'product123'; // This could be determined dynamically based on user action

// Access product details using bracket notation with dynamic property name
const selectedProduct = productData[selectedProductId];
console.log(selectedProduct)




/********** Q3 *********/
const add = (a, b) => {
  const sum = a + b;
  return sum;
}

const result = add(32, 5); // Calls the add function and stores the result in the 'result' variable
console.log(result);


/********** Q4 *********/

// When used inside a method of an object, this refers to the object itself, allowing you to access its properties and methods.
const friend = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(friend.getFullName())



// Arrow functions do not have their own this. Instead, they inherit the this value from the surrounding lexical context. 
// This can be handy in cases where you want to maintain the this context from an outer function or object.
const friend2 = {
  firstName: 'Mama',
  lastName: 'Bear',
  getFullName: () => {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(friend2.getFullName());









/********** Q5 *********/
// let price = 40
// let discount = 0.5
const SHIPPINGFEE = 25

const getTotalPrice = (price, discount) => {
  const sum = price * discount + SHIPPINGFEE;
  return sum;
}



// console.log(discount); 
// console.log(price); 
console.log(getTotalPrice(180, 0.5));







/********** Q6 *********/
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 'jennie', 'jennie'];
const uniqueValues = new Set(arrayWithDuplicates);

uniqueValues.add('jennie')
uniqueValues.delete(3)

console.log(uniqueValues);


// Using map to create an array of names and ages
const namesAndAges = leaders.map((leader) => {
  return {
    name: leader.name,
    age: leader.age,
  };
});

const namesAndDoubleAges = leaders.map((leader) => {
  return {
    name: leader.name,
    age: leader.age,
    doubleAge: leader.age * 2,
  };
});

console.log(namesAndAges)

/********** Q7 *********/

const currentQuestion = {
  category: 'Hair',
  value: 'black',
};

const { category, value } = currentQuestion;

// const category = currentQuestion.category
// const value = currentQuestion.value

console.log(category);
console.log(value);