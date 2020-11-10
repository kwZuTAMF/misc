import getStringTag from './getStringTag'
import isObject from './isObject'

// https://tc39.es/ecma262/#sec-isregexp
const isRegExp = value => {
  if (isObject(value)) {
    let matcher = value[Symbol.match]
    if (matcher !== undefined) {
      return Boolean(matcher)
    } else {
      return getStringTag(value) === 'RegExp'
    }
  }
  return false
}

export default isRegExp
