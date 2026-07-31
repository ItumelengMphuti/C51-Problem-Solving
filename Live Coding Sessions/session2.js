function FirstReverse(str) {
    let arrayString = str.split('');
    let result = [];
    for (let i = arrayString.length -1; i >= 0 ; i--) {
        result.push(arrayString[i]);
    }
    return result.join('');
}

let test = 'a new string to reverse';
console.log(FirstReverse(test));