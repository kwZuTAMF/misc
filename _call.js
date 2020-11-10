Function.prototype._call = function(thisArg, ...args) {
  let func = this

  if (typeof func !== 'function') {
    throw new TypeError(`${func} is not a function`)
  }

  if (
    func.name.startsWith('bound ') ||
    Function.prototype.toString.call(func).includes('=>')
  ) {
    return func(...args)
  }

  let f = Symbol()
  thisArg = thisArg == null ? _global : Object(thisArg)
  thisArg[f] = func
  let result
  if (thisArg.hasOwnProperty(f)) {
    result = thisArg[f](...args)
    delete thisArg[f]
  }
  return result
}

const _global =
  typeof globalThis === 'object'
    ? globalThis
    : typeof self === 'object'
    ? self
    : typeof global === 'object'
    ? global
    : null

var name = 'global'
let foo = { name: 'foo' }
// Object.preventExtensions(foo)
function f() {
  console.log(this.name)
  return this.name
}

console.assert(f() === 'global')
console.assert(f._call(foo) === 'foo')
