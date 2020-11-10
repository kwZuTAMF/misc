// https://tc39.es/ecma262/#sec-samevaluenonnumeric
// The internal comparison abstract operation SameValueNonNumeric(x, y), where neither x nor y are numeric type values, produces true or false. Such a comparison is performed as follows:
const sameValueNonNumeric = (x, y) => {
  // 1. Assert: Type(x) is not Number or BigInt.
  assert(typeof x !== 'number' || typeof x !== 'bigint')
  // 2. Assert: Type(x) is the same as Type(y).
  assert(typeof x === typeof y)
  // 3. If Type(x) is Undefined, return true.
  if (x === undefined) {
    return true
  }
  // 4. If Type(x) is Null, return true.
  if (x === null) {
    return true
  }
  // 5. If Type(x) is String, then
  if (typeof x === 'string') {
    //     a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
    return x === y
  }
  // 6. If Type(x) is Boolean, then
  if (typeof x === 'boolean') {
    //     a .If x and y are both true or both false, return true; otherwise, return false.
    return x === y
  }
  // 7. If Type(x) is Symbol, then
  if (typeof x === 'symbol') {
    //     a. If x and y are both the same Symbol value, return true; otherwise, return false.
    return x === y
  }
  // 8. If x and y are the same Object value, return true. Otherwise, return false.
  return x === y
}

const assert = (cond, msg) => {
  if (!cond) {
    throw new Error(msg)
  }
}
