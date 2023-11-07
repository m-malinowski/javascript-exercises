const findTheOldest = function(people) {
    let oldestPerson = people[0]
    people.forEach(person => {
        if (getAge(person) > getAge(oldestPerson)){
            oldestPerson = person
        }
    });
    return oldestPerson
};

const getAge = function(person) {
    const currentYear = 2023
    const finalYear = ('yearOfDeath' in person? person.yearOfDeath : currentYear);
    const initYear = person.yearOfBirth;
    const age = finalYear - initYear
    return age
}

// Do not edit below this line
module.exports = findTheOldest;
