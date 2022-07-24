// 1)Use a do...while loop to console.log the numbers from 1 to 1000.
let result = "";
let number = 0;
// let i = 1;

do {
  number = number + 1;
  result = `${result + number}, `;
  // console.log(i);
  // i++;
} while (number < 1000);
console.log(result);
// 2)Create an object (with keys and values) called person with the following data:
const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};
// 3)Create a function that logs out the keys of the object using Object.keys().
const objectKeys = (object) => {
  const keys = Object.keys(object);
  console.log(keys);
  keys.forEach((key) => {
    console.log(key);
  });
};
objectKeys(person);
// console.log("The keys in person object:", Object.keys(person));
// 4)Create a function that logs out the keys and values of the object using Object.entries().
// console.log("The entries in person object:", Object.entries(person));
const objectEntries = (object) => {
  const entries = Object.entries(object);
  entries.forEach((entry) => {
    const key = entry[0];
    const value = entry[1];
    console.log(`${key}: ${value}`);
  });
  console.log(entries);
};
objectEntries(person);
// 5)Create an arrayOfPersons that contains multiple "people" objects.

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
// 6)Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.
// need to target birthDate key, check value with % to see if odd number

for (const person of arrayOfPersons) {
  const birthYear = person.birthDate.slice(-4);
  if (birthYear % 2 === 1) {
    console.log(birthYear);
    console.log(person.firstName);
  }
}

// 7)Use .map() to map over the arrayOfPersons and console.log() their information.
const personInfo = (arr) => {
  const result = arr.map((item) => {
    const firstName = item.firstName;
    const lastName = item.lastName;
    const birthDate = item.birthDate;
    const gender = item.gender;
    console.log(`${firstName} ${lastName} is a ${gender} born ${birthDate}.`);
  });
};
personInfo(arrayOfPersons);
// 8)Use .filter() to filter the persons array and console.log only males in the array.
const malesOnly = (array) => {
  const males = array.filter((item) => {
    return item.gender === "male";
  });
  console.log(males);
};
malesOnly(arrayOfPersons);

// 9)Create a function that returns true if the value of birthDate is before Jan 1, 1990.
const birthdayBefore = (array) => {
  array.forEach((item) => {
    const birthYear = item.birthDate.slice(-4);
    console.log(birthYear < 1990);
  });
};
birthdayBefore(arrayOfPersons);

// 10)Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
const birthdayBefore1990 = (array) => {
  const bornBefore1990 = array.filter((item) => {
    const birthYear = item.birthDate.slice(-4);
    console.log(typeof birthYear);
    return birthYear < 1990;
  });
  console.log(bornBefore1990);
};
birthdayBefore1990(arrayOfPersons);
// /////////////////////////////////////////////////////////////////////////////////////
//? Pt. 2 From Scratch

const arrayOfPeople = [
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
    lastName: "Marksmith",
    birthDate: "June 15, 2005",
    gender: "male",
  },
];
// 11) .find()

// Code plan: will use the .find method to pull out the first female

// Pseudo code: need to set a variable = array.find(takes a function/what I want to find)
const firstFemale = (array) => {
  const findFirstFemale = array.find((item) => {
    return item.gender === "female";
  });
  console.log(findFirstFemale);
};
firstFemale(arrayOfPeople);

// 12) .findIndex()
// Code plan: use .findIndex to locate the index of the first person who's last name starts with an 'M'
// Pseudo code: set variable = array.findIndex
const lastNameStartsWith = (array) => {
  const lastNameM = array.findIndex((item) => item.lastName.charAt(0) === "M");
  console.log(lastNameM);
};
lastNameStartsWith(arrayOfPeople);
