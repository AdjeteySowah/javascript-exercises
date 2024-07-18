const findTheOldest = function(people) {
    let peopleData = people.map((person) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }

        return person;
    });

    let oldestPerson = peopleData.reduce((oldest, person) => {
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age > (oldest.age || 0)) {
            return {... person, age};
        }

        return oldest;
    }, {});

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
