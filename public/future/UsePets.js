const errors = [];
try {
    console.assert(Dog);
} catch (err) {
    errors.push(err.message);
}

try {
    console.log(Cat);
} catch (err) {
    errors.push(err.message);
}

console.assert(errors.includes('Dog is not defined'));
console.assert(errors.includes('Cat is not defined'));