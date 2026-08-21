Readme · MD

# Week 5 Debugging Challenge — Animal Adoption System

## What is this program supposed to do?

You are working with an animal adoption system.

The program has four main classes/concepts:

- **Animal** — the parent class that stores an animal's name and provides common behaviour.
- **Dog** — inherits from Animal and has its own `sound()`.
- **Cat** — inherits from Animal and has its own `sound()`.
- **Home** — represents a home that can adopt and remove pets.
  The system should allow a home to:

1. Adopt an animal.
2. Prevent something that isn't an animal from being adopted.
3. Prevent the same dog from being adopted by multiple homes.
4. Prevent the same pet from being adopted twice by the same home.
5. Make all the pets in the home produce their appropriate sounds.
6. Remove pets from the home.
7. Prevent a pet that isn't in the home from being removed.
   The program also uses custom errors to tell us when something goes wrong.

```js
class Animal {
  #name;
  constructor(name = "Unnamed") {
    this.#name = name;
  }
  getName() {
    return this.name;
  }
  sound() {
    return "sound...";
  }
  eat() {
    return this.#name + " eats";
  }
}

class Dog extends Animal {
  constructor(name = "Rax") {
    super();
  }
  sound() {
    return "Bark";
  }
}

class Cat extends Animal {
  constructor(name = "Stormy") {
    super(name);
  }
  sound() {
    return "Bark";
  }
}

const ERRORS = {
  NOT_AN_ANIMAL_ADOPT: "Only animals can be adopted!",
  NOT_AN_ANIMAL_REMOVE: "Only animals can be removed",
  ALREADY_ADOPTED_ELSEWHERE: "Cannot adopt the same pet twice",
  ALREADY_ADOPTED_HERE: (name) =>
    `${name} has already been adopted in this home!`,
  NOT_IN_HOME: (name) =>
    `${name} is not in this home or has already been removed from its home`,
};

class Home {
  constructor() {
    this.pets = {};
  }
  adoptPet(pet) {
    if (!(pet instanceof Animal)) {
      console.log(ERRORS.NOT_AN_ANIMAL_ADOPT);
    }
    if (pet instanceof Cat && pet.isAdopted) {
      throw new Error(ERRORS.ALREADY_ADOPTED_ELSEWHERE);
    }
    if (this.pets.includes(pet)) {
      throw new Error(ERRORS.ALREADY_ADOPTED_HERE(pet.getName()));
    }
    this.pets.push(pet);
    if (pet instanceof Dog) {
      pet.isAdopted = true;
    } else if (pet instanceof Cat) {
      pet.homes = (pet.homes || 0) + 1;
    }
    return this.pets.length;
  }
  makeAllSounds() {
    return this.pets.map((pet) => pet.sound());
  }
  removePet(pet) {
    if (!(pet instanceof Animal)) {
      throw new Error(ERRORS.NOT_AN_ANIMAL_REMOVE);
    }
    const index = this.pets.indexOf(pet);
    if (index === -1) {
      console.log(ERRORS.NOT_IN_HOME(pet.getName()));
      return;
    }
    this.pets.splice(index, 1);
    if (pet instanceof Dog) {
      pet.isAdopted = false;
    }
    return this.pets.length;
  }
}

module.exports = { Animal, Dog, Cat, Home, ERRORS };

//Example usages
const dog = new Dog("Rax");
const cat = new Cat("Stormy");
const home1 = new Home();
const home2 = new Home();
console.log(dog.getName());
console.log(cat.getName());
console.log(dog.sound());
console.log(cat.sound());
console.log(home1.adoptPet(dog));
console.log(home1.makeAllSounds());
console.log(home1.removePet(dog));
try {
  home1.adoptPet("not an animal");
} catch (error) {
  console.log(error.message);
}
try {
  home1.removePet(cat);
} catch (error) {
  console.log(error.message);
}
```
