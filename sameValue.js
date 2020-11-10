// https://tc39.es/ecma262/#sec-samevalue
// The internal comparison abstract operation SameValue(x, y), where x and y are ECMAScript language values, produces true or false. Such a comparison is performed as follows:
const sameValue = (x, y) => {
  // 1. If Type(x) is different from Type(y), return false.
  if (typeof x !== typeof y) {
    return false
  }
  // 2. If Type(x) is Number or BigInt, then
  //     a. Return ! Type(x)::sameValue(x, y).
  if (typeof x === 'number') {
    // 6.1.6.1.15 Number::sameValueZero ( x, y )
    // 1. If x is NaN and y is NaN, return true.
    if (x !== x && y !== y) {
      return true
    }
    // 2. If x is +0 and y is -0, return false.
    if (1 / x === Infinity && 1 / y === -Infinity) {
      return false
    }
    // 3. If x is -0 and y is +0, return false.
    if (1 / x === -Infinity && 1 / y === Infinity) {
      return false
    }
    // 4. If x is the same Number value as y, return true.
    // 5. Return false.
    return x === y
  }
  if (typeof x === 'bigint') {
    // The abstract operation BigInt::equal with two arguments x and y of type BigInt returns true if x and y have the same mathematical integer value and false otherwise.
    return x === y
  }
  // 3. Return ! SameValueNonNumeric(x, y).
  return sameValueNonNumeric(x, y)
  // Note This algorithm differs from the Strict Equality Comparison Algorithm in its treatment of signed zeroes and NaNs.
}
