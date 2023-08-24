
const findTheOldest = function(people) {
    let highest = -Infinity; // Initialize with a very small value
    let name = null; // Initialize as null
    
    people.forEach(person => {
        const currentYear = new Date().getFullYear();
        const yearOfDeath = person.yearOfDeath || currentYear; // Consider current year for living people
        const age = yearOfDeath - person.yearOfBirth;
        
        if (age > highest) {
            highest = age;
            name = person;
        }
    });

    return name;
};
// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]
//   console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
