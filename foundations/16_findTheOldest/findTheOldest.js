const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  return people.sort(function (a, b) {
    if (a.yearOfDeath === undefined) {
      a.yearOfDeath = currentYear;
    } else if (b.yearOfDeath === undefined) {
      b.yearOfDeath = currentYear;
    }
    const firstPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return firstPerson > nextPerson ? -1 : 1;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
