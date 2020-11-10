// https://tc39.es/ecma262/#sec-object.prototype.tostring
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
// https://tc39.es/ecma262/#sec-bigint.prototype-@@tostringtag
// https://tc39.es/ecma262/#sec-math-@@tostringtag
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%-@@tostringtag
// https://tc39.es/ecma262/#sec-%regexpstringiteratorprototype%-@@tostringtag
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%-@@tostringtag
// https://tc39.es/ecma262/#sec-get-%typedarray%.prototype-@@tostringtag
// https://tc39.es/ecma262/#sec-map.prototype-@@tostringtag
// https://tc39.es/ecma262/#sec-%mapiteratorprototype%-@@tostringtag
// https://tc39.es/ecma262/#sec-set.prototype-@@tostringtag
// https://tc39.es/ecma262/#sec-%setiteratorprototype%-@@tostringtag
// https://tc39.es/ecma262/#sec-weakmap.prototype-@@tostringtag
// https://tc39.es/ecma262/#sec-weakset.prototype-@@tostringtag
// https://tc39.es/ecma262/#sec-arraybuffer.prototype-@@tostringtag
// https://tc39.es/ecma262/#sec-sharedarraybuffer.prototype.toString
// https://tc39.es/ecma262/#sec-dataview.prototype-@@tostringtag
// https://tc39.es/ecma262/#sec-atomics-@@tostringtag
// https://tc39.es/ecma262/#sec-json-@@tostringtag
// https://tc39.es/ecma262/#sec-generatorfunction.prototype-@@tostringtag
// https://tc39.es/ecma262/#sec-asyncgeneratorfunction-prototype-tostringtag
// https://tc39.es/ecma262/#sec-generator.prototype-@@tostringtag
// https://tc39.es/ecma262/#sec-asyncgenerator-prototype-tostringtag
// https://tc39.es/ecma262/#sec-promise.prototype-@@tostringtag
// https://tc39.es/ecma262/#sec-async-function-prototype-properties-toStringTag
// https://tc39.es/ecma262/#sec-@@tostringtag
const getStringTag = value => Object.prototype.toString.call(value).slice(8, -1)

export default getStringTag
