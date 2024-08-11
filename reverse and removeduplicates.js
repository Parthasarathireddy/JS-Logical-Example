console.log("Hello, World!");
let value =  'sstrrong';
let newValue = [...new Set(value)];
console.log(newValue.join(''));
console.log([...new Set(value)].reverse().join(''));
