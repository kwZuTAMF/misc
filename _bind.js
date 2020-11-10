Function.prototype._bind = function(thisArg, ...boundArgs) {
  let target = this

  if (typeof target !== 'function') {
    throw new TypeError('Bind must be called on a function')
  }

  let F = Object.defineProperties(
    function(...restArgs) {
      if (new.target === F) {
        // return new target(...boundArgs, ...restArgs)
        return Reflect.construct(target, boundArgs.concat(restArgs))
      } else if (
        target.name.startsWith('bound ') ||
        Function.prototype.toString.call(target).includes('=>')
      ) {
        return target(...boundArgs, ...restArgs)
      } else {
        // return target.call(thisArg, ...boundArgs, ...restArgs)
        return Reflect.apply(target, thisArg, boundArgs.concat(restArgs))
      }
    },
    {
      length: { value: Math.max(0, target.length - boundArgs.length) },
      name: { value: `bound ${target.name}` }
    }
  )
  return F
}

function add(a, b, c) {
  console.log(a, b, c)
  console.log(this)
  return this
}

let o = { a: 42 }

let b = add._bind(o, 1)
console.assert(b.name === 'bound add')
console.assert(b.length === 2)
console.assert(b(2, 3) === o)

let x = { x: 42 }

b = b._bind(x, 2)
console.assert(b.name === 'bound bound add')
console.assert(b.length === 1)
console.assert(b(3) === o)

new b(3)
