function _instanceof (V, target) {
  if (!isObject (target)) {
    throw new TypeError (`${target} is not an object`)
  }

  let instOfHandler = target[Symbol.hasInstance]
  if (isCallable (instOfHandler)) {
    return Boolean (instOfHandler.call (target, V))
  }

  if (!isCallable (target)) {
    throw new TypeError (`${target} is not callable`)
  }

  if (!isObject (V)) {
    return false
  }

  let P = target.prototype
  if (!isObject (P)) {
    throw new TypeError (
      `Function has non-object prototype '${P} in instanceof check`
    )
  }

  while ((V = Object.getPrototypeOf (V))) {
    if (V === null) {
      return false
    }
    if (V === P) {
      return true
    }
  }
}

function isObject (value) {
  return !!value && (typeof value === 'object' || typeof value === 'function')
}

function isCallable (value) {
  return typeof value === 'function'
}

console.log(_instanceof(new (function foo() {})(), Object))
