// Use a do...while loop to console.log the numbers from 1 to 1000.
const number = 100;
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= number);

// Create an object (with keys and values) called person with the following data:
const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};
// Create a function that logs out the keys of the object using Object.keys().
console.log("The keys in person object:", Object.keys(person));
// Create a function that logs out the keys and values of the object using Object.entries().
console.log("The entries in person object:", Object.entries(person));

// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Aug 5, 1925",
    gender: "female",
  },
  {
    firstName: "Leah",
    lastName: "Marke",
    birthDate: "Jan 12, 1950",
    gender: "female",
  },
  {
    firstName: "Mark",
    lastName: "Smith",
    birthDate: "June 15, 2005",
    gender: "male",
  },
];
// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

// let text = "";
// function oddBirthYear() {
//   for (let x of arrayOfPersons) {
//     console.log(x);
//     let odds = arrayOfPersons.filter(n => n%2)
//     if(birthyear == odds) {
//     console.log(value of birthDate)}
//   }
//   text += x;
//   console.log(x);
// }
// console.log(oddBirthYear);

// Use .map() to map over the arrayOfPersons and console.log() their information.
// Use .filter() to filter the persons array and console.log 0only males in the array.

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.

// BONUS - .filter() out the people in the array who are younger than 21.
