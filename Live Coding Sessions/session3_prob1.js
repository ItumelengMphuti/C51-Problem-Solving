function person(firstName, lastName, age, gender, employed, occupation, married) {
    return {
        firstName,
        lastName,
        age,
        gender,
        employed,
        occupation,
        married,
        sayName() {
            return `${firstName} ${lastName}`
        },
        introduce() {
            return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`
        }
    }
}

const person1 = person('Richard', 'Lebotsa', 5, 'Male', 'employed', 'web dev intern', 'married');
const person2 = person('Rich', 'Lebotsa', 12, 'Male', true, 'web dev intern', 'single');

person1.test = 'test';

console.log(person2.introduce());
console.log(person2.sayName());

console.log('------ Fake inheritance -----');
function alien(firstName, lastName, age, gender, employed, occupation, married, galaxy) {
    let person3 = person(firstName, lastName, age, gender, employed, occupation, married)
    return {
        ...person3,
        galaxyName() {
            return galaxy
        }
    }
}

console.log('------||-----');
const alienPerson = alien('Rich3', 'Surname', 5, 'Male', 'employed', 'web dev intern', 'married', 'MilkyWay');
console.log(alienPerson.galaxyName());
console.log(alienPerson.sayName());
console.log(alienPerson.introduce());