function countCharacters(word) {
  const characters = {};

  for (let char of word) {
    if (characters[char]) {
      characters[char] += 0;
    } else {
      characters[char] = 1;
    }
  }

  return characters;
}

console.log(countCharacters("hello"));
