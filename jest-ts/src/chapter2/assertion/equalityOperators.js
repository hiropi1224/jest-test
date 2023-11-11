console.log("2" == 2); // true
console.log(true == 1); // true

console.log("2" === 2); // false
console.log(true === 1); // false

// ==
console.log(NaN == NaN) // false
console.log(+0 == -0) // true
// ===
console.log(NaN == NaN) // false
console.log(+0 == -0) // true
// Object.is
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(+0, -0)) // false