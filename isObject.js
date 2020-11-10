const isObject = value =>
  !!value && (typeof value === 'object' || typeof value === 'function')

export default isObject
