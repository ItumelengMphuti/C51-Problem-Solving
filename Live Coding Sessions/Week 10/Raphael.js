function isInstanceOf(obj, classCheck) {
  if (
    obj === undefined ||
    obj === null ||
    classCheck === undefined ||
    classCheck === null
  ) {
    return false;
  }

  let currentObjectProto = Object.getPrototypeOf(obj);

  while (currentObjectProto !== null) {
    if (currentObjectProto === classCheck.prototype) {
      return true;
    }
    currentObjectProto = Object.getPrototypeOf(currentObjectProto);
  }

  return false;
}

class Animal {
  eat() {
    return "eating";
  }
}

class Dog extends Animal {
  bark() {
    return "woof";
  }
}

class Cat {
  meow() {
    return "Meow";
  }
}

const dog = new Dog();
console.log(isInstanceOf(dog, Dog));
console.log(isInstanceOf(dog, Animal));
console.log(isInstanceOf(dog, Cat));


console.log(isInstanceOf(undefined, Dog));
console.log(isInstanceOf(dog, undefined));
