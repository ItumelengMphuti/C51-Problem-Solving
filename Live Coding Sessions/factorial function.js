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
            return `${this.firstName} ${this.lastName}`
        },
        introduce() {
            return `Hello, my name is ${this.sayName()}.  I am ${this.age} years old.  I am a ${this.gender}.`
        }
    }
}

const sima = person(
    "Simamkele",
    "Sikani",
    10,
    "male",
    true,
    "Developer",
    false
);

console.log(sima.sayName());

console.log(sima.introduce());