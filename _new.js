function _new (F, ...args) {
  if (
    typeof F !== 'function' ||
    !Object.prototype.hasOwnProperty.call (F, 'prototype')
  ) {
    throw new TypeError (`${F} is not a constructor`)
  }

  let proto = F.prototype
  let obj = Object.create (isObject (proto) ? proto : Object.prototype)
  let res = F.call (obj, ...args)
  return isObject (res) ? res : obj
}

function isObject (o ) {
  return !!o && (typeof o === 'object' || typeof o === 'function')
}
