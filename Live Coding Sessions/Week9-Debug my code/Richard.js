function getUserName(user) {
  return user.name;
}

const user = {
  name: "Tumi",
  age: 25,
};

console.log(getUserName(user));
