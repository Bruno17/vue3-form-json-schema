var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { h, resolveComponent } from "vue";
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
var nativeObjectToString$1 = objectProto$f.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$e = Object.prototype;
var nativeObjectToString = objectProto$e.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$3 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var isArray = Array.isArray;
var isArray$1 = isArray;
var INFINITY$1 = 1 / 0;
var symbolProto$2 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
function isObject(value) {
  var type2 = typeof value;
  return value != null && (type2 == "object" || type2 == "function");
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$d = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern2 = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern2.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap = getNative(root$1, "WeakMap");
var WeakMap$1 = WeakMap;
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty$1 = defineProperty;
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var baseSetToString$1 = baseSetToString;
var setToString = shortOut(baseSetToString$1);
var setToString$1 = setToString;
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type2 = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$a.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props2, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props2.length;
  while (++index < length) {
    var key = props2[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function baseRest(func, start) {
  return setToString$1(overRest(func, start, identity), func + "");
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type2 = typeof index;
  if (type2 == "number" ? isArrayLike(object) && isIndex(index, object.length) : type2 == "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var objectProto$b = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$b;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$3 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
var objectProto$a = Object.prototype;
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types2 = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types2) {
      return types2;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$6.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type2 = typeof value;
  if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function hashGet(key) {
  var data2 = this.__data__;
  if (nativeCreate$1) {
    var result = data2[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$5.call(data2, key) ? data2[key] : void 0;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function hashHas(key) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty$4.call(data2, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data2 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data2[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data2 = this.__data__, index = assocIndexOf(data2, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data2 = this.__data__, index = assocIndexOf(data2, key);
  return index < 0 ? void 0 : data2[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data2 = this.__data__, index = assocIndexOf(data2, key);
  if (index < 0) {
    ++this.size;
    data2.push([key, value]);
  } else {
    data2[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
var Map$2 = Map$1;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type2 = typeof value;
  return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data2 = map.__data__;
  return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data2 = getMapData(this, key), size = data2.size;
  data2.set(key, value);
  this.size += data2.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath$1 = stringToPath;
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
var objectTag$3 = "[object Object]";
var funcProto = Function.prototype, objectProto$4 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$3.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data2 = this.__data__, result = data2["delete"](key);
  this.size = data2.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data2 = this.__data__;
  if (data2 instanceof ListCache) {
    var pairs = data2.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data2.size;
      return this;
    }
    data2 = this.__data__ = new MapCache(pairs);
  }
  data2.set(key, value);
  this.size = data2.size;
  return this;
}
function Stack(entries) {
  var data2 = this.__data__ = new ListCache(entries);
  this.size = data2.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$3 = Object.prototype;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var getSymbols$1 = getSymbols;
function copySymbols(source, object) {
  return copyObject(source, getSymbols$1(source), object);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
var getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
var Set$2 = Set$1;
var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$2 && getTag(new Map$2()) != mapTag$4 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$2.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array2 = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array2;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);
    case dataViewTag$2:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);
    case regexpTag$2:
      return cloneRegExp(object);
    case setTag$3:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
var mapTag$2 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$2;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$2 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$2;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props2 = isArr ? void 0 : keysFunc(value);
  arrayEach(props2 || value, function(subValue, key2) {
    if (props2) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set2) {
  var index = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props2 = keysFunc(object), length = props2.length;
    while (length--) {
      var key = props2[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
var baseFor$1 = baseFor;
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$1(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$1(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor$1(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var merge$1 = merge;
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
const computed$1 = {
  vfjsComputedFieldHasErrors() {
    const { vfjsFieldErrors } = this.vfjsFieldState;
    return vfjsFieldErrors && vfjsFieldErrors.length > 0;
  },
  vfjsComputedShowFieldErrors() {
    const { vfjsFieldDirty, vfjsFieldBlur } = this.vfjsFieldState;
    const { showValidationErrors } = this.vfjsOptions;
    return vfjsFieldDirty && vfjsFieldBlur || showValidationErrors;
  },
  vfjsComputedFieldErrorOptions() {
    if (this.vfjsComputedShowFieldErrors && this.vfjsComputedFieldHasErrors) {
      return this.vfjsFieldErrorOptions;
    }
    return {};
  },
  vfjsComputedFieldAttrs() {
    const required2 = this.vfjsFieldHelperAttrsRequired();
    const value = this.vfjsFieldHelperAttrsValue();
    const checked = this.vfjsFieldHelperAttrsChecked();
    const attrs = {};
    if (typeof required2 !== "undefined") {
      attrs.required = required2;
    }
    if (typeof value !== "undefined") {
      attrs.value = value;
    }
    if (typeof checked !== "undefined") {
      attrs.checked = checked;
    }
    return attrs;
  },
  vfjsComputedFieldDomProps() {
    const innerHTML = this.vfjsFieldHelperDomPropsInnerHTML();
    const value = this.vfjsFieldHelperDomPropsValue();
    const checked = this.vfjsFieldHelperDomPropsChecked();
    const domProps = {};
    if (typeof innerHTML !== "undefined") {
      domProps.innerHTML = innerHTML;
    }
    if (typeof value !== "undefined") {
      domProps.value = value;
    }
    if (typeof checked !== "undefined") {
      domProps.checked = checked;
    }
    return domProps;
  },
  vfjsComputedFieldProps() {
    const required2 = this.vfjsFieldHelperPropsRequired();
    const props2 = {};
    if (typeof required2 !== "undefined") {
      props2.required = required2;
    }
    return props2;
  },
  vfjsComputedFieldOptions() {
    return __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, this.vfjsComputedFieldAttrs), this.vfjsComputedFieldDomProps), this.vfjsComputedFieldProps), {
      key: this.vfjsFieldOptions.key || this.vfjsFieldId,
      directives: this.vfjsFieldOptions.directives
    });
  },
  vfjsComputedMergedFieldOptions() {
    return merge$1({}, this.vfjsComputedFieldErrorOptions, this.vfjsComputedFieldOptions);
  }
};
const VFJS_EVENT_FIELD_STATE_UPDATE = "VFJS_EVENT_FIELD_STATE_UPDATE";
const VFJS_EVENT_FIELD_MODEL_VALIDATE = "VFJS_EVENT_FIELD_MODEL_VALIDATE";
const VFJS_EVENT_FIELD_MODEL_UPDATE = "VFJS_EVENT_FIELD_MODEL_UPDATE";
const VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN = "VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN";
const VFJS_EVENT_FIELD_MODELS_VALIDATE = "VFJS_EVENT_FIELD_MODELS_VALIDATE";
const VFJS_EVENT_MODEL_UPDATE = "VFJS_EVENT_MODEL_UPDATE";
const VFJS_EVENT_MODEL_UPDATED = "VFJS_EVENT_MODEL_UPDATED";
const VFJS_EVENT_MODEL_VALIDATE = "VFJS_EVENT_MODEL_VALIDATE";
const VFJS_EVENT_STATE_UPDATE = "VFJS_EVENT_STATE_UPDATE";
const VFJS_EVENT_STATE_UPDATED = "VFJS_EVENT_STATE_UPDATED";
const VFJS_EVENT_UI_FIELDS_UPDATE = "VFJS_EVENT_UI_FIELDS_UPDATE";
const VFJS_EXTERNAL_COMPONENTS_PROP = "components";
const VFJS_EXTERNAL_EVENT_CHANGE = "update:modelValue";
const VFJS_EXTERNAL_EVENT_STATE_CHANGE = "update:state";
const VFJS_EXTERNAL_EVENT_VALIDATED = "update:validated";
const VFJS_EXTERNAL_ID_PROP = "id";
const VFJS_EXTERNAL_MODEL_PROP = "modelValue";
const VFJS_EXTERNAL_OPTIONS_PROP = "options";
const VFJS_EXTERNAL_SCHEMA_PROP = "schema";
const VFJS_EXTERNAL_SCHEMAS_PROP = "schemas";
const VFJS_EXTERNAL_TAG_PROP = "tag";
const VFJS_EXTERNAL_UI_SCHEMA_PROP = "uiSchema";
const emits = [
  VFJS_EXTERNAL_EVENT_CHANGE,
  VFJS_EXTERNAL_EVENT_STATE_CHANGE,
  VFJS_EXTERNAL_EVENT_VALIDATED,
  VFJS_EXTERNAL_MODEL_PROP
];
function getVfjsChildren() {
  return this.$slots;
}
function getVfjsAttributes() {
  return this.getVfjsFieldAttributes(this.vfjsFieldOptions, this.vfjsComputedMergedFieldOptions);
}
function vfjsHelperFlattenVue2Properties(fieldOptions) {
  let flattenedFieldOptions = __spreadValues({}, fieldOptions);
  if ("attrs" in fieldOptions) {
    delete flattenedFieldOptions.attrs;
    flattenedFieldOptions = __spreadValues(__spreadValues({}, flattenedFieldOptions), fieldOptions.attrs);
  }
  if ("domProps" in fieldOptions) {
    delete flattenedFieldOptions.domProps;
    flattenedFieldOptions = __spreadValues(__spreadValues({}, flattenedFieldOptions), fieldOptions.domProps);
  }
  if ("props" in fieldOptions) {
    delete flattenedFieldOptions.props;
    flattenedFieldOptions = __spreadValues(__spreadValues({}, flattenedFieldOptions), fieldOptions.props);
  }
  return flattenedFieldOptions;
}
function getVfjsFieldAttributes(_a = {}, _c = {}) {
  var _b = _a, {
    class: optionsClass,
    on: optionsOn,
    nativeOn: optionsNativeOn
  } = _b, options = __objRest(_b, [
    "class",
    "on",
    "nativeOn"
  ]);
  var _d = _c, {
    class: defaultOptionsClass,
    on: defaultOn,
    nativeOn: defaultNativeOn
  } = _d, defaultOptions = __objRest(_d, [
    "class",
    "on",
    "nativeOn"
  ]);
  if (!options) {
    return {};
  }
  const classFormatted = merge$1({}, this.vfjsFieldHelperFormatClasses(optionsClass), this.vfjsFieldHelperFormatClasses(defaultOptionsClass));
  const onFormatted = merge$1(this.vfjsFieldHelperFormatEvents(optionsOn), this.vfjsFieldHelperFormatEvents(defaultOn));
  const nativeOnFormatted = merge$1(this.vfjsFieldHelperFormatEvents(optionsNativeOn), this.vfjsFieldHelperFormatEvents(defaultNativeOn));
  const computedOptions = __spreadValues(__spreadValues({
    class: classFormatted
  }, onFormatted), nativeOnFormatted);
  const value = this.vfjsInternalModel || this.vfjsFieldValueModel || this.vfjsFieldModel;
  const valueProp = {
    [this.vfjsFieldValueProp]: value
  };
  const allAttributes = merge$1({}, defaultOptions, options, computedOptions, valueProp);
  const flattenedAttributes = vfjsHelperFlattenVue2Properties(allAttributes);
  return flattenedAttributes;
}
var getters$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getVfjsChildren,
  getVfjsAttributes,
  getVfjsFieldAttributes
}, Symbol.toStringTag, { value: "Module" }));
function vfjsFieldHelperAddListener(el, event) {
  el.addEventListener(event, this.vfjsFieldHelperStateEventHandler);
}
function vfjsFieldHelperAttrsChecked() {
  const { checked = [] } = this.vfjsOptions.componentProperties.attrs;
  if (this.vfjsFieldHelperComponentMatchesComponentProperties(checked)) {
    if (this.vfjsFieldOptions.attrs) {
      if (typeof this.vfjsFieldModel !== "undefined" && this.vfjsFieldModel === this.vfjsFieldOptions.attrs.value) {
        return true;
      }
      return this.vfjsFieldOptions.attrs.checked;
    }
  }
  return void 0;
}
function vfjsFieldHelperAttrsRequired() {
  const { required: required2 = [] } = this.vfjsOptions.componentProperties.attrs;
  if (this.vfjsFieldHelperComponentMatchesComponentProperties(required2)) {
    return this.vfjsFieldRequired;
  }
  return void 0;
}
function vfjsFieldHelperAttrsValue() {
  const { value = [] } = this.vfjsOptions.componentProperties.attrs;
  if (this.vfjsFieldHelperComponentMatchesComponentProperties(value)) {
    if (this.vfjsFieldModel) {
      return this.vfjsFieldModel;
    }
    return this.vfjsFieldOptions.attrs && this.vfjsFieldOptions.attrs.value;
  }
  return void 0;
}
function vfjsFieldHelperComponentMatchesComponentProperties(componentProperties) {
  return componentProperties.some((componentProperty) => {
    if (typeof componentProperty === "string") {
      return this.vfjsComponent === componentProperty;
    }
    if (typeof componentProperty === "object") {
      const _a = componentProperty, { component } = _a, properties2 = __objRest(_a, ["component"]);
      if (this.vfjsComponent === component) {
        return Object.keys(properties2).every((property) => {
          if (property in this.vfjsFieldOptions) {
            const keys2 = properties2[property];
            return Object.keys(keys2).every((key) => this.vfjsFieldOptions[property][key] === keys2[key]);
          }
          return false;
        });
      }
    }
    return false;
  });
}
function vfjsFieldHelperDomPropsChecked() {
  const { checked = [] } = this.vfjsOptions.componentProperties.domProps;
  if (this.vfjsFieldHelperComponentMatchesComponentProperties(checked)) {
    if (this.vfjsFieldOptions.domProps) {
      if (this.vfjsFieldModel === this.vfjsFieldOptions.domProps.value) {
        return true;
      }
      return this.vfjsFieldOptions.domProps.checked;
    }
  }
  return void 0;
}
function vfjsFieldHelperDomPropsInnerHTML() {
  const { innerHTML = [] } = this.vfjsOptions.componentProperties.domProps;
  if (this.vfjsFieldHelperComponentMatchesComponentProperties(innerHTML)) {
    if (this.vfjsFieldModel) {
      return this.vfjsFieldModel;
    }
    return this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.innerHTML;
  }
  return void 0;
}
function vfjsFieldHelperDomPropsValue() {
  const { value = [] } = this.vfjsOptions.componentProperties.domProps;
  if (this.vfjsFieldHelperComponentMatchesComponentProperties(value)) {
    if (this.vfjsFieldModel) {
      return this.vfjsFieldModel;
    }
    return this.vfjsFieldOptions.domProps && this.vfjsFieldOptions.domProps.value;
  }
  return void 0;
}
function vfjsFieldHelperEventHandler(key, cb) {
  const vfjsFieldEventHandler = (...args) => {
    const [event] = args;
    let value = event;
    if (typeof cb === "function") {
      value = cb(...args);
    } else if (event instanceof Event) {
      if (event.target && typeof event.target[this.vfjsFieldEventProp] !== "undefined") {
        value = event.target[this.vfjsFieldEventProp];
      }
    }
    if (this.vfjsFieldHelperInternalModelEnabledForEvent(key)) {
      this.vfjsInternalModel = value;
    }
    return this.setVfjsFieldModel(value);
  };
  return vfjsFieldEventHandler;
}
function vfjsFieldHelperFormatClasses(classes) {
  if (!classes) {
    return {};
  }
  if (typeof classes === "string") {
    return {
      [classes]: true
    };
  }
  if (Array.isArray(classes)) {
    return classes.reduce((classesObj, key) => __spreadProps(__spreadValues({}, classesObj), {
      [key]: true
    }), {});
  }
  if (typeof classes === "string") {
    if (classes.indexOf(",") !== -1) {
      return classes.split(",");
    }
    if (classes.indexOf(" ") !== -1) {
      return classes.split(" ");
    }
  }
  return classes;
}
function vfjsFieldHelperFormatEvents(events) {
  if (!events) {
    return {};
  }
  let eventsObj = events;
  if (Array.isArray(events)) {
    eventsObj = events.reduce((obj, event) => __spreadProps(__spreadValues({}, obj), { [event]: true }), {});
  } else if (typeof events === "string") {
    eventsObj = { [events]: true };
  }
  return this.vfjsFieldHelperFormatEventsReducer(eventsObj);
}
function vfjsFieldHelperFormatEventsReducer(events = {}) {
  return Object.keys(events).reduce((formattedEvents, key) => {
    const rest = key.substring(1);
    const firstLetter = key[0].toUpperCase();
    const property = `on${firstLetter}${rest}`;
    return __spreadProps(__spreadValues({}, formattedEvents), {
      [property]: this.vfjsFieldHelperEventHandler(key, events[key])
    });
  }, {});
}
function vfjsFieldHelperInternalModelEnabledForEvent(key) {
  if (this.vfjsFieldInternalModel) {
    if (Array.isArray(this.vfjsFieldInternalModel)) {
      return this.vfjsFieldInternalModel.indexOf(key) >= 0;
    }
    return this.vfjsFieldInternalModel === true;
  }
  return false;
}
function vfjsFieldHelperPropsRequired() {
  const { required: required2 = [] } = this.vfjsOptions.componentProperties;
  if (this.vfjsFieldHelperComponentMatchesComponentProperties(required2)) {
    return this.vfjsFieldRequired;
  }
  return void 0;
}
function vfjsFieldHelperRemoveListener(el, event) {
  el.removeEventListener(event, this.vfjsFieldHelperStateEventHandler);
}
function vfjsFieldHelperStateEventHandler(event) {
  if (event && event.type === "blur") {
    const initialBlur = this.vfjsFieldState.vfjsFieldBlur;
    this.setVfjsFieldState(__spreadProps(__spreadValues({}, this.vfjsFieldState), {
      vfjsFieldBlur: true
    }));
    if (!initialBlur) {
      this.vfjsBus.$emit(VFJS_EVENT_UI_FIELDS_UPDATE);
    }
  }
}
var helpers = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  vfjsFieldHelperAddListener,
  vfjsFieldHelperAttrsChecked,
  vfjsFieldHelperAttrsRequired,
  vfjsFieldHelperAttrsValue,
  vfjsFieldHelperComponentMatchesComponentProperties,
  vfjsFieldHelperDomPropsChecked,
  vfjsFieldHelperDomPropsInnerHTML,
  vfjsFieldHelperDomPropsValue,
  vfjsFieldHelperEventHandler,
  vfjsFieldHelperFormatClasses,
  vfjsFieldHelperFormatEvents,
  vfjsFieldHelperFormatEventsReducer,
  vfjsFieldHelperInternalModelEnabledForEvent,
  vfjsFieldHelperPropsRequired,
  vfjsFieldHelperRemoveListener,
  vfjsFieldHelperStateEventHandler
}, Symbol.toStringTag, { value: "Module" }));
function setModel(value) {
  this.setVfjsFieldModel(value);
}
function setState(value) {
  this.setVfjsFieldState(value);
}
function setVfjsFieldModel$1(value, key) {
  this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_UPDATE, {
    key: key || this.vfjsFieldModelKey,
    value
  });
}
function setVfjsFieldState$1(value, key) {
  this.vfjsBus.$emit(VFJS_EVENT_FIELD_STATE_UPDATE, {
    key: key || this.vfjsFieldModelKey,
    value
  });
}
var setters$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setModel,
  setState,
  setVfjsFieldModel: setVfjsFieldModel$1,
  setVfjsFieldState: setVfjsFieldState$1
}, Symbol.toStringTag, { value: "Module" }));
const methods = __spreadValues(__spreadValues(__spreadValues({}, getters$5), helpers), setters$5);
const props$1 = {
  vfjsBus: {
    type: Object,
    required: true
  },
  vfjsChildren: {
    type: Array,
    default: () => []
  },
  vfjsChildrenUiSchema: {
    type: Array,
    default: () => []
  },
  vfjsComponent: {
    type: [String, Object, Function]
  },
  vfjsFieldErrorHandler: {
    type: Boolean
  },
  vfjsFieldErrorOptions: {
    type: Object
  },
  vfjsFieldErrors: {
    type: Array
  },
  vfjsFieldEventProp: {
    type: String
  },
  vfjsFieldId: {
    type: String,
    required: true
  },
  vfjsFieldInternalModel: {
    type: [Boolean, Array],
    required: true
  },
  vfjsFieldModel: {
    type: null
  },
  vfjsFieldModelKey: {
    type: [String, Boolean],
    required: true
  },
  vfjsFieldOptions: {
    type: Object,
    required: true
  },
  vfjsFieldRequired: {
    type: Boolean,
    required: true
  },
  vfjsFieldSchema: {
    type: Object,
    required: true
  },
  vfjsFieldSchemas: {
    type: Object
  },
  vfjsFieldState: {
    type: Object,
    required: true
  },
  vfjsFieldTag: {
    type: String,
    default: "div"
  },
  vfjsFieldUiSchema: {
    type: Object,
    required: true
  },
  vfjsFieldValueProp: {
    type: String
  },
  vfjsFieldValueModel: {
    type: null
  },
  vfjsFieldValueModelKey: {
    type: [String, Boolean]
  },
  vfjsOptions: {
    type: Object,
    required: true
  },
  vfjsModel: {
    type: Object,
    required: true
  },
  vfjsState: {
    type: Object,
    required: true
  }
};
const vfjsFieldMixin = {
  data() {
    return {
      vfjsInternalModel: void 0
    };
  },
  computed: computed$1,
  props: props$1,
  emits,
  methods,
  beforeUpdate() {
    if (this.vfjsFieldInternalModel) {
      this.vfjsInternalModel = void 0;
    }
  },
  mounted() {
    this.vfjsFieldHelperAddListener(this.$el, "blur");
  },
  beforeUnmount() {
    this.vfjsFieldHelperRemoveListener(this.$el, "blur");
  }
};
const vfjsHelperCreateElement = (...args) => {
  const createElement = h || window.Vue.h || globalThis.$createElement;
  return createElement(...args);
};
const VueFormJsonSchemaFieldComponent = {
  name: "vue-form-json-schema-field-component",
  mixins: [vfjsFieldMixin],
  render() {
    return vfjsHelperCreateElement(resolveComponent(this.vfjsComponent), __spreadValues({}, this.getVfjsAttributes()), this.getVfjsChildren());
  }
};
const computed = {
  vfjsSchemaValid() {
    return this.vfjsSchema.every(this.isVfjsFieldSchemaValid);
  },
  vfjsModelValid() {
    return this.vfjsSchema.every(this.isVfjsFieldModelValid);
  }
};
const data = () => ({
  vfjsBus: {},
  vfjsEvents: [
    VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN,
    VFJS_EVENT_FIELD_MODEL_UPDATE,
    VFJS_EVENT_FIELD_MODEL_VALIDATE,
    VFJS_EVENT_FIELD_MODELS_VALIDATE,
    VFJS_EVENT_FIELD_STATE_UPDATE,
    VFJS_EVENT_MODEL_UPDATE,
    VFJS_EVENT_MODEL_UPDATED,
    VFJS_EVENT_MODEL_VALIDATE,
    VFJS_EVENT_STATE_UPDATE,
    VFJS_EVENT_STATE_UPDATED,
    VFJS_EVENT_UI_FIELDS_UPDATE
  ],
  vfjsFields: [],
  vfjsFieldsActive: [],
  vfjsFieldsActiveModels: [],
  vfjsFieldsRequired: [],
  vfjsModel: {},
  vfjsOptions: {
    ajv: {
      keywords: {},
      locale: null,
      options: {
        allErrors: true
      }
    },
    allowInvalidModel: true,
    castToSchemaType: false,
    componentProperties: {
      attrs: {
        checked: [
          {
            component: "input",
            attrs: {
              type: "checkbox"
            }
          },
          {
            component: "input",
            attrs: {
              type: "radio"
            }
          }
        ],
        required: ["input", "select", "textarea"],
        value: ["input", "option", "textarea"]
      },
      domProps: {
        checked: [
          {
            component: "input",
            attrs: {
              type: "checkbox"
            }
          },
          {
            component: "input",
            attrs: {
              type: "radio"
            }
          }
        ],
        required: ["input", "select", "textarea"],
        value: ["input", "textarea"]
      },
      props: {
        required: []
      },
      innerHTML: ["textarea"]
    },
    showValidationErrors: false,
    validate: true,
    validateOnLoad: true,
    validateOnChange: true,
    valueProp: "value",
    eventProp: "value"
  },
  vfjsSchema: {},
  vfjsState: {},
  vfjsUiSchema: []
});
function addVfjsListener(event, callback) {
  this.vfjsBus.$on(event, (value) => callback(event, value));
}
function addVfjsListeners(events = [], callback) {
  events.forEach((event) => this.addVfjsListener(event, callback));
}
function removeVfjsListener(event) {
  this.vfjsBus.$off(event);
}
function removeVfjsListeners(events = []) {
  events.forEach(this.removeVfjsListener);
}
function removeVfjsListenersAll() {
  this.vfjsBus.$off();
}
class VfjsBus {
  constructor() {
    this.events = {};
  }
  $on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
  $off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((eventCallback) => eventCallback === callback);
    }
  }
  $emit(eventName, value) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => callback(value));
    }
  }
}
function vfjsBusInitialize() {
  this.vfjsBus = new VfjsBus();
}
function vfjsEventFieldModelClearHidden() {
  const allModels = this.vfjsHelperGetFieldsWithClearOnHide(this[VFJS_EXTERNAL_UI_SCHEMA_PROP]);
  const activeModels = this.vfjsHelperGetFieldsWithClearOnHide(this.vfjsFieldsActive);
  const inactiveModels = Object.keys(allModels).reduce((models, key) => {
    if (!(key in activeModels)) {
      models[key] = allModels[key];
    }
    return models;
  }, {});
  Object.keys(inactiveModels).forEach((key) => {
    const clearModels = inactiveModels[key];
    if (Array.isArray(clearModels)) {
      clearModels.forEach((clearModel) => {
        const newModel = this.vfjsHelperApplyFieldModel(typeof clearModel === "string" ? clearModel : key, void 0);
        this.setVfjsModel(newModel, true);
      });
    } else {
      const newModel = this.vfjsHelperApplyFieldModel(typeof clearModels === "string" ? clearModels : key, void 0);
      this.setVfjsModel(newModel, true);
    }
  });
}
function vfjsEventFieldModelValidate({ key, value, cb }) {
  const model = {};
  set(model, key, value);
  const schema = this.getVfjsValidationSchema(key, value);
  const errors2 = this.getVfjsValidationErrors(model, schema);
  if (cb && typeof cb === "function") {
    cb(errors2);
  }
}
function vfjsEventFieldModelsValidate({ vfjsModel: vfjsModel2, cb }) {
  const operations = this.vfjsFieldsActiveModels.map((key) => {
    const vfjsFieldModel = get(vfjsModel2, key);
    return new Promise((resolve2) => {
      this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_VALIDATE, {
        value: vfjsFieldModel,
        key,
        cb: (errors2) => {
          const vfjsFieldState = this.getVfjsFieldState(key);
          resolve2({
            [key]: __spreadProps(__spreadValues({}, vfjsFieldState), {
              vfjsFieldErrors: errors2
            })
          });
        }
      });
    });
  });
  Promise.all(operations).then((results) => {
    const newVfjsState = results.reduce((vfjsState2, vfjsFieldState) => __spreadValues(__spreadValues({}, vfjsState2), vfjsFieldState), {});
    if (cb && typeof cb === "function") {
      cb(newVfjsState);
    }
  });
}
function vfjsEventFieldModelUpdate({ key, value: originalValue, cb }) {
  let value = originalValue;
  const { castToSchemaType = false } = this.vfjsOptions;
  if (castToSchemaType) {
    value = this.vfjsHelperCastValueToSchemaType(key, value);
  }
  const vfjsModel2 = this.vfjsHelperApplyFieldModel(key, value);
  this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
    vfjsModel: vfjsModel2,
    cb: (newVfjsState) => {
      const vfjsFieldModel = this.getVfjsFieldModel(key);
      if (!isEqual(vfjsFieldModel, value)) {
        set(newVfjsState, `${key}.vfjsFieldDirty`, true);
      }
      const vfjsFieldState = get(newVfjsState, `${key}`);
      const { vfjsFieldErrors = [] } = vfjsFieldState;
      this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
        value: newVfjsState,
        cb: () => {
          if (vfjsFieldErrors.length === 0 || this.vfjsOptions.allowInvalidModel) {
            this.setVfjsModel(vfjsModel2);
          }
          if (cb && typeof cb === "function") {
            cb();
          }
        }
      });
    }
  });
}
function vfjsEventFieldStateUpdate({ key, value, cb }) {
  const newVfjsState = __spreadProps(__spreadValues({}, this.getVfjsState()), { [key]: value });
  this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
    value: newVfjsState,
    cb
  });
}
function vfjsEventModelValidate({ vfjsModel: vfjsModel2, cb }) {
  this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODELS_VALIDATE, {
    vfjsModel: vfjsModel2,
    cb: (vfjsFieldStates) => {
      const vfjsErrors = this.getVfjsValidationErrors(vfjsModel2);
      const vfjsFieldErrors = Object.keys(vfjsFieldStates).map((key) => vfjsFieldStates[key]).reduce((errors2, vfjsFieldState) => [
        ...errors2,
        ...vfjsFieldState.vfjsFieldErrors
      ], []);
      const vfjsErrorsFiltered = [...vfjsErrors, ...vfjsFieldErrors].reduce((array, item) => {
        const exists = array.some((arrayItem) => isEqual(item, arrayItem));
        if (!exists) {
          array.push(item);
        }
        return array;
      }, []);
      const vfjsState2 = __spreadProps(__spreadValues(__spreadValues({}, this.getVfjsState()), vfjsFieldStates), {
        vfjsErrors: vfjsErrorsFiltered
      });
      if (cb && typeof cb === "function") {
        cb(vfjsState2);
      }
    }
  });
}
function vfjsEventUiFieldsUpdate() {
  this.setVfjsUiFieldsActive();
}
function vfjsEventModelUpdated() {
  this.vfjsBus.$emit(VFJS_EVENT_UI_FIELDS_UPDATE);
  this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN);
  this.$emit(VFJS_EXTERNAL_EVENT_CHANGE, this.getVfjsModel());
}
function vfjsEventStateUpdate({ value, cb }) {
  this.setVfjsState(value);
  if (cb && typeof cb === "function") {
    cb();
  }
}
function vfjsEventStateUpdated({ cb }) {
  const vfjsState2 = __spreadValues({
    vfjsErrors: [],
    vfjsFieldsActive: this.vfjsFieldsActive,
    vfjsFieldsActiveModels: this.vfjsFieldsActiveModels
  }, this.getVfjsState());
  this.$emit(VFJS_EXTERNAL_EVENT_STATE_CHANGE, vfjsState2);
  this.$emit(VFJS_EXTERNAL_EVENT_VALIDATED, vfjsState2.vfjsErrors.length === 0);
  if (cb && typeof cb === "function") {
    cb();
  }
}
const vfjsBusActions = {
  [VFJS_EVENT_FIELD_MODEL_CLEAR_HIDDEN]: vfjsEventFieldModelClearHidden,
  [VFJS_EVENT_FIELD_MODEL_VALIDATE]: vfjsEventFieldModelValidate,
  [VFJS_EVENT_FIELD_MODELS_VALIDATE]: vfjsEventFieldModelsValidate,
  [VFJS_EVENT_FIELD_MODEL_UPDATE]: vfjsEventFieldModelUpdate,
  [VFJS_EVENT_FIELD_STATE_UPDATE]: vfjsEventFieldStateUpdate,
  [VFJS_EVENT_MODEL_VALIDATE]: vfjsEventModelValidate,
  [VFJS_EVENT_UI_FIELDS_UPDATE]: vfjsEventUiFieldsUpdate,
  [VFJS_EVENT_MODEL_UPDATED]: vfjsEventModelUpdated,
  [VFJS_EVENT_STATE_UPDATE]: vfjsEventStateUpdate,
  [VFJS_EVENT_STATE_UPDATED]: vfjsEventStateUpdated
};
function vfjsBusEventHandler(event, payload) {
  if (event && event in vfjsBusActions) {
    vfjsBusActions[event].call(this, payload);
  }
}
const vfjsBus = {
  addVfjsListener,
  addVfjsListeners,
  removeVfjsListener,
  removeVfjsListeners,
  removeVfjsListenersAll,
  vfjsBusInitialize,
  vfjsBusEventHandler
};
function vfjsHelperApplyFieldModel(key, value) {
  const vfjsModel2 = this.getVfjsModel();
  const newVfjsModel = cloneDeep(vfjsModel2);
  set(newVfjsModel, key, value);
  return newVfjsModel;
}
function vfjsHelperCastValueToSchemaType(key, value) {
  if (typeof value !== "undefined") {
    const schema = this.getVfjsSchema(key);
    if (!schema) {
      return value;
    }
    if (schema.type === "number") {
      return Number(value);
    }
    if (schema.type === "integer") {
      return parseInt(value, 10);
    }
    if (schema.type === "boolean") {
      if (value === "true" || value === "false" || value === "on") {
        return value === "true" || value === "on";
      }
    }
  }
  return value;
}
function vfjsHelperChildArrayMapper(_e, parentModel, index) {
  var _f = _e, { model, children = [] } = _f, child = __objRest(_f, ["model", "children"]);
  return __spreadProps(__spreadValues({}, child), {
    model: this.vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index),
    children: this.vfjsHelperChildArrayReducerMapper(parentModel, children, index)
  });
}
function vfjsHelperChildArrayReducerMapper(model, children = [], index) {
  return children.reduce((allChildren, child) => [
    ...allChildren,
    this.vfjsHelperChildArrayMapper(child, model, index)
  ], []);
}
function vfjsHelperCreateComponent({ children = [], component, props: props2 }) {
  const vfjsComponent = this.vfjsComponents[component] || component;
  if (!props2.vfjsFieldModelKey) {
    return vfjsHelperCreateElement(vfjsComponent, __spreadValues({
      key: props2.vfjsFieldId
    }, this.vfjsHelperFlattenVue2Properties(props2.vfjsFieldOptions)), {
      default: () => children
    });
  }
  const { slot } = props2.vfjsFieldOptions;
  return vfjsHelperCreateElement(VueFormJsonSchemaFieldComponent, __spreadValues({
    key: `${props2.key || props2.vfjsFieldId}-wrapper`,
    slot,
    vfjsComponent
  }, props2), {
    default: () => children
  });
}
function vfjsHelperCreateField(vfjsFieldUiSchema) {
  const {
    component,
    children = [],
    id: vfjsFieldId,
    errorHandler: vfjsFieldErrorHandler,
    errorOptions: vfjsFieldErrorOptions = {},
    eventProp: vfjsFieldEventProp = this.vfjsOptions.eventProp,
    fieldOptions: vfjsFieldOptions = {},
    model: vfjsFieldModelKey = "",
    required: vfjsFieldRequired = false,
    valueProp: vfjsFieldValueProp = this.vfjsOptions.valueProp,
    valueModel: vfjsFieldValueModelKey,
    internalModel: vfjsFieldInternalModel = false
  } = vfjsFieldUiSchema;
  const vfjsFieldSchema = this.getVfjsFieldSchema(vfjsFieldModelKey) || {};
  const vfjsFieldSchemas = this.schemas;
  const vfjsFieldModel = this.getVfjsFieldModel(vfjsFieldModelKey);
  const vfjsFieldState = this.getVfjsFieldState(vfjsFieldModelKey) || {};
  const vfjsModel2 = this.getVfjsModel();
  const vfjsState2 = this.getVfjsState();
  const vfjsFieldValueModel = this.getVfjsFieldValueModel(vfjsFieldValueModelKey);
  const { vfjsFieldErrors = [] } = vfjsFieldState;
  const { domProps } = vfjsFieldOptions;
  const generateErrorsAsChildren = vfjsFieldErrorHandler && vfjsFieldErrors.length > 0 && (!domProps || !domProps.innerHTML) && children.length === 0;
  const vfjsChildren = generateErrorsAsChildren ? this.vfjsHelperGetErrors(vfjsFieldErrors, vfjsFieldId) : children.map(this.vfjsHelperCreateField);
  const props2 = {
    vfjsBus: this.vfjsBus,
    vfjsChildrenUiSchema: children,
    vfjsOptions: this.vfjsOptions,
    vfjsChildren,
    vfjsFieldErrorHandler,
    vfjsFieldErrorOptions,
    vfjsFieldErrors,
    vfjsFieldEventProp,
    vfjsFieldId,
    vfjsFieldInternalModel,
    vfjsFieldModel,
    vfjsFieldModelKey,
    vfjsFieldOptions,
    vfjsFieldRequired,
    vfjsFieldSchema,
    vfjsFieldSchemas,
    vfjsFieldState,
    vfjsFieldUiSchema,
    vfjsFieldValueModel,
    vfjsFieldValueModelKey,
    vfjsFieldValueProp,
    vfjsModel: vfjsModel2,
    vfjsState: vfjsState2
  };
  return this.vfjsHelperCreateComponent({
    children: vfjsChildren,
    component,
    props: props2
  });
}
function vfjsHelperFieldDynamicProperties(_g) {
  var _h = _g, { dynamicOptions } = _h, field = __objRest(_h, ["dynamicOptions"]);
  if (!dynamicOptions) {
    return null;
  }
  if (Array.isArray(dynamicOptions)) {
    return dynamicOptions.reduce((properties2, { schema: schema2, model: model2, options: options2 }) => {
      if (this.vfjsHelperSchemaHasErrors(schema2, model2)) {
        return merge$1(properties2, options2);
      }
      return properties2;
    }, {});
  }
  const { schema, model, options } = dynamicOptions;
  if (this.vfjsHelperSchemaHasErrors(schema, model)) {
    return options;
  }
  return null;
}
function vfjsHelperFieldIsArray(key) {
  if (!key) {
    return false;
  }
  const schema = this.getVfjsFieldSchema(key);
  if (schema) {
    return Array.isArray(schema.items);
  }
  return false;
}
function vfjsHelperFieldIsRequired(model) {
  if (model) {
    return this.vfjsFieldsRequired.indexOf(model) !== -1;
  }
  return false;
}
function vfjsHelperGenerateField(field, parentId) {
  if (!field) {
    return false;
  }
  const { children = [] } = field;
  return __spreadProps(__spreadValues({}, field), {
    id: parentId,
    children: children.map((child, i) => this.vfjsHelperGenerateField(child, `${parentId}-${i}`))
  });
}
function vfjsHelperGetChildArrayModelAtIndex(model, parentModel, index) {
  const relativeModel = this.vfjsHelperGetRelativeModel(model, parentModel);
  if (relativeModel) {
    return `${parentModel}.${index}.${relativeModel}`;
  }
  return model;
}
function vfjsHelperGetErrors(errors2 = [], id2) {
  return errors2.map((error2, index) => this.vfjsHelperCreateField({
    id: `${id2}-error-${index}`,
    component: "div",
    fieldOptions: {
      class: ["vfjs-error", "vfjs-default-error-handler"],
      domProps: {
        innerHTML: error2.message
      }
    }
  }));
}
function vfjsHelperGetFieldsModels(fields, fieldModels = []) {
  return fields.reduce((models, { children = [], model }) => {
    if (model) {
      if (models.indexOf(model) === -1) {
        models.push(model);
      }
    }
    return this.vfjsHelperGetFieldsModels(children, models);
  }, fieldModels);
}
function vfjsHelperGetFieldsWithClearOnHide(fields = []) {
  return fields.reduce((models, { children = [], displayOptions = {}, model }) => {
    if (displayOptions.clearOnHide) {
      if (model) {
        models[model] = displayOptions.clearOnHide;
      } else if (!model && typeof displayOptions.clearOnHide === "string") {
        models[displayOptions.clearOnHide] = displayOptions.clearOnHide;
      }
    }
    return __spreadValues(__spreadValues({}, models), this.vfjsHelperGetFieldsWithClearOnHide(children));
  }, {});
}
function vfjsHelperGetRelativeModel(model, parentModel) {
  if (model) {
    return String(model).substring(parentModel.length + 1);
  }
  return model;
}
function vfjsHelperSchemaHasErrors(schema, model) {
  const value = typeof model === "undefined" ? this.getVfjsModel() : this.getVfjsFieldModel(model);
  this.ajv.validate(schema, value);
  const oldErrors = this.ajv.errors ? this.ajv.errors : [];
  return oldErrors.length === 0;
}
const vfjsHelpers = {
  vfjsHelperApplyFieldModel,
  vfjsHelperCastValueToSchemaType,
  vfjsHelperChildArrayMapper,
  vfjsHelperChildArrayReducerMapper,
  vfjsHelperCreateComponent,
  vfjsHelperCreateElement,
  vfjsHelperCreateField,
  vfjsHelperFieldDynamicProperties,
  vfjsHelperFieldIsArray,
  vfjsHelperFieldIsRequired,
  vfjsHelperFlattenVue2Properties,
  vfjsHelperGenerateField,
  vfjsHelperGetChildArrayModelAtIndex,
  vfjsHelperGetErrors,
  vfjsHelperGetFieldsModels,
  vfjsHelperGetFieldsWithClearOnHide,
  vfjsHelperGetRelativeModel,
  vfjsHelperSchemaHasErrors
};
function vfjsInitialize() {
  this.setVfjsSchema(this[VFJS_EXTERNAL_SCHEMA_PROP], true);
  this.vfjsOptions = __spreadValues(__spreadValues({}, this.vfjsOptions), this[VFJS_EXTERNAL_OPTIONS_PROP]);
  this.vfjsComponents = this[VFJS_EXTERNAL_COMPONENTS_PROP];
  this.vfjsBusInitialize();
  this.addVfjsListeners(this.vfjsEvents, this.vfjsBusEventHandler);
  this.setVfjsModel(this[VFJS_EXTERNAL_MODEL_PROP], true);
  this.vfjsValidationInitialize();
  if (this.vfjsOptions.validate && this.vfjsOptions.validateOnLoad) {
    const vfjsModel2 = this.getVfjsModel();
    this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
      vfjsModel: vfjsModel2,
      cb: (vfjsState2) => {
        this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
          value: vfjsState2,
          cb: () => {
            this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, {
              cb: () => {
                this.setVfjsUiSchema(this[VFJS_EXTERNAL_UI_SCHEMA_PROP]);
              }
            });
          }
        });
      }
    });
  } else {
    this.setVfjsUiSchema(this[VFJS_EXTERNAL_UI_SCHEMA_PROP]);
  }
}
function vfjsDestroy() {
  this.vfjsEvents.forEach((event) => this.removeVfjsListener(event));
}
const vfjsLifecycle = {
  vfjsInitialize,
  vfjsDestroy
};
function getVfjsFieldModel(key) {
  if (key) {
    return this.getVfjsModel(key);
  }
  return this.vfjsFieldModelKey ? this.getVfjsModel(this.vfjsFieldModelKey) : null;
}
function getVfjsFieldValueModel(key) {
  if (typeof key === "string") {
    return this.getVfjsFieldModel(key);
  }
  if (key === true) {
    return this.getVfjsModel();
  }
  return void 0;
}
function getVfjsModel(key) {
  if (!key || key === true) {
    return this.vfjsModel;
  }
  return get(this.vfjsModel, key);
}
var getters$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getVfjsFieldModel,
  getVfjsFieldValueModel,
  getVfjsModel
}, Symbol.toStringTag, { value: "Module" }));
function setVfjsFieldModel(value, key) {
  this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_UPDATE, {
    key: key || this.vfjsFieldModelKey,
    value
  });
}
function setVfjsModel(model, silent = false) {
  if (!isEqual(model, this.vfjsModel)) {
    this.vfjsModel = cloneDeep(model);
    if (!silent) {
      this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
        vfjsModel: this.vfjsModel,
        cb: (newVfjsState) => {
          this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
            value: newVfjsState,
            cb: () => {
              this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, {
                cb: () => {
                  this.vfjsBus.$emit(VFJS_EVENT_MODEL_UPDATED);
                }
              });
            }
          });
        }
      });
    }
  }
}
var setters$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setVfjsFieldModel,
  setVfjsModel
}, Symbol.toStringTag, { value: "Module" }));
const vfjsModel = __spreadValues(__spreadValues({}, getters$4), setters$4);
function getVfjsFieldState(key) {
  if (key) {
    return this.getVfjsState(key);
  }
  return this.vfjsFieldModelKey ? this.getVfjsState(this.vfjsFieldModelKey) : null;
}
function getVfjsState(key) {
  if (key) {
    return get(this.vfjsState, key);
  }
  return this.vfjsState;
}
var getters$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getVfjsFieldState,
  getVfjsState
}, Symbol.toStringTag, { value: "Module" }));
function setVfjsFieldState(value, key) {
  this.vfjsBus.$emit(VFJS_EVENT_FIELD_STATE_UPDATE, {
    key: key || this.vfjsFieldModelKey,
    value
  });
}
function setVfjsState(newState) {
  const state = this.getVfjsState();
  if (!isEqual(newState, state)) {
    this.vfjsState = Object.assign({}, state, newState);
    this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, {});
  }
}
var setters$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setVfjsFieldState,
  setVfjsState
}, Symbol.toStringTag, { value: "Module" }));
const vfjsState = __spreadValues(__spreadValues({}, getters$3), setters$3);
function getVfjsFieldSchema(key) {
  if (key) {
    return this.getVfjsSchema(key);
  }
  return this.vfjsFieldModelKey ? this.getVfjsSchema(this.vfjsFieldModelKey) : null;
}
function getVfjsSchema(key) {
  if (key) {
    return get(this.vfjsSchema.properties, key) || this.getVfjsSchemaFallback(key);
  }
  return this.vfjsSchema;
}
function getVfjsSchemaFallback(key) {
  const keys2 = String(key).split(".");
  const schema = keys2.reduce(this.getVfjsSchemaPath, "");
  return get(this.getVfjsSchema(), schema);
}
function getVfjsSchemaPath(path, key) {
  const vfjsSchema2 = this.getVfjsSchema();
  if (!path) {
    if (vfjsSchema2.items) {
      return this.getVfjsSchemaPath("items");
    }
    return `properties.${key}`;
  }
  const schema = get(vfjsSchema2, path);
  if (schema) {
    if (schema.items instanceof Array) {
      const arrayPath = this.getVfjsSchemaPath(`${path}.items`);
      return this.getVfjsSchemaPath(`${arrayPath}.0`);
    }
    if (schema.oneOf instanceof Array) {
      const index = schema.oneOf.findIndex((optionSchema) => optionSchema.properties instanceof Object && Object.keys(optionSchema.properties).includes(key));
      return this.getVfjsSchemaPath(`${path}.oneOf.${index}`, key);
    }
    if (schema.properties instanceof Object) {
      return this.getVfjsSchemaPath(`${path}.properties`, key);
    }
  }
  if (!key) {
    return path;
  }
  return `${path}.${key}`;
}
var getters$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getVfjsFieldSchema,
  getVfjsSchema,
  getVfjsSchemaFallback,
  getVfjsSchemaPath
}, Symbol.toStringTag, { value: "Module" }));
function setVfjsSchema(value, silent = false) {
  if (!isEqual(value, this.vfjsSchema)) {
    this.vfjsSchema = cloneDeep(value);
    if (!silent) {
      if (this.vfjsOptions.validate) {
        const vfjsModel2 = this.getVfjsModel();
        this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
          vfjsModel: vfjsModel2,
          cb: (vfjsState2) => {
            this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
              value: vfjsState2,
              cb: () => {
                this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, {
                  cb: () => {
                    this.setVfjsFields();
                  }
                });
              }
            });
          }
        });
      } else {
        this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, {
          cb: () => {
            this.setVfjsFields();
          }
        });
      }
    }
  }
}
var setters$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setVfjsSchema
}, Symbol.toStringTag, { value: "Module" }));
const vfjsSchema = __spreadValues(__spreadValues({}, getters$2), setters$2);
function getVfjsFields(fields = []) {
  return fields.reduce((vfjsFields, field) => [...vfjsFields, this.vfjsHelperCreateField(field)], []);
}
function getVfjsFieldUiSchema(key) {
  return this.getVfjsUiSchema(key);
}
function getVfjsUiField(field) {
  if (this.getVfjsUiFieldVisible(field)) {
    const isArray2 = this.vfjsHelperFieldIsArray(field.model);
    const required2 = this.vfjsHelperFieldIsRequired(field.model);
    const dynamicProperties = this.vfjsHelperFieldDynamicProperties(field);
    const _a = merge$1({}, field, dynamicProperties), { children = [] } = _a, fieldProperties = __objRest(_a, ["children"]);
    if (isArray2) {
      return __spreadProps(__spreadValues({}, fieldProperties), {
        required: required2,
        children: this.getVfjsUiFieldArrayChildrenActive(field.model, children)
      });
    }
    return __spreadProps(__spreadValues({}, fieldProperties), {
      required: required2,
      children: this.getVfjsUiFieldsActive(children)
    });
  }
  return false;
}
function getVfjsUiFieldArrayChildrenActive(model, children) {
  const vfjsFieldModel = this.getVfjsFieldModel(model) || [];
  return vfjsFieldModel.map((v, i) => this.vfjsHelperChildArrayReducerMapper(model, children, i)).map(this.getVfjsUiFieldsActive);
}
function getVfjsUiFieldsActive(fields) {
  return fields.reduce((newFields, field, index) => {
    if (field) {
      const newField = this.getVfjsUiField(field);
      if (newField) {
        newFields.push(newField);
      }
    }
    return newFields;
  }, []);
}
function getVfjsUiFieldVisible(field) {
  if (field.errorHandler) {
    if (!this.vfjsOptions.showValidationErrors) {
      const state = this.getVfjsFieldState(field.model);
      if (!state || state && (!state.vfjsFieldBlur || !state.vfjsFieldDirty)) {
        return false;
      }
    }
  }
  if (!field.displayOptions) {
    return true;
  }
  const { model, schema = {} } = field.displayOptions;
  const value = typeof model === "undefined" ? this.getVfjsModel() : this.getVfjsFieldModel(model);
  this.ajv.validate(schema, value);
  const oldErrors = this.ajv.errors ? this.ajv.errors : [];
  return oldErrors.length === 0;
}
function getVfjsUiSchema(key) {
  if (key) {
    return get(this.vfjsUiSchema, key);
  }
  return this.vfjsUiSchema;
}
var getters$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getVfjsFields,
  getVfjsFieldUiSchema,
  getVfjsUiField,
  getVfjsUiFieldArrayChildrenActive,
  getVfjsUiFieldsActive,
  getVfjsUiFieldVisible,
  getVfjsUiSchema
}, Symbol.toStringTag, { value: "Module" }));
function setVfjsUiSchema(uiSchema = []) {
  const newVfjsUiSchema = uiSchema.reduce((fields, field, index) => [
    ...fields,
    this.vfjsHelperGenerateField(field, `${this.id}-${index}`)
  ], []);
  if (!isEqual(newVfjsUiSchema, this.vfjsUiSchema)) {
    this.vfjsUiSchema = cloneDeep(newVfjsUiSchema);
    this.setVfjsUiFieldsActive();
  }
}
function setVfjsUiFieldsActive() {
  this.vfjsFieldsActive = this.getVfjsUiFieldsActive(this.vfjsUiSchema);
  this.vfjsFieldsActiveModels = this.vfjsHelperGetFieldsModels(this.vfjsFieldsActive);
  if (this.vfjsOptions.validate) {
    const vfjsModel2 = this.getVfjsModel();
    this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
      vfjsModel: vfjsModel2,
      cb: (vfjsState2) => {
        this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATE, {
          value: vfjsState2,
          cb: () => {
            this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, {
              cb: () => {
                this.setVfjsFields();
              }
            });
          }
        });
      }
    });
  } else {
    this.vfjsBus.$emit(VFJS_EVENT_STATE_UPDATED, {
      cb: () => {
        this.setVfjsFields();
      }
    });
  }
}
function setVfjsFields() {
  this.vfjsFields = this.getVfjsFields(this.vfjsFieldsActive);
}
var setters$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setVfjsUiSchema,
  setVfjsUiFieldsActive,
  setVfjsFields
}, Symbol.toStringTag, { value: "Module" }));
const vfjsUi = __spreadValues(__spreadValues({}, getters$1), setters$1);
function getVfjsChildPropertiesRequired(parentFields = [], excludeProperties = []) {
  const uniqueProperties = parentFields.filter((property) => excludeProperties.indexOf(property) === -1);
  return uniqueProperties.reduce((properties2, property) => {
    properties2.push(property);
    const value = {};
    set(value, property, {});
    this.ajv.validate(this.getVfjsSchema(), value);
    const propertiesRequired = this.getVfjsPropertiesRequired(this.ajv.errors);
    if (propertiesRequired.length > 0) {
      const excludePropertiesChildren = [
        ...excludeProperties,
        ...uniqueProperties
      ];
      const childFieldsRequired = this.getVfjsChildPropertiesRequired(propertiesRequired, excludePropertiesChildren);
      properties2.push(...childFieldsRequired);
    }
    return properties2;
  }, []);
}
function getVfjsFieldModelValidationErrors(key, value) {
  return this.getVfjsValidationErrors(value, this.getVfjsSchema(key));
}
function getVfjsFieldModelValid(key, value) {
  const errors2 = this.getVfjsFieldModelValidationErrors(key, value);
  return errors2.length === 0;
}
function getVfjsModelValidationErrorsLocalized() {
  const { ajv: ajv2 = {} } = this.vfjsOptions;
  const { locale } = ajv2;
  if (typeof locale === "function") {
    locale(this.ajv.errors);
  }
}
function getVfjsPropertiesRequired(errors2) {
  if (!errors2) {
    return [];
  }
  return errors2.reduce((required2, error2) => {
    if (error2.keyword === "required") {
      if (error2.params && error2.params.missingProperty) {
        const key = error2.params.missingProperty;
        const errorDataPathPrefix = String(error2.dataPath).substring(0, 1);
        let parent;
        switch (errorDataPathPrefix) {
          case ".":
            parent = error2.dataPath.substring(1);
            break;
          case "[":
            parent = error2.dataPath.substring(2, error2.dataPath.length - 2).replace("']['", ".");
            break;
          case "/":
            parent = error2.dataPath.substring(1).replace(/\//g, ".");
            break;
        }
        const propertyPath = parent ? `${parent}.${key}` : key;
        if (required2.indexOf(propertyPath) === -1) {
          required2.push(propertyPath);
        }
      }
    }
    return required2;
  }, []);
}
function getVfjsValidationErrors(model, schema) {
  const ajvSchema = schema || this.getVfjsSchema();
  const ajvModel = model || this.getVfjsModel();
  const valid = this.ajv.validate(ajvSchema, ajvModel);
  this.getVfjsModelValidationErrorsLocalized();
  return !valid ? this.ajv.errors : [];
}
function getVfjsValidationSchema(key, value) {
  const schema = {
    type: "object",
    properties: {}
  };
  const isRequired = this.vfjsHelperFieldIsRequired(key);
  const fieldSchema = this.getVfjsSchema(key) || {};
  const paths = key.split(".");
  const previousPaths = [];
  paths.forEach((path, index) => {
    const previousProperties = previousPaths.map((previousPath) => `properties.${previousPath}`).join(".");
    const properties2 = previousPaths.length > 0 ? `${previousProperties}.properties.${path}` : `properties.${path}`;
    const required2 = previousPaths.length > 0 ? `${previousProperties}.required` : "required";
    if (index === paths.length - 1) {
      set(schema, properties2, fieldSchema);
      if (isRequired) {
        set(schema, required2, [path]);
        if (this.ajv.RULES.keywords.errorMessage && fieldSchema.errorMessage) {
          const errorMessagePath = previousPaths.length > 0 ? `${previousProperties}.errorMessage` : "errorMessage";
          set(schema, errorMessagePath, fieldSchema.errorMessage);
        }
      }
    } else {
      set(schema, properties2, {});
      set(schema, required2, [path]);
    }
    previousPaths.push(path);
  });
  return schema;
}
function getVfjsValid() {
  const errors2 = this.getVfjsValidationErrors();
  return errors2.length === 0;
}
var getters = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getVfjsChildPropertiesRequired,
  getVfjsFieldModelValidationErrors,
  getVfjsFieldModelValid,
  getVfjsModelValidationErrorsLocalized,
  getVfjsPropertiesRequired,
  getVfjsValidationErrors,
  getVfjsValidationSchema,
  getVfjsValid
}, Symbol.toStringTag, { value: "Module" }));
function setVfjsValidationErrors() {
  this.vfjsBus.$emit(VFJS_EVENT_MODEL_VALIDATE, {
    vfjsModel: this.getVfjsModel(),
    cb: () => {
      const validateRequired = (key) => new Promise((resolve2, reject) => {
        this.vfjsBus.$emit(VFJS_EVENT_FIELD_MODEL_VALIDATE, {
          key,
          value: this.getVfjsFieldModel(key),
          cb: (vfjsFieldErrors) => {
            const fieldState = this.getVfjsFieldState(key);
            this.vfjsBus.$emit(VFJS_EVENT_FIELD_STATE_UPDATE, {
              key,
              value: __spreadProps(__spreadValues({}, fieldState), {
                vfjsFieldErrors
              }),
              cb: () => {
                resolve2();
              }
            });
          }
        });
      });
      const operations = this.vfjsFieldsRequired.map(validateRequired);
      return Promise.all(operations).then(() => this.vfjsBus.$emit(VFJS_EVENT_UI_FIELDS_UPDATE));
    }
  });
}
var setters = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  setVfjsValidationErrors
}, Symbol.toStringTag, { value: "Module" }));
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var ajv = { exports: {} };
var core$2 = {};
var validate = {};
var boolSchema = {};
var errors = {};
var codegen = {};
var code$1 = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.regexpCode = exports2.getEsmExportName = exports2.getProperty = exports2.safeStringify = exports2.stringify = exports2.strConcat = exports2.addCodeArg = exports2.str = exports2._ = exports2.nil = exports2._Code = exports2.Name = exports2.IDENTIFIER = exports2._CodeOrName = void 0;
  class _CodeOrName {
  }
  exports2._CodeOrName = _CodeOrName;
  exports2.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class Name extends _CodeOrName {
    constructor(s) {
      super();
      if (!exports2.IDENTIFIER.test(s))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = s;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      return false;
    }
    get names() {
      return { [this.str]: 1 };
    }
  }
  exports2.Name = Name;
  class _Code extends _CodeOrName {
    constructor(code2) {
      super();
      this._items = typeof code2 === "string" ? [code2] : code2;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return false;
      const item = this._items[0];
      return item === "" || item === '""';
    }
    get str() {
      var _a;
      return (_a = this._str) !== null && _a !== void 0 ? _a : this._str = this._items.reduce((s, c) => `${s}${c}`, "");
    }
    get names() {
      var _a;
      return (_a = this._names) !== null && _a !== void 0 ? _a : this._names = this._items.reduce((names2, c) => {
        if (c instanceof Name)
          names2[c.str] = (names2[c.str] || 0) + 1;
        return names2;
      }, {});
    }
  }
  exports2._Code = _Code;
  exports2.nil = new _Code("");
  function _(strs, ...args) {
    const code2 = [strs[0]];
    let i = 0;
    while (i < args.length) {
      addCodeArg(code2, args[i]);
      code2.push(strs[++i]);
    }
    return new _Code(code2);
  }
  exports2._ = _;
  const plus = new _Code("+");
  function str(strs, ...args) {
    const expr = [safeStringify(strs[0])];
    let i = 0;
    while (i < args.length) {
      expr.push(plus);
      addCodeArg(expr, args[i]);
      expr.push(plus, safeStringify(strs[++i]));
    }
    optimize(expr);
    return new _Code(expr);
  }
  exports2.str = str;
  function addCodeArg(code2, arg) {
    if (arg instanceof _Code)
      code2.push(...arg._items);
    else if (arg instanceof Name)
      code2.push(arg);
    else
      code2.push(interpolate(arg));
  }
  exports2.addCodeArg = addCodeArg;
  function optimize(expr) {
    let i = 1;
    while (i < expr.length - 1) {
      if (expr[i] === plus) {
        const res = mergeExprItems(expr[i - 1], expr[i + 1]);
        if (res !== void 0) {
          expr.splice(i - 1, 3, res);
          continue;
        }
        expr[i++] = "+";
      }
      i++;
    }
  }
  function mergeExprItems(a, b) {
    if (b === '""')
      return a;
    if (a === '""')
      return b;
    if (typeof a == "string") {
      if (b instanceof Name || a[a.length - 1] !== '"')
        return;
      if (typeof b != "string")
        return `${a.slice(0, -1)}${b}"`;
      if (b[0] === '"')
        return a.slice(0, -1) + b.slice(1);
      return;
    }
    if (typeof b == "string" && b[0] === '"' && !(a instanceof Name))
      return `"${a}${b.slice(1)}`;
    return;
  }
  function strConcat(c1, c2) {
    return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str`${c1}${c2}`;
  }
  exports2.strConcat = strConcat;
  function interpolate(x) {
    return typeof x == "number" || typeof x == "boolean" || x === null ? x : safeStringify(Array.isArray(x) ? x.join(",") : x);
  }
  function stringify(x) {
    return new _Code(safeStringify(x));
  }
  exports2.stringify = stringify;
  function safeStringify(x) {
    return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  exports2.safeStringify = safeStringify;
  function getProperty(key) {
    return typeof key == "string" && exports2.IDENTIFIER.test(key) ? new _Code(`.${key}`) : _`[${key}]`;
  }
  exports2.getProperty = getProperty;
  function getEsmExportName(key) {
    if (typeof key == "string" && exports2.IDENTIFIER.test(key)) {
      return new _Code(`${key}`);
    }
    throw new Error(`CodeGen: invalid export name: ${key}, use explicit $id name mapping`);
  }
  exports2.getEsmExportName = getEsmExportName;
  function regexpCode(rx) {
    return new _Code(rx.toString());
  }
  exports2.regexpCode = regexpCode;
})(code$1);
var scope = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.ValueScope = exports2.ValueScopeName = exports2.Scope = exports2.varKinds = exports2.UsedValueState = void 0;
  const code_12 = code$1;
  class ValueError extends Error {
    constructor(name) {
      super(`CodeGen: "code" for ${name} not defined`);
      this.value = name.value;
    }
  }
  var UsedValueState;
  (function(UsedValueState2) {
    UsedValueState2[UsedValueState2["Started"] = 0] = "Started";
    UsedValueState2[UsedValueState2["Completed"] = 1] = "Completed";
  })(UsedValueState = exports2.UsedValueState || (exports2.UsedValueState = {}));
  exports2.varKinds = {
    const: new code_12.Name("const"),
    let: new code_12.Name("let"),
    var: new code_12.Name("var")
  };
  class Scope {
    constructor({ prefixes, parent } = {}) {
      this._names = {};
      this._prefixes = prefixes;
      this._parent = parent;
    }
    toName(nameOrPrefix) {
      return nameOrPrefix instanceof code_12.Name ? nameOrPrefix : this.name(nameOrPrefix);
    }
    name(prefix) {
      return new code_12.Name(this._newName(prefix));
    }
    _newName(prefix) {
      const ng = this._names[prefix] || this._nameGroup(prefix);
      return `${prefix}${ng.index++}`;
    }
    _nameGroup(prefix) {
      var _a, _b;
      if (((_b = (_a = this._parent) === null || _a === void 0 ? void 0 : _a._prefixes) === null || _b === void 0 ? void 0 : _b.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) {
        throw new Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
      }
      return this._names[prefix] = { prefix, index: 0 };
    }
  }
  exports2.Scope = Scope;
  class ValueScopeName extends code_12.Name {
    constructor(prefix, nameStr) {
      super(nameStr);
      this.prefix = prefix;
    }
    setValue(value, { property, itemIndex }) {
      this.value = value;
      this.scopePath = (0, code_12._)`.${new code_12.Name(property)}[${itemIndex}]`;
    }
  }
  exports2.ValueScopeName = ValueScopeName;
  const line = (0, code_12._)`\n`;
  class ValueScope extends Scope {
    constructor(opts) {
      super(opts);
      this._values = {};
      this._scope = opts.scope;
      this.opts = __spreadProps(__spreadValues({}, opts), { _n: opts.lines ? line : code_12.nil });
    }
    get() {
      return this._scope;
    }
    name(prefix) {
      return new ValueScopeName(prefix, this._newName(prefix));
    }
    value(nameOrPrefix, value) {
      var _a;
      if (value.ref === void 0)
        throw new Error("CodeGen: ref must be passed in value");
      const name = this.toName(nameOrPrefix);
      const { prefix } = name;
      const valueKey = (_a = value.key) !== null && _a !== void 0 ? _a : value.ref;
      let vs = this._values[prefix];
      if (vs) {
        const _name = vs.get(valueKey);
        if (_name)
          return _name;
      } else {
        vs = this._values[prefix] = /* @__PURE__ */ new Map();
      }
      vs.set(valueKey, name);
      const s = this._scope[prefix] || (this._scope[prefix] = []);
      const itemIndex = s.length;
      s[itemIndex] = value.ref;
      name.setValue(value, { property: prefix, itemIndex });
      return name;
    }
    getValue(prefix, keyOrRef) {
      const vs = this._values[prefix];
      if (!vs)
        return;
      return vs.get(keyOrRef);
    }
    scopeRefs(scopeName, values = this._values) {
      return this._reduceValues(values, (name) => {
        if (name.scopePath === void 0)
          throw new Error(`CodeGen: name "${name}" has no value`);
        return (0, code_12._)`${scopeName}${name.scopePath}`;
      });
    }
    scopeCode(values = this._values, usedValues, getCode) {
      return this._reduceValues(values, (name) => {
        if (name.value === void 0)
          throw new Error(`CodeGen: name "${name}" has no value`);
        return name.value.code;
      }, usedValues, getCode);
    }
    _reduceValues(values, valueCode, usedValues = {}, getCode) {
      let code2 = code_12.nil;
      for (const prefix in values) {
        const vs = values[prefix];
        if (!vs)
          continue;
        const nameSet = usedValues[prefix] = usedValues[prefix] || /* @__PURE__ */ new Map();
        vs.forEach((name) => {
          if (nameSet.has(name))
            return;
          nameSet.set(name, UsedValueState.Started);
          let c = valueCode(name);
          if (c) {
            const def2 = this.opts.es5 ? exports2.varKinds.var : exports2.varKinds.const;
            code2 = (0, code_12._)`${code2}${def2} ${name} = ${c};${this.opts._n}`;
          } else if (c = getCode === null || getCode === void 0 ? void 0 : getCode(name)) {
            code2 = (0, code_12._)`${code2}${c}${this.opts._n}`;
          } else {
            throw new ValueError(name);
          }
          nameSet.set(name, UsedValueState.Completed);
        });
      }
      return code2;
    }
  }
  exports2.ValueScope = ValueScope;
})(scope);
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.or = exports2.and = exports2.not = exports2.CodeGen = exports2.operators = exports2.varKinds = exports2.ValueScopeName = exports2.ValueScope = exports2.Scope = exports2.Name = exports2.regexpCode = exports2.stringify = exports2.getProperty = exports2.nil = exports2.strConcat = exports2.str = exports2._ = void 0;
  const code_12 = code$1;
  const scope_1 = scope;
  var code_2 = code$1;
  Object.defineProperty(exports2, "_", { enumerable: true, get: function() {
    return code_2._;
  } });
  Object.defineProperty(exports2, "str", { enumerable: true, get: function() {
    return code_2.str;
  } });
  Object.defineProperty(exports2, "strConcat", { enumerable: true, get: function() {
    return code_2.strConcat;
  } });
  Object.defineProperty(exports2, "nil", { enumerable: true, get: function() {
    return code_2.nil;
  } });
  Object.defineProperty(exports2, "getProperty", { enumerable: true, get: function() {
    return code_2.getProperty;
  } });
  Object.defineProperty(exports2, "stringify", { enumerable: true, get: function() {
    return code_2.stringify;
  } });
  Object.defineProperty(exports2, "regexpCode", { enumerable: true, get: function() {
    return code_2.regexpCode;
  } });
  Object.defineProperty(exports2, "Name", { enumerable: true, get: function() {
    return code_2.Name;
  } });
  var scope_2 = scope;
  Object.defineProperty(exports2, "Scope", { enumerable: true, get: function() {
    return scope_2.Scope;
  } });
  Object.defineProperty(exports2, "ValueScope", { enumerable: true, get: function() {
    return scope_2.ValueScope;
  } });
  Object.defineProperty(exports2, "ValueScopeName", { enumerable: true, get: function() {
    return scope_2.ValueScopeName;
  } });
  Object.defineProperty(exports2, "varKinds", { enumerable: true, get: function() {
    return scope_2.varKinds;
  } });
  exports2.operators = {
    GT: new code_12._Code(">"),
    GTE: new code_12._Code(">="),
    LT: new code_12._Code("<"),
    LTE: new code_12._Code("<="),
    EQ: new code_12._Code("==="),
    NEQ: new code_12._Code("!=="),
    NOT: new code_12._Code("!"),
    OR: new code_12._Code("||"),
    AND: new code_12._Code("&&"),
    ADD: new code_12._Code("+")
  };
  class Node {
    optimizeNodes() {
      return this;
    }
    optimizeNames(_names, _constants) {
      return this;
    }
  }
  class Def extends Node {
    constructor(varKind, name, rhs) {
      super();
      this.varKind = varKind;
      this.name = name;
      this.rhs = rhs;
    }
    render({ es5, _n }) {
      const varKind = es5 ? scope_1.varKinds.var : this.varKind;
      const rhs = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${varKind} ${this.name}${rhs};` + _n;
    }
    optimizeNames(names2, constants) {
      if (!names2[this.name.str])
        return;
      if (this.rhs)
        this.rhs = optimizeExpr(this.rhs, names2, constants);
      return this;
    }
    get names() {
      return this.rhs instanceof code_12._CodeOrName ? this.rhs.names : {};
    }
  }
  class Assign extends Node {
    constructor(lhs, rhs, sideEffects) {
      super();
      this.lhs = lhs;
      this.rhs = rhs;
      this.sideEffects = sideEffects;
    }
    render({ _n }) {
      return `${this.lhs} = ${this.rhs};` + _n;
    }
    optimizeNames(names2, constants) {
      if (this.lhs instanceof code_12.Name && !names2[this.lhs.str] && !this.sideEffects)
        return;
      this.rhs = optimizeExpr(this.rhs, names2, constants);
      return this;
    }
    get names() {
      const names2 = this.lhs instanceof code_12.Name ? {} : __spreadValues({}, this.lhs.names);
      return addExprNames(names2, this.rhs);
    }
  }
  class AssignOp extends Assign {
    constructor(lhs, op, rhs, sideEffects) {
      super(lhs, rhs, sideEffects);
      this.op = op;
    }
    render({ _n }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
    }
  }
  class Label extends Node {
    constructor(label) {
      super();
      this.label = label;
      this.names = {};
    }
    render({ _n }) {
      return `${this.label}:` + _n;
    }
  }
  class Break extends Node {
    constructor(label) {
      super();
      this.label = label;
      this.names = {};
    }
    render({ _n }) {
      const label = this.label ? ` ${this.label}` : "";
      return `break${label};` + _n;
    }
  }
  class Throw extends Node {
    constructor(error2) {
      super();
      this.error = error2;
    }
    render({ _n }) {
      return `throw ${this.error};` + _n;
    }
    get names() {
      return this.error.names;
    }
  }
  class AnyCode extends Node {
    constructor(code2) {
      super();
      this.code = code2;
    }
    render({ _n }) {
      return `${this.code};` + _n;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(names2, constants) {
      this.code = optimizeExpr(this.code, names2, constants);
      return this;
    }
    get names() {
      return this.code instanceof code_12._CodeOrName ? this.code.names : {};
    }
  }
  class ParentNode extends Node {
    constructor(nodes = []) {
      super();
      this.nodes = nodes;
    }
    render(opts) {
      return this.nodes.reduce((code2, n) => code2 + n.render(opts), "");
    }
    optimizeNodes() {
      const { nodes } = this;
      let i = nodes.length;
      while (i--) {
        const n = nodes[i].optimizeNodes();
        if (Array.isArray(n))
          nodes.splice(i, 1, ...n);
        else if (n)
          nodes[i] = n;
        else
          nodes.splice(i, 1);
      }
      return nodes.length > 0 ? this : void 0;
    }
    optimizeNames(names2, constants) {
      const { nodes } = this;
      let i = nodes.length;
      while (i--) {
        const n = nodes[i];
        if (n.optimizeNames(names2, constants))
          continue;
        subtractNames(names2, n.names);
        nodes.splice(i, 1);
      }
      return nodes.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((names2, n) => addNames(names2, n.names), {});
    }
  }
  class BlockNode extends ParentNode {
    render(opts) {
      return "{" + opts._n + super.render(opts) + "}" + opts._n;
    }
  }
  class Root extends ParentNode {
  }
  class Else extends BlockNode {
  }
  Else.kind = "else";
  class If extends BlockNode {
    constructor(condition, nodes) {
      super(nodes);
      this.condition = condition;
    }
    render(opts) {
      let code2 = `if(${this.condition})` + super.render(opts);
      if (this.else)
        code2 += "else " + this.else.render(opts);
      return code2;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const cond = this.condition;
      if (cond === true)
        return this.nodes;
      let e = this.else;
      if (e) {
        const ns = e.optimizeNodes();
        e = this.else = Array.isArray(ns) ? new Else(ns) : ns;
      }
      if (e) {
        if (cond === false)
          return e instanceof If ? e : e.nodes;
        if (this.nodes.length)
          return this;
        return new If(not2(cond), e instanceof If ? [e] : e.nodes);
      }
      if (cond === false || !this.nodes.length)
        return void 0;
      return this;
    }
    optimizeNames(names2, constants) {
      var _a;
      this.else = (_a = this.else) === null || _a === void 0 ? void 0 : _a.optimizeNames(names2, constants);
      if (!(super.optimizeNames(names2, constants) || this.else))
        return;
      this.condition = optimizeExpr(this.condition, names2, constants);
      return this;
    }
    get names() {
      const names2 = super.names;
      addExprNames(names2, this.condition);
      if (this.else)
        addNames(names2, this.else.names);
      return names2;
    }
  }
  If.kind = "if";
  class For extends BlockNode {
  }
  For.kind = "for";
  class ForLoop extends For {
    constructor(iteration) {
      super();
      this.iteration = iteration;
    }
    render(opts) {
      return `for(${this.iteration})` + super.render(opts);
    }
    optimizeNames(names2, constants) {
      if (!super.optimizeNames(names2, constants))
        return;
      this.iteration = optimizeExpr(this.iteration, names2, constants);
      return this;
    }
    get names() {
      return addNames(super.names, this.iteration.names);
    }
  }
  class ForRange extends For {
    constructor(varKind, name, from, to) {
      super();
      this.varKind = varKind;
      this.name = name;
      this.from = from;
      this.to = to;
    }
    render(opts) {
      const varKind = opts.es5 ? scope_1.varKinds.var : this.varKind;
      const { name, from, to } = this;
      return `for(${varKind} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(opts);
    }
    get names() {
      const names2 = addExprNames(super.names, this.from);
      return addExprNames(names2, this.to);
    }
  }
  class ForIter extends For {
    constructor(loop, varKind, name, iterable) {
      super();
      this.loop = loop;
      this.varKind = varKind;
      this.name = name;
      this.iterable = iterable;
    }
    render(opts) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(opts);
    }
    optimizeNames(names2, constants) {
      if (!super.optimizeNames(names2, constants))
        return;
      this.iterable = optimizeExpr(this.iterable, names2, constants);
      return this;
    }
    get names() {
      return addNames(super.names, this.iterable.names);
    }
  }
  class Func extends BlockNode {
    constructor(name, args, async) {
      super();
      this.name = name;
      this.args = args;
      this.async = async;
    }
    render(opts) {
      const _async = this.async ? "async " : "";
      return `${_async}function ${this.name}(${this.args})` + super.render(opts);
    }
  }
  Func.kind = "func";
  class Return extends ParentNode {
    render(opts) {
      return "return " + super.render(opts);
    }
  }
  Return.kind = "return";
  class Try extends BlockNode {
    render(opts) {
      let code2 = "try" + super.render(opts);
      if (this.catch)
        code2 += this.catch.render(opts);
      if (this.finally)
        code2 += this.finally.render(opts);
      return code2;
    }
    optimizeNodes() {
      var _a, _b;
      super.optimizeNodes();
      (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNodes();
      (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNodes();
      return this;
    }
    optimizeNames(names2, constants) {
      var _a, _b;
      super.optimizeNames(names2, constants);
      (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNames(names2, constants);
      (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNames(names2, constants);
      return this;
    }
    get names() {
      const names2 = super.names;
      if (this.catch)
        addNames(names2, this.catch.names);
      if (this.finally)
        addNames(names2, this.finally.names);
      return names2;
    }
  }
  class Catch extends BlockNode {
    constructor(error2) {
      super();
      this.error = error2;
    }
    render(opts) {
      return `catch(${this.error})` + super.render(opts);
    }
  }
  Catch.kind = "catch";
  class Finally extends BlockNode {
    render(opts) {
      return "finally" + super.render(opts);
    }
  }
  Finally.kind = "finally";
  class CodeGen {
    constructor(extScope, opts = {}) {
      this._values = {};
      this._blockStarts = [];
      this._constants = {};
      this.opts = __spreadProps(__spreadValues({}, opts), { _n: opts.lines ? "\n" : "" });
      this._extScope = extScope;
      this._scope = new scope_1.Scope({ parent: extScope });
      this._nodes = [new Root()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    name(prefix) {
      return this._scope.name(prefix);
    }
    scopeName(prefix) {
      return this._extScope.name(prefix);
    }
    scopeValue(prefixOrName, value) {
      const name = this._extScope.value(prefixOrName, value);
      const vs = this._values[name.prefix] || (this._values[name.prefix] = /* @__PURE__ */ new Set());
      vs.add(name);
      return name;
    }
    getScopeValue(prefix, keyOrRef) {
      return this._extScope.getValue(prefix, keyOrRef);
    }
    scopeRefs(scopeName) {
      return this._extScope.scopeRefs(scopeName, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(varKind, nameOrPrefix, rhs, constant2) {
      const name = this._scope.toName(nameOrPrefix);
      if (rhs !== void 0 && constant2)
        this._constants[name.str] = rhs;
      this._leafNode(new Def(varKind, name, rhs));
      return name;
    }
    const(nameOrPrefix, rhs, _constant) {
      return this._def(scope_1.varKinds.const, nameOrPrefix, rhs, _constant);
    }
    let(nameOrPrefix, rhs, _constant) {
      return this._def(scope_1.varKinds.let, nameOrPrefix, rhs, _constant);
    }
    var(nameOrPrefix, rhs, _constant) {
      return this._def(scope_1.varKinds.var, nameOrPrefix, rhs, _constant);
    }
    assign(lhs, rhs, sideEffects) {
      return this._leafNode(new Assign(lhs, rhs, sideEffects));
    }
    add(lhs, rhs) {
      return this._leafNode(new AssignOp(lhs, exports2.operators.ADD, rhs));
    }
    code(c) {
      if (typeof c == "function")
        c();
      else if (c !== code_12.nil)
        this._leafNode(new AnyCode(c));
      return this;
    }
    object(...keyValues) {
      const code2 = ["{"];
      for (const [key, value] of keyValues) {
        if (code2.length > 1)
          code2.push(",");
        code2.push(key);
        if (key !== value || this.opts.es5) {
          code2.push(":");
          (0, code_12.addCodeArg)(code2, value);
        }
      }
      code2.push("}");
      return new code_12._Code(code2);
    }
    if(condition, thenBody, elseBody) {
      this._blockNode(new If(condition));
      if (thenBody && elseBody) {
        this.code(thenBody).else().code(elseBody).endIf();
      } else if (thenBody) {
        this.code(thenBody).endIf();
      } else if (elseBody) {
        throw new Error('CodeGen: "else" body without "then" body');
      }
      return this;
    }
    elseIf(condition) {
      return this._elseNode(new If(condition));
    }
    else() {
      return this._elseNode(new Else());
    }
    endIf() {
      return this._endBlockNode(If, Else);
    }
    _for(node, forBody) {
      this._blockNode(node);
      if (forBody)
        this.code(forBody).endFor();
      return this;
    }
    for(iteration, forBody) {
      return this._for(new ForLoop(iteration), forBody);
    }
    forRange(nameOrPrefix, from, to, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.let) {
      const name = this._scope.toName(nameOrPrefix);
      return this._for(new ForRange(varKind, name, from, to), () => forBody(name));
    }
    forOf(nameOrPrefix, iterable, forBody, varKind = scope_1.varKinds.const) {
      const name = this._scope.toName(nameOrPrefix);
      if (this.opts.es5) {
        const arr = iterable instanceof code_12.Name ? iterable : this.var("_arr", iterable);
        return this.forRange("_i", 0, (0, code_12._)`${arr}.length`, (i) => {
          this.var(name, (0, code_12._)`${arr}[${i}]`);
          forBody(name);
        });
      }
      return this._for(new ForIter("of", varKind, name, iterable), () => forBody(name));
    }
    forIn(nameOrPrefix, obj, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.const) {
      if (this.opts.ownProperties) {
        return this.forOf(nameOrPrefix, (0, code_12._)`Object.keys(${obj})`, forBody);
      }
      const name = this._scope.toName(nameOrPrefix);
      return this._for(new ForIter("in", varKind, name, obj), () => forBody(name));
    }
    endFor() {
      return this._endBlockNode(For);
    }
    label(label) {
      return this._leafNode(new Label(label));
    }
    break(label) {
      return this._leafNode(new Break(label));
    }
    return(value) {
      const node = new Return();
      this._blockNode(node);
      this.code(value);
      if (node.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(Return);
    }
    try(tryBody, catchCode, finallyCode) {
      if (!catchCode && !finallyCode)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const node = new Try();
      this._blockNode(node);
      this.code(tryBody);
      if (catchCode) {
        const error2 = this.name("e");
        this._currNode = node.catch = new Catch(error2);
        catchCode(error2);
      }
      if (finallyCode) {
        this._currNode = node.finally = new Finally();
        this.code(finallyCode);
      }
      return this._endBlockNode(Catch, Finally);
    }
    throw(error2) {
      return this._leafNode(new Throw(error2));
    }
    block(body, nodeCount) {
      this._blockStarts.push(this._nodes.length);
      if (body)
        this.code(body).endBlock(nodeCount);
      return this;
    }
    endBlock(nodeCount) {
      const len = this._blockStarts.pop();
      if (len === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const toClose = this._nodes.length - len;
      if (toClose < 0 || nodeCount !== void 0 && toClose !== nodeCount) {
        throw new Error(`CodeGen: wrong number of nodes: ${toClose} vs ${nodeCount} expected`);
      }
      this._nodes.length = len;
      return this;
    }
    func(name, args = code_12.nil, async, funcBody) {
      this._blockNode(new Func(name, args, async));
      if (funcBody)
        this.code(funcBody).endFunc();
      return this;
    }
    endFunc() {
      return this._endBlockNode(Func);
    }
    optimize(n = 1) {
      while (n-- > 0) {
        this._root.optimizeNodes();
        this._root.optimizeNames(this._root.names, this._constants);
      }
    }
    _leafNode(node) {
      this._currNode.nodes.push(node);
      return this;
    }
    _blockNode(node) {
      this._currNode.nodes.push(node);
      this._nodes.push(node);
    }
    _endBlockNode(N1, N2) {
      const n = this._currNode;
      if (n instanceof N1 || N2 && n instanceof N2) {
        this._nodes.pop();
        return this;
      }
      throw new Error(`CodeGen: not in block "${N2 ? `${N1.kind}/${N2.kind}` : N1.kind}"`);
    }
    _elseNode(node) {
      const n = this._currNode;
      if (!(n instanceof If)) {
        throw new Error('CodeGen: "else" without "if"');
      }
      this._currNode = n.else = node;
      return this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const ns = this._nodes;
      return ns[ns.length - 1];
    }
    set _currNode(node) {
      const ns = this._nodes;
      ns[ns.length - 1] = node;
    }
  }
  exports2.CodeGen = CodeGen;
  function addNames(names2, from) {
    for (const n in from)
      names2[n] = (names2[n] || 0) + (from[n] || 0);
    return names2;
  }
  function addExprNames(names2, from) {
    return from instanceof code_12._CodeOrName ? addNames(names2, from.names) : names2;
  }
  function optimizeExpr(expr, names2, constants) {
    if (expr instanceof code_12.Name)
      return replaceName(expr);
    if (!canOptimize(expr))
      return expr;
    return new code_12._Code(expr._items.reduce((items2, c) => {
      if (c instanceof code_12.Name)
        c = replaceName(c);
      if (c instanceof code_12._Code)
        items2.push(...c._items);
      else
        items2.push(c);
      return items2;
    }, []));
    function replaceName(n) {
      const c = constants[n.str];
      if (c === void 0 || names2[n.str] !== 1)
        return n;
      delete names2[n.str];
      return c;
    }
    function canOptimize(e) {
      return e instanceof code_12._Code && e._items.some((c) => c instanceof code_12.Name && names2[c.str] === 1 && constants[c.str] !== void 0);
    }
  }
  function subtractNames(names2, from) {
    for (const n in from)
      names2[n] = (names2[n] || 0) - (from[n] || 0);
  }
  function not2(x) {
    return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, code_12._)`!${par(x)}`;
  }
  exports2.not = not2;
  const andCode = mappend(exports2.operators.AND);
  function and(...args) {
    return args.reduce(andCode);
  }
  exports2.and = and;
  const orCode = mappend(exports2.operators.OR);
  function or(...args) {
    return args.reduce(orCode);
  }
  exports2.or = or;
  function mappend(op) {
    return (x, y) => x === code_12.nil ? y : y === code_12.nil ? x : (0, code_12._)`${par(x)} ${op} ${par(y)}`;
  }
  function par(x) {
    return x instanceof code_12.Name ? x : (0, code_12._)`(${x})`;
  }
})(codegen);
var util = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.checkStrictMode = exports2.getErrorPath = exports2.Type = exports2.useFunc = exports2.setEvaluated = exports2.evaluatedPropsToName = exports2.mergeEvaluated = exports2.eachItem = exports2.unescapeJsonPointer = exports2.escapeJsonPointer = exports2.escapeFragment = exports2.unescapeFragment = exports2.schemaRefOrVal = exports2.schemaHasRulesButRef = exports2.schemaHasRules = exports2.checkUnknownRules = exports2.alwaysValidSchema = exports2.toHash = void 0;
  const codegen_12 = codegen;
  const code_12 = code$1;
  function toHash(arr) {
    const hash = {};
    for (const item of arr)
      hash[item] = true;
    return hash;
  }
  exports2.toHash = toHash;
  function alwaysValidSchema(it, schema) {
    if (typeof schema == "boolean")
      return schema;
    if (Object.keys(schema).length === 0)
      return true;
    checkUnknownRules(it, schema);
    return !schemaHasRules(schema, it.self.RULES.all);
  }
  exports2.alwaysValidSchema = alwaysValidSchema;
  function checkUnknownRules(it, schema = it.schema) {
    const { opts, self: self2 } = it;
    if (!opts.strictSchema)
      return;
    if (typeof schema === "boolean")
      return;
    const rules2 = self2.RULES.keywords;
    for (const key in schema) {
      if (!rules2[key])
        checkStrictMode(it, `unknown keyword: "${key}"`);
    }
  }
  exports2.checkUnknownRules = checkUnknownRules;
  function schemaHasRules(schema, rules2) {
    if (typeof schema == "boolean")
      return !schema;
    for (const key in schema)
      if (rules2[key])
        return true;
    return false;
  }
  exports2.schemaHasRules = schemaHasRules;
  function schemaHasRulesButRef(schema, RULES) {
    if (typeof schema == "boolean")
      return !schema;
    for (const key in schema)
      if (key !== "$ref" && RULES.all[key])
        return true;
    return false;
  }
  exports2.schemaHasRulesButRef = schemaHasRulesButRef;
  function schemaRefOrVal({ topSchemaRef, schemaPath }, schema, keyword2, $data) {
    if (!$data) {
      if (typeof schema == "number" || typeof schema == "boolean")
        return schema;
      if (typeof schema == "string")
        return (0, codegen_12._)`${schema}`;
    }
    return (0, codegen_12._)`${topSchemaRef}${schemaPath}${(0, codegen_12.getProperty)(keyword2)}`;
  }
  exports2.schemaRefOrVal = schemaRefOrVal;
  function unescapeFragment(str) {
    return unescapeJsonPointer(decodeURIComponent(str));
  }
  exports2.unescapeFragment = unescapeFragment;
  function escapeFragment(str) {
    return encodeURIComponent(escapeJsonPointer(str));
  }
  exports2.escapeFragment = escapeFragment;
  function escapeJsonPointer(str) {
    if (typeof str == "number")
      return `${str}`;
    return str.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  exports2.escapeJsonPointer = escapeJsonPointer;
  function unescapeJsonPointer(str) {
    return str.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  exports2.unescapeJsonPointer = unescapeJsonPointer;
  function eachItem(xs, f) {
    if (Array.isArray(xs)) {
      for (const x of xs)
        f(x);
    } else {
      f(xs);
    }
  }
  exports2.eachItem = eachItem;
  function makeMergeEvaluated({ mergeNames, mergeToName, mergeValues, resultToName }) {
    return (gen, from, to, toName) => {
      const res = to === void 0 ? from : to instanceof codegen_12.Name ? (from instanceof codegen_12.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to) : from instanceof codegen_12.Name ? (mergeToName(gen, to, from), from) : mergeValues(from, to);
      return toName === codegen_12.Name && !(res instanceof codegen_12.Name) ? resultToName(gen, res) : res;
    };
  }
  exports2.mergeEvaluated = {
    props: makeMergeEvaluated({
      mergeNames: (gen, from, to) => gen.if((0, codegen_12._)`${to} !== true && ${from} !== undefined`, () => {
        gen.if((0, codegen_12._)`${from} === true`, () => gen.assign(to, true), () => gen.assign(to, (0, codegen_12._)`${to} || {}`).code((0, codegen_12._)`Object.assign(${to}, ${from})`));
      }),
      mergeToName: (gen, from, to) => gen.if((0, codegen_12._)`${to} !== true`, () => {
        if (from === true) {
          gen.assign(to, true);
        } else {
          gen.assign(to, (0, codegen_12._)`${to} || {}`);
          setEvaluated(gen, to, from);
        }
      }),
      mergeValues: (from, to) => from === true ? true : __spreadValues(__spreadValues({}, from), to),
      resultToName: evaluatedPropsToName
    }),
    items: makeMergeEvaluated({
      mergeNames: (gen, from, to) => gen.if((0, codegen_12._)`${to} !== true && ${from} !== undefined`, () => gen.assign(to, (0, codegen_12._)`${from} === true ? true : ${to} > ${from} ? ${to} : ${from}`)),
      mergeToName: (gen, from, to) => gen.if((0, codegen_12._)`${to} !== true`, () => gen.assign(to, from === true ? true : (0, codegen_12._)`${to} > ${from} ? ${to} : ${from}`)),
      mergeValues: (from, to) => from === true ? true : Math.max(from, to),
      resultToName: (gen, items2) => gen.var("items", items2)
    })
  };
  function evaluatedPropsToName(gen, ps) {
    if (ps === true)
      return gen.var("props", true);
    const props2 = gen.var("props", (0, codegen_12._)`{}`);
    if (ps !== void 0)
      setEvaluated(gen, props2, ps);
    return props2;
  }
  exports2.evaluatedPropsToName = evaluatedPropsToName;
  function setEvaluated(gen, props2, ps) {
    Object.keys(ps).forEach((p) => gen.assign((0, codegen_12._)`${props2}${(0, codegen_12.getProperty)(p)}`, true));
  }
  exports2.setEvaluated = setEvaluated;
  const snippets = {};
  function useFunc(gen, f) {
    return gen.scopeValue("func", {
      ref: f,
      code: snippets[f.code] || (snippets[f.code] = new code_12._Code(f.code))
    });
  }
  exports2.useFunc = useFunc;
  var Type;
  (function(Type2) {
    Type2[Type2["Num"] = 0] = "Num";
    Type2[Type2["Str"] = 1] = "Str";
  })(Type = exports2.Type || (exports2.Type = {}));
  function getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
    if (dataProp instanceof codegen_12.Name) {
      const isNumber = dataPropType === Type.Num;
      return jsPropertySyntax ? isNumber ? (0, codegen_12._)`"[" + ${dataProp} + "]"` : (0, codegen_12._)`"['" + ${dataProp} + "']"` : isNumber ? (0, codegen_12._)`"/" + ${dataProp}` : (0, codegen_12._)`"/" + ${dataProp}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return jsPropertySyntax ? (0, codegen_12.getProperty)(dataProp).toString() : "/" + escapeJsonPointer(dataProp);
  }
  exports2.getErrorPath = getErrorPath;
  function checkStrictMode(it, msg, mode = it.opts.strictSchema) {
    if (!mode)
      return;
    msg = `strict mode: ${msg}`;
    if (mode === true)
      throw new Error(msg);
    it.self.logger.warn(msg);
  }
  exports2.checkStrictMode = checkStrictMode;
})(util);
var names$1 = {};
Object.defineProperty(names$1, "__esModule", { value: true });
const codegen_1$t = codegen;
const names = {
  data: new codegen_1$t.Name("data"),
  valCxt: new codegen_1$t.Name("valCxt"),
  instancePath: new codegen_1$t.Name("instancePath"),
  parentData: new codegen_1$t.Name("parentData"),
  parentDataProperty: new codegen_1$t.Name("parentDataProperty"),
  rootData: new codegen_1$t.Name("rootData"),
  dynamicAnchors: new codegen_1$t.Name("dynamicAnchors"),
  vErrors: new codegen_1$t.Name("vErrors"),
  errors: new codegen_1$t.Name("errors"),
  this: new codegen_1$t.Name("this"),
  self: new codegen_1$t.Name("self"),
  scope: new codegen_1$t.Name("scope"),
  json: new codegen_1$t.Name("json"),
  jsonPos: new codegen_1$t.Name("jsonPos"),
  jsonLen: new codegen_1$t.Name("jsonLen"),
  jsonPart: new codegen_1$t.Name("jsonPart")
};
names$1.default = names;
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.extendErrors = exports2.resetErrorsCount = exports2.reportExtraError = exports2.reportError = exports2.keyword$DataError = exports2.keywordError = void 0;
  const codegen_12 = codegen;
  const util_12 = util;
  const names_12 = names$1;
  exports2.keywordError = {
    message: ({ keyword: keyword2 }) => (0, codegen_12.str)`must pass "${keyword2}" keyword validation`
  };
  exports2.keyword$DataError = {
    message: ({ keyword: keyword2, schemaType }) => schemaType ? (0, codegen_12.str)`"${keyword2}" keyword must be ${schemaType} ($data)` : (0, codegen_12.str)`"${keyword2}" keyword is invalid ($data)`
  };
  function reportError(cxt, error2 = exports2.keywordError, errorPaths, overrideAllErrors) {
    const { it } = cxt;
    const { gen, compositeRule, allErrors } = it;
    const errObj = errorObjectCode(cxt, error2, errorPaths);
    if (overrideAllErrors !== null && overrideAllErrors !== void 0 ? overrideAllErrors : compositeRule || allErrors) {
      addError(gen, errObj);
    } else {
      returnErrors(it, (0, codegen_12._)`[${errObj}]`);
    }
  }
  exports2.reportError = reportError;
  function reportExtraError(cxt, error2 = exports2.keywordError, errorPaths) {
    const { it } = cxt;
    const { gen, compositeRule, allErrors } = it;
    const errObj = errorObjectCode(cxt, error2, errorPaths);
    addError(gen, errObj);
    if (!(compositeRule || allErrors)) {
      returnErrors(it, names_12.default.vErrors);
    }
  }
  exports2.reportExtraError = reportExtraError;
  function resetErrorsCount(gen, errsCount) {
    gen.assign(names_12.default.errors, errsCount);
    gen.if((0, codegen_12._)`${names_12.default.vErrors} !== null`, () => gen.if(errsCount, () => gen.assign((0, codegen_12._)`${names_12.default.vErrors}.length`, errsCount), () => gen.assign(names_12.default.vErrors, null)));
  }
  exports2.resetErrorsCount = resetErrorsCount;
  function extendErrors({ gen, keyword: keyword2, schemaValue, data: data2, errsCount, it }) {
    if (errsCount === void 0)
      throw new Error("ajv implementation error");
    const err = gen.name("err");
    gen.forRange("i", errsCount, names_12.default.errors, (i) => {
      gen.const(err, (0, codegen_12._)`${names_12.default.vErrors}[${i}]`);
      gen.if((0, codegen_12._)`${err}.instancePath === undefined`, () => gen.assign((0, codegen_12._)`${err}.instancePath`, (0, codegen_12.strConcat)(names_12.default.instancePath, it.errorPath)));
      gen.assign((0, codegen_12._)`${err}.schemaPath`, (0, codegen_12.str)`${it.errSchemaPath}/${keyword2}`);
      if (it.opts.verbose) {
        gen.assign((0, codegen_12._)`${err}.schema`, schemaValue);
        gen.assign((0, codegen_12._)`${err}.data`, data2);
      }
    });
  }
  exports2.extendErrors = extendErrors;
  function addError(gen, errObj) {
    const err = gen.const("err", errObj);
    gen.if((0, codegen_12._)`${names_12.default.vErrors} === null`, () => gen.assign(names_12.default.vErrors, (0, codegen_12._)`[${err}]`), (0, codegen_12._)`${names_12.default.vErrors}.push(${err})`);
    gen.code((0, codegen_12._)`${names_12.default.errors}++`);
  }
  function returnErrors(it, errs) {
    const { gen, validateName, schemaEnv } = it;
    if (schemaEnv.$async) {
      gen.throw((0, codegen_12._)`new ${it.ValidationError}(${errs})`);
    } else {
      gen.assign((0, codegen_12._)`${validateName}.errors`, errs);
      gen.return(false);
    }
  }
  const E = {
    keyword: new codegen_12.Name("keyword"),
    schemaPath: new codegen_12.Name("schemaPath"),
    params: new codegen_12.Name("params"),
    propertyName: new codegen_12.Name("propertyName"),
    message: new codegen_12.Name("message"),
    schema: new codegen_12.Name("schema"),
    parentSchema: new codegen_12.Name("parentSchema")
  };
  function errorObjectCode(cxt, error2, errorPaths) {
    const { createErrors } = cxt.it;
    if (createErrors === false)
      return (0, codegen_12._)`{}`;
    return errorObject(cxt, error2, errorPaths);
  }
  function errorObject(cxt, error2, errorPaths = {}) {
    const { gen, it } = cxt;
    const keyValues = [
      errorInstancePath(it, errorPaths),
      errorSchemaPath(cxt, errorPaths)
    ];
    extraErrorProps(cxt, error2, keyValues);
    return gen.object(...keyValues);
  }
  function errorInstancePath({ errorPath }, { instancePath }) {
    const instPath = instancePath ? (0, codegen_12.str)`${errorPath}${(0, util_12.getErrorPath)(instancePath, util_12.Type.Str)}` : errorPath;
    return [names_12.default.instancePath, (0, codegen_12.strConcat)(names_12.default.instancePath, instPath)];
  }
  function errorSchemaPath({ keyword: keyword2, it: { errSchemaPath } }, { schemaPath, parentSchema }) {
    let schPath = parentSchema ? errSchemaPath : (0, codegen_12.str)`${errSchemaPath}/${keyword2}`;
    if (schemaPath) {
      schPath = (0, codegen_12.str)`${schPath}${(0, util_12.getErrorPath)(schemaPath, util_12.Type.Str)}`;
    }
    return [E.schemaPath, schPath];
  }
  function extraErrorProps(cxt, { params, message }, keyValues) {
    const { keyword: keyword2, data: data2, schemaValue, it } = cxt;
    const { opts, propertyName, topSchemaRef, schemaPath } = it;
    keyValues.push([E.keyword, keyword2], [E.params, typeof params == "function" ? params(cxt) : params || (0, codegen_12._)`{}`]);
    if (opts.messages) {
      keyValues.push([E.message, typeof message == "function" ? message(cxt) : message]);
    }
    if (opts.verbose) {
      keyValues.push([E.schema, schemaValue], [E.parentSchema, (0, codegen_12._)`${topSchemaRef}${schemaPath}`], [names_12.default.data, data2]);
    }
    if (propertyName)
      keyValues.push([E.propertyName, propertyName]);
  }
})(errors);
Object.defineProperty(boolSchema, "__esModule", { value: true });
boolSchema.boolOrEmptySchema = boolSchema.topBoolOrEmptySchema = void 0;
const errors_1$2 = errors;
const codegen_1$s = codegen;
const names_1$6 = names$1;
const boolError = {
  message: "boolean schema is false"
};
function topBoolOrEmptySchema(it) {
  const { gen, schema, validateName } = it;
  if (schema === false) {
    falseSchemaError(it, false);
  } else if (typeof schema == "object" && schema.$async === true) {
    gen.return(names_1$6.default.data);
  } else {
    gen.assign((0, codegen_1$s._)`${validateName}.errors`, null);
    gen.return(true);
  }
}
boolSchema.topBoolOrEmptySchema = topBoolOrEmptySchema;
function boolOrEmptySchema(it, valid) {
  const { gen, schema } = it;
  if (schema === false) {
    gen.var(valid, false);
    falseSchemaError(it);
  } else {
    gen.var(valid, true);
  }
}
boolSchema.boolOrEmptySchema = boolOrEmptySchema;
function falseSchemaError(it, overrideAllErrors) {
  const { gen, data: data2 } = it;
  const cxt = {
    gen,
    keyword: "false schema",
    data: data2,
    schema: false,
    schemaCode: false,
    schemaValue: false,
    params: {},
    it
  };
  (0, errors_1$2.reportError)(cxt, boolError, void 0, overrideAllErrors);
}
var dataType = {};
var rules = {};
Object.defineProperty(rules, "__esModule", { value: true });
rules.getRules = rules.isJSONType = void 0;
const _jsonTypes = ["string", "number", "integer", "boolean", "null", "object", "array"];
const jsonTypes = new Set(_jsonTypes);
function isJSONType(x) {
  return typeof x == "string" && jsonTypes.has(x);
}
rules.isJSONType = isJSONType;
function getRules() {
  const groups = {
    number: { type: "number", rules: [] },
    string: { type: "string", rules: [] },
    array: { type: "array", rules: [] },
    object: { type: "object", rules: [] }
  };
  return {
    types: __spreadProps(__spreadValues({}, groups), { integer: true, boolean: true, null: true }),
    rules: [{ rules: [] }, groups.number, groups.string, groups.array, groups.object],
    post: { rules: [] },
    all: {},
    keywords: {}
  };
}
rules.getRules = getRules;
var applicability = {};
Object.defineProperty(applicability, "__esModule", { value: true });
applicability.shouldUseRule = applicability.shouldUseGroup = applicability.schemaHasRulesForType = void 0;
function schemaHasRulesForType({ schema, self: self2 }, type2) {
  const group = self2.RULES.types[type2];
  return group && group !== true && shouldUseGroup(schema, group);
}
applicability.schemaHasRulesForType = schemaHasRulesForType;
function shouldUseGroup(schema, group) {
  return group.rules.some((rule) => shouldUseRule(schema, rule));
}
applicability.shouldUseGroup = shouldUseGroup;
function shouldUseRule(schema, rule) {
  var _a;
  return schema[rule.keyword] !== void 0 || ((_a = rule.definition.implements) === null || _a === void 0 ? void 0 : _a.some((kwd) => schema[kwd] !== void 0));
}
applicability.shouldUseRule = shouldUseRule;
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.reportTypeError = exports2.checkDataTypes = exports2.checkDataType = exports2.coerceAndCheckDataType = exports2.getJSONTypes = exports2.getSchemaTypes = exports2.DataType = void 0;
  const rules_1 = rules;
  const applicability_12 = applicability;
  const errors_12 = errors;
  const codegen_12 = codegen;
  const util_12 = util;
  var DataType;
  (function(DataType2) {
    DataType2[DataType2["Correct"] = 0] = "Correct";
    DataType2[DataType2["Wrong"] = 1] = "Wrong";
  })(DataType = exports2.DataType || (exports2.DataType = {}));
  function getSchemaTypes(schema) {
    const types2 = getJSONTypes(schema.type);
    const hasNull = types2.includes("null");
    if (hasNull) {
      if (schema.nullable === false)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!types2.length && schema.nullable !== void 0) {
        throw new Error('"nullable" cannot be used without "type"');
      }
      if (schema.nullable === true)
        types2.push("null");
    }
    return types2;
  }
  exports2.getSchemaTypes = getSchemaTypes;
  function getJSONTypes(ts) {
    const types2 = Array.isArray(ts) ? ts : ts ? [ts] : [];
    if (types2.every(rules_1.isJSONType))
      return types2;
    throw new Error("type must be JSONType or JSONType[]: " + types2.join(","));
  }
  exports2.getJSONTypes = getJSONTypes;
  function coerceAndCheckDataType(it, types2) {
    const { gen, data: data2, opts } = it;
    const coerceTo = coerceToTypes(types2, opts.coerceTypes);
    const checkTypes = types2.length > 0 && !(coerceTo.length === 0 && types2.length === 1 && (0, applicability_12.schemaHasRulesForType)(it, types2[0]));
    if (checkTypes) {
      const wrongType = checkDataTypes(types2, data2, opts.strictNumbers, DataType.Wrong);
      gen.if(wrongType, () => {
        if (coerceTo.length)
          coerceData(it, types2, coerceTo);
        else
          reportTypeError(it);
      });
    }
    return checkTypes;
  }
  exports2.coerceAndCheckDataType = coerceAndCheckDataType;
  const COERCIBLE = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function coerceToTypes(types2, coerceTypes) {
    return coerceTypes ? types2.filter((t) => COERCIBLE.has(t) || coerceTypes === "array" && t === "array") : [];
  }
  function coerceData(it, types2, coerceTo) {
    const { gen, data: data2, opts } = it;
    const dataType2 = gen.let("dataType", (0, codegen_12._)`typeof ${data2}`);
    const coerced = gen.let("coerced", (0, codegen_12._)`undefined`);
    if (opts.coerceTypes === "array") {
      gen.if((0, codegen_12._)`${dataType2} == 'object' && Array.isArray(${data2}) && ${data2}.length == 1`, () => gen.assign(data2, (0, codegen_12._)`${data2}[0]`).assign(dataType2, (0, codegen_12._)`typeof ${data2}`).if(checkDataTypes(types2, data2, opts.strictNumbers), () => gen.assign(coerced, data2)));
    }
    gen.if((0, codegen_12._)`${coerced} !== undefined`);
    for (const t of coerceTo) {
      if (COERCIBLE.has(t) || t === "array" && opts.coerceTypes === "array") {
        coerceSpecificType(t);
      }
    }
    gen.else();
    reportTypeError(it);
    gen.endIf();
    gen.if((0, codegen_12._)`${coerced} !== undefined`, () => {
      gen.assign(data2, coerced);
      assignParentData(it, coerced);
    });
    function coerceSpecificType(t) {
      switch (t) {
        case "string":
          gen.elseIf((0, codegen_12._)`${dataType2} == "number" || ${dataType2} == "boolean"`).assign(coerced, (0, codegen_12._)`"" + ${data2}`).elseIf((0, codegen_12._)`${data2} === null`).assign(coerced, (0, codegen_12._)`""`);
          return;
        case "number":
          gen.elseIf((0, codegen_12._)`${dataType2} == "boolean" || ${data2} === null
              || (${dataType2} == "string" && ${data2} && ${data2} == +${data2})`).assign(coerced, (0, codegen_12._)`+${data2}`);
          return;
        case "integer":
          gen.elseIf((0, codegen_12._)`${dataType2} === "boolean" || ${data2} === null
              || (${dataType2} === "string" && ${data2} && ${data2} == +${data2} && !(${data2} % 1))`).assign(coerced, (0, codegen_12._)`+${data2}`);
          return;
        case "boolean":
          gen.elseIf((0, codegen_12._)`${data2} === "false" || ${data2} === 0 || ${data2} === null`).assign(coerced, false).elseIf((0, codegen_12._)`${data2} === "true" || ${data2} === 1`).assign(coerced, true);
          return;
        case "null":
          gen.elseIf((0, codegen_12._)`${data2} === "" || ${data2} === 0 || ${data2} === false`);
          gen.assign(coerced, null);
          return;
        case "array":
          gen.elseIf((0, codegen_12._)`${dataType2} === "string" || ${dataType2} === "number"
              || ${dataType2} === "boolean" || ${data2} === null`).assign(coerced, (0, codegen_12._)`[${data2}]`);
      }
    }
  }
  function assignParentData({ gen, parentData, parentDataProperty }, expr) {
    gen.if((0, codegen_12._)`${parentData} !== undefined`, () => gen.assign((0, codegen_12._)`${parentData}[${parentDataProperty}]`, expr));
  }
  function checkDataType(dataType2, data2, strictNums, correct = DataType.Correct) {
    const EQ = correct === DataType.Correct ? codegen_12.operators.EQ : codegen_12.operators.NEQ;
    let cond;
    switch (dataType2) {
      case "null":
        return (0, codegen_12._)`${data2} ${EQ} null`;
      case "array":
        cond = (0, codegen_12._)`Array.isArray(${data2})`;
        break;
      case "object":
        cond = (0, codegen_12._)`${data2} && typeof ${data2} == "object" && !Array.isArray(${data2})`;
        break;
      case "integer":
        cond = numCond((0, codegen_12._)`!(${data2} % 1) && !isNaN(${data2})`);
        break;
      case "number":
        cond = numCond();
        break;
      default:
        return (0, codegen_12._)`typeof ${data2} ${EQ} ${dataType2}`;
    }
    return correct === DataType.Correct ? cond : (0, codegen_12.not)(cond);
    function numCond(_cond = codegen_12.nil) {
      return (0, codegen_12.and)((0, codegen_12._)`typeof ${data2} == "number"`, _cond, strictNums ? (0, codegen_12._)`isFinite(${data2})` : codegen_12.nil);
    }
  }
  exports2.checkDataType = checkDataType;
  function checkDataTypes(dataTypes, data2, strictNums, correct) {
    if (dataTypes.length === 1) {
      return checkDataType(dataTypes[0], data2, strictNums, correct);
    }
    let cond;
    const types2 = (0, util_12.toHash)(dataTypes);
    if (types2.array && types2.object) {
      const notObj = (0, codegen_12._)`typeof ${data2} != "object"`;
      cond = types2.null ? notObj : (0, codegen_12._)`!${data2} || ${notObj}`;
      delete types2.null;
      delete types2.array;
      delete types2.object;
    } else {
      cond = codegen_12.nil;
    }
    if (types2.number)
      delete types2.integer;
    for (const t in types2)
      cond = (0, codegen_12.and)(cond, checkDataType(t, data2, strictNums, correct));
    return cond;
  }
  exports2.checkDataTypes = checkDataTypes;
  const typeError = {
    message: ({ schema }) => `must be ${schema}`,
    params: ({ schema, schemaValue }) => typeof schema == "string" ? (0, codegen_12._)`{type: ${schema}}` : (0, codegen_12._)`{type: ${schemaValue}}`
  };
  function reportTypeError(it) {
    const cxt = getTypeErrorContext(it);
    (0, errors_12.reportError)(cxt, typeError);
  }
  exports2.reportTypeError = reportTypeError;
  function getTypeErrorContext(it) {
    const { gen, data: data2, schema } = it;
    const schemaCode = (0, util_12.schemaRefOrVal)(it, schema, "type");
    return {
      gen,
      keyword: "type",
      data: data2,
      schema: schema.type,
      schemaCode,
      schemaValue: schemaCode,
      parentSchema: schema,
      params: {},
      it
    };
  }
})(dataType);
var defaults = {};
Object.defineProperty(defaults, "__esModule", { value: true });
defaults.assignDefaults = void 0;
const codegen_1$r = codegen;
const util_1$p = util;
function assignDefaults(it, ty) {
  const { properties: properties2, items: items2 } = it.schema;
  if (ty === "object" && properties2) {
    for (const key in properties2) {
      assignDefault(it, key, properties2[key].default);
    }
  } else if (ty === "array" && Array.isArray(items2)) {
    items2.forEach((sch, i) => assignDefault(it, i, sch.default));
  }
}
defaults.assignDefaults = assignDefaults;
function assignDefault(it, prop, defaultValue) {
  const { gen, compositeRule, data: data2, opts } = it;
  if (defaultValue === void 0)
    return;
  const childData = (0, codegen_1$r._)`${data2}${(0, codegen_1$r.getProperty)(prop)}`;
  if (compositeRule) {
    (0, util_1$p.checkStrictMode)(it, `default is ignored for: ${childData}`);
    return;
  }
  let condition = (0, codegen_1$r._)`${childData} === undefined`;
  if (opts.useDefaults === "empty") {
    condition = (0, codegen_1$r._)`${condition} || ${childData} === null || ${childData} === ""`;
  }
  gen.if(condition, (0, codegen_1$r._)`${childData} = ${(0, codegen_1$r.stringify)(defaultValue)}`);
}
var keyword = {};
var code = {};
Object.defineProperty(code, "__esModule", { value: true });
code.validateUnion = code.validateArray = code.usePattern = code.callValidateCode = code.schemaProperties = code.allSchemaProperties = code.noPropertyInData = code.propertyInData = code.isOwnProperty = code.hasPropFunc = code.reportMissingProp = code.checkMissingProp = code.checkReportMissingProp = void 0;
const codegen_1$q = codegen;
const util_1$o = util;
const names_1$5 = names$1;
const util_2$1 = util;
function checkReportMissingProp(cxt, prop) {
  const { gen, data: data2, it } = cxt;
  gen.if(noPropertyInData(gen, data2, prop, it.opts.ownProperties), () => {
    cxt.setParams({ missingProperty: (0, codegen_1$q._)`${prop}` }, true);
    cxt.error();
  });
}
code.checkReportMissingProp = checkReportMissingProp;
function checkMissingProp({ gen, data: data2, it: { opts } }, properties2, missing) {
  return (0, codegen_1$q.or)(...properties2.map((prop) => (0, codegen_1$q.and)(noPropertyInData(gen, data2, prop, opts.ownProperties), (0, codegen_1$q._)`${missing} = ${prop}`)));
}
code.checkMissingProp = checkMissingProp;
function reportMissingProp(cxt, missing) {
  cxt.setParams({ missingProperty: missing }, true);
  cxt.error();
}
code.reportMissingProp = reportMissingProp;
function hasPropFunc(gen) {
  return gen.scopeValue("func", {
    ref: Object.prototype.hasOwnProperty,
    code: (0, codegen_1$q._)`Object.prototype.hasOwnProperty`
  });
}
code.hasPropFunc = hasPropFunc;
function isOwnProperty(gen, data2, property) {
  return (0, codegen_1$q._)`${hasPropFunc(gen)}.call(${data2}, ${property})`;
}
code.isOwnProperty = isOwnProperty;
function propertyInData(gen, data2, property, ownProperties) {
  const cond = (0, codegen_1$q._)`${data2}${(0, codegen_1$q.getProperty)(property)} !== undefined`;
  return ownProperties ? (0, codegen_1$q._)`${cond} && ${isOwnProperty(gen, data2, property)}` : cond;
}
code.propertyInData = propertyInData;
function noPropertyInData(gen, data2, property, ownProperties) {
  const cond = (0, codegen_1$q._)`${data2}${(0, codegen_1$q.getProperty)(property)} === undefined`;
  return ownProperties ? (0, codegen_1$q.or)(cond, (0, codegen_1$q.not)(isOwnProperty(gen, data2, property))) : cond;
}
code.noPropertyInData = noPropertyInData;
function allSchemaProperties(schemaMap) {
  return schemaMap ? Object.keys(schemaMap).filter((p) => p !== "__proto__") : [];
}
code.allSchemaProperties = allSchemaProperties;
function schemaProperties(it, schemaMap) {
  return allSchemaProperties(schemaMap).filter((p) => !(0, util_1$o.alwaysValidSchema)(it, schemaMap[p]));
}
code.schemaProperties = schemaProperties;
function callValidateCode({ schemaCode, data: data2, it: { gen, topSchemaRef, schemaPath, errorPath }, it }, func, context, passSchema) {
  const dataAndSchema = passSchema ? (0, codegen_1$q._)`${schemaCode}, ${data2}, ${topSchemaRef}${schemaPath}` : data2;
  const valCxt = [
    [names_1$5.default.instancePath, (0, codegen_1$q.strConcat)(names_1$5.default.instancePath, errorPath)],
    [names_1$5.default.parentData, it.parentData],
    [names_1$5.default.parentDataProperty, it.parentDataProperty],
    [names_1$5.default.rootData, names_1$5.default.rootData]
  ];
  if (it.opts.dynamicRef)
    valCxt.push([names_1$5.default.dynamicAnchors, names_1$5.default.dynamicAnchors]);
  const args = (0, codegen_1$q._)`${dataAndSchema}, ${gen.object(...valCxt)}`;
  return context !== codegen_1$q.nil ? (0, codegen_1$q._)`${func}.call(${context}, ${args})` : (0, codegen_1$q._)`${func}(${args})`;
}
code.callValidateCode = callValidateCode;
const newRegExp = (0, codegen_1$q._)`new RegExp`;
function usePattern({ gen, it: { opts } }, pattern2) {
  const u = opts.unicodeRegExp ? "u" : "";
  const { regExp } = opts.code;
  const rx = regExp(pattern2, u);
  return gen.scopeValue("pattern", {
    key: rx.toString(),
    ref: rx,
    code: (0, codegen_1$q._)`${regExp.code === "new RegExp" ? newRegExp : (0, util_2$1.useFunc)(gen, regExp)}(${pattern2}, ${u})`
  });
}
code.usePattern = usePattern;
function validateArray(cxt) {
  const { gen, data: data2, keyword: keyword2, it } = cxt;
  const valid = gen.name("valid");
  if (it.allErrors) {
    const validArr = gen.let("valid", true);
    validateItems(() => gen.assign(validArr, false));
    return validArr;
  }
  gen.var(valid, true);
  validateItems(() => gen.break());
  return valid;
  function validateItems(notValid) {
    const len = gen.const("len", (0, codegen_1$q._)`${data2}.length`);
    gen.forRange("i", 0, len, (i) => {
      cxt.subschema({
        keyword: keyword2,
        dataProp: i,
        dataPropType: util_1$o.Type.Num
      }, valid);
      gen.if((0, codegen_1$q.not)(valid), notValid);
    });
  }
}
code.validateArray = validateArray;
function validateUnion(cxt) {
  const { gen, schema, keyword: keyword2, it } = cxt;
  if (!Array.isArray(schema))
    throw new Error("ajv implementation error");
  const alwaysValid = schema.some((sch) => (0, util_1$o.alwaysValidSchema)(it, sch));
  if (alwaysValid && !it.opts.unevaluated)
    return;
  const valid = gen.let("valid", false);
  const schValid = gen.name("_valid");
  gen.block(() => schema.forEach((_sch, i) => {
    const schCxt = cxt.subschema({
      keyword: keyword2,
      schemaProp: i,
      compositeRule: true
    }, schValid);
    gen.assign(valid, (0, codegen_1$q._)`${valid} || ${schValid}`);
    const merged = cxt.mergeValidEvaluated(schCxt, schValid);
    if (!merged)
      gen.if((0, codegen_1$q.not)(valid));
  }));
  cxt.result(valid, () => cxt.reset(), () => cxt.error(true));
}
code.validateUnion = validateUnion;
Object.defineProperty(keyword, "__esModule", { value: true });
keyword.validateKeywordUsage = keyword.validSchemaType = keyword.funcKeywordCode = keyword.macroKeywordCode = void 0;
const codegen_1$p = codegen;
const names_1$4 = names$1;
const code_1$9 = code;
const errors_1$1 = errors;
function macroKeywordCode(cxt, def2) {
  const { gen, keyword: keyword2, schema, parentSchema, it } = cxt;
  const macroSchema = def2.macro.call(it.self, schema, parentSchema, it);
  const schemaRef = useKeyword(gen, keyword2, macroSchema);
  if (it.opts.validateSchema !== false)
    it.self.validateSchema(macroSchema, true);
  const valid = gen.name("valid");
  cxt.subschema({
    schema: macroSchema,
    schemaPath: codegen_1$p.nil,
    errSchemaPath: `${it.errSchemaPath}/${keyword2}`,
    topSchemaRef: schemaRef,
    compositeRule: true
  }, valid);
  cxt.pass(valid, () => cxt.error(true));
}
keyword.macroKeywordCode = macroKeywordCode;
function funcKeywordCode(cxt, def2) {
  var _a;
  const { gen, keyword: keyword2, schema, parentSchema, $data, it } = cxt;
  checkAsyncKeyword(it, def2);
  const validate2 = !$data && def2.compile ? def2.compile.call(it.self, schema, parentSchema, it) : def2.validate;
  const validateRef = useKeyword(gen, keyword2, validate2);
  const valid = gen.let("valid");
  cxt.block$data(valid, validateKeyword);
  cxt.ok((_a = def2.valid) !== null && _a !== void 0 ? _a : valid);
  function validateKeyword() {
    if (def2.errors === false) {
      assignValid();
      if (def2.modifying)
        modifyData(cxt);
      reportErrs(() => cxt.error());
    } else {
      const ruleErrs = def2.async ? validateAsync() : validateSync();
      if (def2.modifying)
        modifyData(cxt);
      reportErrs(() => addErrs(cxt, ruleErrs));
    }
  }
  function validateAsync() {
    const ruleErrs = gen.let("ruleErrs", null);
    gen.try(() => assignValid((0, codegen_1$p._)`await `), (e) => gen.assign(valid, false).if((0, codegen_1$p._)`${e} instanceof ${it.ValidationError}`, () => gen.assign(ruleErrs, (0, codegen_1$p._)`${e}.errors`), () => gen.throw(e)));
    return ruleErrs;
  }
  function validateSync() {
    const validateErrs = (0, codegen_1$p._)`${validateRef}.errors`;
    gen.assign(validateErrs, null);
    assignValid(codegen_1$p.nil);
    return validateErrs;
  }
  function assignValid(_await = def2.async ? (0, codegen_1$p._)`await ` : codegen_1$p.nil) {
    const passCxt = it.opts.passContext ? names_1$4.default.this : names_1$4.default.self;
    const passSchema = !("compile" in def2 && !$data || def2.schema === false);
    gen.assign(valid, (0, codegen_1$p._)`${_await}${(0, code_1$9.callValidateCode)(cxt, validateRef, passCxt, passSchema)}`, def2.modifying);
  }
  function reportErrs(errors2) {
    var _a2;
    gen.if((0, codegen_1$p.not)((_a2 = def2.valid) !== null && _a2 !== void 0 ? _a2 : valid), errors2);
  }
}
keyword.funcKeywordCode = funcKeywordCode;
function modifyData(cxt) {
  const { gen, data: data2, it } = cxt;
  gen.if(it.parentData, () => gen.assign(data2, (0, codegen_1$p._)`${it.parentData}[${it.parentDataProperty}]`));
}
function addErrs(cxt, errs) {
  const { gen } = cxt;
  gen.if((0, codegen_1$p._)`Array.isArray(${errs})`, () => {
    gen.assign(names_1$4.default.vErrors, (0, codegen_1$p._)`${names_1$4.default.vErrors} === null ? ${errs} : ${names_1$4.default.vErrors}.concat(${errs})`).assign(names_1$4.default.errors, (0, codegen_1$p._)`${names_1$4.default.vErrors}.length`);
    (0, errors_1$1.extendErrors)(cxt);
  }, () => cxt.error());
}
function checkAsyncKeyword({ schemaEnv }, def2) {
  if (def2.async && !schemaEnv.$async)
    throw new Error("async keyword in sync schema");
}
function useKeyword(gen, keyword2, result) {
  if (result === void 0)
    throw new Error(`keyword "${keyword2}" failed to compile`);
  return gen.scopeValue("keyword", typeof result == "function" ? { ref: result } : { ref: result, code: (0, codegen_1$p.stringify)(result) });
}
function validSchemaType(schema, schemaType, allowUndefined = false) {
  return !schemaType.length || schemaType.some((st) => st === "array" ? Array.isArray(schema) : st === "object" ? schema && typeof schema == "object" && !Array.isArray(schema) : typeof schema == st || allowUndefined && typeof schema == "undefined");
}
keyword.validSchemaType = validSchemaType;
function validateKeywordUsage({ schema, opts, self: self2, errSchemaPath }, def2, keyword2) {
  if (Array.isArray(def2.keyword) ? !def2.keyword.includes(keyword2) : def2.keyword !== keyword2) {
    throw new Error("ajv implementation error");
  }
  const deps = def2.dependencies;
  if (deps === null || deps === void 0 ? void 0 : deps.some((kwd) => !Object.prototype.hasOwnProperty.call(schema, kwd))) {
    throw new Error(`parent schema must have dependencies of ${keyword2}: ${deps.join(",")}`);
  }
  if (def2.validateSchema) {
    const valid = def2.validateSchema(schema[keyword2]);
    if (!valid) {
      const msg = `keyword "${keyword2}" value is invalid at path "${errSchemaPath}": ` + self2.errorsText(def2.validateSchema.errors);
      if (opts.validateSchema === "log")
        self2.logger.error(msg);
      else
        throw new Error(msg);
    }
  }
}
keyword.validateKeywordUsage = validateKeywordUsage;
var subschema = {};
Object.defineProperty(subschema, "__esModule", { value: true });
subschema.extendSubschemaMode = subschema.extendSubschemaData = subschema.getSubschema = void 0;
const codegen_1$o = codegen;
const util_1$n = util;
function getSubschema(it, { keyword: keyword2, schemaProp, schema, schemaPath, errSchemaPath, topSchemaRef }) {
  if (keyword2 !== void 0 && schema !== void 0) {
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  }
  if (keyword2 !== void 0) {
    const sch = it.schema[keyword2];
    return schemaProp === void 0 ? {
      schema: sch,
      schemaPath: (0, codegen_1$o._)`${it.schemaPath}${(0, codegen_1$o.getProperty)(keyword2)}`,
      errSchemaPath: `${it.errSchemaPath}/${keyword2}`
    } : {
      schema: sch[schemaProp],
      schemaPath: (0, codegen_1$o._)`${it.schemaPath}${(0, codegen_1$o.getProperty)(keyword2)}${(0, codegen_1$o.getProperty)(schemaProp)}`,
      errSchemaPath: `${it.errSchemaPath}/${keyword2}/${(0, util_1$n.escapeFragment)(schemaProp)}`
    };
  }
  if (schema !== void 0) {
    if (schemaPath === void 0 || errSchemaPath === void 0 || topSchemaRef === void 0) {
      throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
    }
    return {
      schema,
      schemaPath,
      topSchemaRef,
      errSchemaPath
    };
  }
  throw new Error('either "keyword" or "schema" must be passed');
}
subschema.getSubschema = getSubschema;
function extendSubschemaData(subschema2, it, { dataProp, dataPropType: dpType, data: data2, dataTypes, propertyName }) {
  if (data2 !== void 0 && dataProp !== void 0) {
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  }
  const { gen } = it;
  if (dataProp !== void 0) {
    const { errorPath, dataPathArr, opts } = it;
    const nextData = gen.let("data", (0, codegen_1$o._)`${it.data}${(0, codegen_1$o.getProperty)(dataProp)}`, true);
    dataContextProps(nextData);
    subschema2.errorPath = (0, codegen_1$o.str)`${errorPath}${(0, util_1$n.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax)}`;
    subschema2.parentDataProperty = (0, codegen_1$o._)`${dataProp}`;
    subschema2.dataPathArr = [...dataPathArr, subschema2.parentDataProperty];
  }
  if (data2 !== void 0) {
    const nextData = data2 instanceof codegen_1$o.Name ? data2 : gen.let("data", data2, true);
    dataContextProps(nextData);
    if (propertyName !== void 0)
      subschema2.propertyName = propertyName;
  }
  if (dataTypes)
    subschema2.dataTypes = dataTypes;
  function dataContextProps(_nextData) {
    subschema2.data = _nextData;
    subschema2.dataLevel = it.dataLevel + 1;
    subschema2.dataTypes = [];
    it.definedProperties = /* @__PURE__ */ new Set();
    subschema2.parentData = it.data;
    subschema2.dataNames = [...it.dataNames, _nextData];
  }
}
subschema.extendSubschemaData = extendSubschemaData;
function extendSubschemaMode(subschema2, { jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors }) {
  if (compositeRule !== void 0)
    subschema2.compositeRule = compositeRule;
  if (createErrors !== void 0)
    subschema2.createErrors = createErrors;
  if (allErrors !== void 0)
    subschema2.allErrors = allErrors;
  subschema2.jtdDiscriminator = jtdDiscriminator;
  subschema2.jtdMetadata = jtdMetadata;
}
subschema.extendSubschemaMode = extendSubschemaMode;
var resolve$1 = {};
var fastDeepEqual = function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys2;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys2 = Object.keys(a);
    length = keys2.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys2[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys2[i];
      if (!equal(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
var jsonSchemaTraverse = { exports: {} };
var traverse$1 = jsonSchemaTraverse.exports = function(schema, opts, cb) {
  if (typeof opts == "function") {
    cb = opts;
    opts = {};
  }
  cb = opts.cb || cb;
  var pre = typeof cb == "function" ? cb : cb.pre || function() {
  };
  var post = cb.post || function() {
  };
  _traverse(opts, pre, post, schema, "", schema);
};
traverse$1.keywords = {
  additionalItems: true,
  items: true,
  contains: true,
  additionalProperties: true,
  propertyNames: true,
  not: true,
  if: true,
  then: true,
  else: true
};
traverse$1.arrayKeywords = {
  items: true,
  allOf: true,
  anyOf: true,
  oneOf: true
};
traverse$1.propsKeywords = {
  $defs: true,
  definitions: true,
  properties: true,
  patternProperties: true,
  dependencies: true
};
traverse$1.skipKeywords = {
  default: true,
  enum: true,
  const: true,
  required: true,
  maximum: true,
  minimum: true,
  exclusiveMaximum: true,
  exclusiveMinimum: true,
  multipleOf: true,
  maxLength: true,
  minLength: true,
  pattern: true,
  format: true,
  maxItems: true,
  minItems: true,
  uniqueItems: true,
  maxProperties: true,
  minProperties: true
};
function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
  if (schema && typeof schema == "object" && !Array.isArray(schema)) {
    pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    for (var key in schema) {
      var sch = schema[key];
      if (Array.isArray(sch)) {
        if (key in traverse$1.arrayKeywords) {
          for (var i = 0; i < sch.length; i++)
            _traverse(opts, pre, post, sch[i], jsonPtr + "/" + key + "/" + i, rootSchema, jsonPtr, key, schema, i);
        }
      } else if (key in traverse$1.propsKeywords) {
        if (sch && typeof sch == "object") {
          for (var prop in sch)
            _traverse(opts, pre, post, sch[prop], jsonPtr + "/" + key + "/" + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
        }
      } else if (key in traverse$1.keywords || opts.allKeys && !(key in traverse$1.skipKeywords)) {
        _traverse(opts, pre, post, sch, jsonPtr + "/" + key, rootSchema, jsonPtr, key, schema);
      }
    }
    post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
  }
}
function escapeJsonPtr(str) {
  return str.replace(/~/g, "~0").replace(/\//g, "~1");
}
Object.defineProperty(resolve$1, "__esModule", { value: true });
resolve$1.getSchemaRefs = resolve$1.resolveUrl = resolve$1.normalizeId = resolve$1._getFullPath = resolve$1.getFullPath = resolve$1.inlineRef = void 0;
const util_1$m = util;
const equal$2 = fastDeepEqual;
const traverse = jsonSchemaTraverse.exports;
const SIMPLE_INLINED = /* @__PURE__ */ new Set([
  "type",
  "format",
  "pattern",
  "maxLength",
  "minLength",
  "maxProperties",
  "minProperties",
  "maxItems",
  "minItems",
  "maximum",
  "minimum",
  "uniqueItems",
  "multipleOf",
  "required",
  "enum",
  "const"
]);
function inlineRef(schema, limit = true) {
  if (typeof schema == "boolean")
    return true;
  if (limit === true)
    return !hasRef(schema);
  if (!limit)
    return false;
  return countKeys(schema) <= limit;
}
resolve$1.inlineRef = inlineRef;
const REF_KEYWORDS = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function hasRef(schema) {
  for (const key in schema) {
    if (REF_KEYWORDS.has(key))
      return true;
    const sch = schema[key];
    if (Array.isArray(sch) && sch.some(hasRef))
      return true;
    if (typeof sch == "object" && hasRef(sch))
      return true;
  }
  return false;
}
function countKeys(schema) {
  let count = 0;
  for (const key in schema) {
    if (key === "$ref")
      return Infinity;
    count++;
    if (SIMPLE_INLINED.has(key))
      continue;
    if (typeof schema[key] == "object") {
      (0, util_1$m.eachItem)(schema[key], (sch) => count += countKeys(sch));
    }
    if (count === Infinity)
      return Infinity;
  }
  return count;
}
function getFullPath(resolver, id2 = "", normalize) {
  if (normalize !== false)
    id2 = normalizeId(id2);
  const p = resolver.parse(id2);
  return _getFullPath(resolver, p);
}
resolve$1.getFullPath = getFullPath;
function _getFullPath(resolver, p) {
  const serialized = resolver.serialize(p);
  return serialized.split("#")[0] + "#";
}
resolve$1._getFullPath = _getFullPath;
const TRAILING_SLASH_HASH = /#\/?$/;
function normalizeId(id2) {
  return id2 ? id2.replace(TRAILING_SLASH_HASH, "") : "";
}
resolve$1.normalizeId = normalizeId;
function resolveUrl(resolver, baseId, id2) {
  id2 = normalizeId(id2);
  return resolver.resolve(baseId, id2);
}
resolve$1.resolveUrl = resolveUrl;
const ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
function getSchemaRefs(schema, baseId) {
  if (typeof schema == "boolean")
    return {};
  const { schemaId, uriResolver } = this.opts;
  const schId = normalizeId(schema[schemaId] || baseId);
  const baseIds = { "": schId };
  const pathPrefix = getFullPath(uriResolver, schId, false);
  const localRefs = {};
  const schemaRefs = /* @__PURE__ */ new Set();
  traverse(schema, { allKeys: true }, (sch, jsonPtr, _, parentJsonPtr) => {
    if (parentJsonPtr === void 0)
      return;
    const fullPath = pathPrefix + jsonPtr;
    let baseId2 = baseIds[parentJsonPtr];
    if (typeof sch[schemaId] == "string")
      baseId2 = addRef.call(this, sch[schemaId]);
    addAnchor.call(this, sch.$anchor);
    addAnchor.call(this, sch.$dynamicAnchor);
    baseIds[jsonPtr] = baseId2;
    function addRef(ref2) {
      const _resolve = this.opts.uriResolver.resolve;
      ref2 = normalizeId(baseId2 ? _resolve(baseId2, ref2) : ref2);
      if (schemaRefs.has(ref2))
        throw ambiguos(ref2);
      schemaRefs.add(ref2);
      let schOrRef = this.refs[ref2];
      if (typeof schOrRef == "string")
        schOrRef = this.refs[schOrRef];
      if (typeof schOrRef == "object") {
        checkAmbiguosRef(sch, schOrRef.schema, ref2);
      } else if (ref2 !== normalizeId(fullPath)) {
        if (ref2[0] === "#") {
          checkAmbiguosRef(sch, localRefs[ref2], ref2);
          localRefs[ref2] = sch;
        } else {
          this.refs[ref2] = fullPath;
        }
      }
      return ref2;
    }
    function addAnchor(anchor) {
      if (typeof anchor == "string") {
        if (!ANCHOR.test(anchor))
          throw new Error(`invalid anchor "${anchor}"`);
        addRef.call(this, `#${anchor}`);
      }
    }
  });
  return localRefs;
  function checkAmbiguosRef(sch1, sch2, ref2) {
    if (sch2 !== void 0 && !equal$2(sch1, sch2))
      throw ambiguos(ref2);
  }
  function ambiguos(ref2) {
    return new Error(`reference "${ref2}" resolves to more than one schema`);
  }
}
resolve$1.getSchemaRefs = getSchemaRefs;
Object.defineProperty(validate, "__esModule", { value: true });
validate.getData = validate.KeywordCxt = validate.validateFunctionCode = void 0;
const boolSchema_1 = boolSchema;
const dataType_1$1 = dataType;
const applicability_1 = applicability;
const dataType_2 = dataType;
const defaults_1 = defaults;
const keyword_1 = keyword;
const subschema_1 = subschema;
const codegen_1$n = codegen;
const names_1$3 = names$1;
const resolve_1$2 = resolve$1;
const util_1$l = util;
const errors_1 = errors;
function validateFunctionCode(it) {
  if (isSchemaObj(it)) {
    checkKeywords(it);
    if (schemaCxtHasRules(it)) {
      topSchemaObjCode(it);
      return;
    }
  }
  validateFunction(it, () => (0, boolSchema_1.topBoolOrEmptySchema)(it));
}
validate.validateFunctionCode = validateFunctionCode;
function validateFunction({ gen, validateName, schema, schemaEnv, opts }, body) {
  if (opts.code.es5) {
    gen.func(validateName, (0, codegen_1$n._)`${names_1$3.default.data}, ${names_1$3.default.valCxt}`, schemaEnv.$async, () => {
      gen.code((0, codegen_1$n._)`"use strict"; ${funcSourceUrl(schema, opts)}`);
      destructureValCxtES5(gen, opts);
      gen.code(body);
    });
  } else {
    gen.func(validateName, (0, codegen_1$n._)`${names_1$3.default.data}, ${destructureValCxt(opts)}`, schemaEnv.$async, () => gen.code(funcSourceUrl(schema, opts)).code(body));
  }
}
function destructureValCxt(opts) {
  return (0, codegen_1$n._)`{${names_1$3.default.instancePath}="", ${names_1$3.default.parentData}, ${names_1$3.default.parentDataProperty}, ${names_1$3.default.rootData}=${names_1$3.default.data}${opts.dynamicRef ? (0, codegen_1$n._)`, ${names_1$3.default.dynamicAnchors}={}` : codegen_1$n.nil}}={}`;
}
function destructureValCxtES5(gen, opts) {
  gen.if(names_1$3.default.valCxt, () => {
    gen.var(names_1$3.default.instancePath, (0, codegen_1$n._)`${names_1$3.default.valCxt}.${names_1$3.default.instancePath}`);
    gen.var(names_1$3.default.parentData, (0, codegen_1$n._)`${names_1$3.default.valCxt}.${names_1$3.default.parentData}`);
    gen.var(names_1$3.default.parentDataProperty, (0, codegen_1$n._)`${names_1$3.default.valCxt}.${names_1$3.default.parentDataProperty}`);
    gen.var(names_1$3.default.rootData, (0, codegen_1$n._)`${names_1$3.default.valCxt}.${names_1$3.default.rootData}`);
    if (opts.dynamicRef)
      gen.var(names_1$3.default.dynamicAnchors, (0, codegen_1$n._)`${names_1$3.default.valCxt}.${names_1$3.default.dynamicAnchors}`);
  }, () => {
    gen.var(names_1$3.default.instancePath, (0, codegen_1$n._)`""`);
    gen.var(names_1$3.default.parentData, (0, codegen_1$n._)`undefined`);
    gen.var(names_1$3.default.parentDataProperty, (0, codegen_1$n._)`undefined`);
    gen.var(names_1$3.default.rootData, names_1$3.default.data);
    if (opts.dynamicRef)
      gen.var(names_1$3.default.dynamicAnchors, (0, codegen_1$n._)`{}`);
  });
}
function topSchemaObjCode(it) {
  const { schema, opts, gen } = it;
  validateFunction(it, () => {
    if (opts.$comment && schema.$comment)
      commentKeyword(it);
    checkNoDefault(it);
    gen.let(names_1$3.default.vErrors, null);
    gen.let(names_1$3.default.errors, 0);
    if (opts.unevaluated)
      resetEvaluated(it);
    typeAndKeywords(it);
    returnResults(it);
  });
  return;
}
function resetEvaluated(it) {
  const { gen, validateName } = it;
  it.evaluated = gen.const("evaluated", (0, codegen_1$n._)`${validateName}.evaluated`);
  gen.if((0, codegen_1$n._)`${it.evaluated}.dynamicProps`, () => gen.assign((0, codegen_1$n._)`${it.evaluated}.props`, (0, codegen_1$n._)`undefined`));
  gen.if((0, codegen_1$n._)`${it.evaluated}.dynamicItems`, () => gen.assign((0, codegen_1$n._)`${it.evaluated}.items`, (0, codegen_1$n._)`undefined`));
}
function funcSourceUrl(schema, opts) {
  const schId = typeof schema == "object" && schema[opts.schemaId];
  return schId && (opts.code.source || opts.code.process) ? (0, codegen_1$n._)`/*# sourceURL=${schId} */` : codegen_1$n.nil;
}
function subschemaCode(it, valid) {
  if (isSchemaObj(it)) {
    checkKeywords(it);
    if (schemaCxtHasRules(it)) {
      subSchemaObjCode(it, valid);
      return;
    }
  }
  (0, boolSchema_1.boolOrEmptySchema)(it, valid);
}
function schemaCxtHasRules({ schema, self: self2 }) {
  if (typeof schema == "boolean")
    return !schema;
  for (const key in schema)
    if (self2.RULES.all[key])
      return true;
  return false;
}
function isSchemaObj(it) {
  return typeof it.schema != "boolean";
}
function subSchemaObjCode(it, valid) {
  const { schema, gen, opts } = it;
  if (opts.$comment && schema.$comment)
    commentKeyword(it);
  updateContext(it);
  checkAsyncSchema(it);
  const errsCount = gen.const("_errs", names_1$3.default.errors);
  typeAndKeywords(it, errsCount);
  gen.var(valid, (0, codegen_1$n._)`${errsCount} === ${names_1$3.default.errors}`);
}
function checkKeywords(it) {
  (0, util_1$l.checkUnknownRules)(it);
  checkRefsAndKeywords(it);
}
function typeAndKeywords(it, errsCount) {
  if (it.opts.jtd)
    return schemaKeywords(it, [], false, errsCount);
  const types2 = (0, dataType_1$1.getSchemaTypes)(it.schema);
  const checkedTypes = (0, dataType_1$1.coerceAndCheckDataType)(it, types2);
  schemaKeywords(it, types2, !checkedTypes, errsCount);
}
function checkRefsAndKeywords(it) {
  const { schema, errSchemaPath, opts, self: self2 } = it;
  if (schema.$ref && opts.ignoreKeywordsWithRef && (0, util_1$l.schemaHasRulesButRef)(schema, self2.RULES)) {
    self2.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`);
  }
}
function checkNoDefault(it) {
  const { schema, opts } = it;
  if (schema.default !== void 0 && opts.useDefaults && opts.strictSchema) {
    (0, util_1$l.checkStrictMode)(it, "default is ignored in the schema root");
  }
}
function updateContext(it) {
  const schId = it.schema[it.opts.schemaId];
  if (schId)
    it.baseId = (0, resolve_1$2.resolveUrl)(it.opts.uriResolver, it.baseId, schId);
}
function checkAsyncSchema(it) {
  if (it.schema.$async && !it.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function commentKeyword({ gen, schemaEnv, schema, errSchemaPath, opts }) {
  const msg = schema.$comment;
  if (opts.$comment === true) {
    gen.code((0, codegen_1$n._)`${names_1$3.default.self}.logger.log(${msg})`);
  } else if (typeof opts.$comment == "function") {
    const schemaPath = (0, codegen_1$n.str)`${errSchemaPath}/$comment`;
    const rootName = gen.scopeValue("root", { ref: schemaEnv.root });
    gen.code((0, codegen_1$n._)`${names_1$3.default.self}.opts.$comment(${msg}, ${schemaPath}, ${rootName}.schema)`);
  }
}
function returnResults(it) {
  const { gen, schemaEnv, validateName, ValidationError: ValidationError2, opts } = it;
  if (schemaEnv.$async) {
    gen.if((0, codegen_1$n._)`${names_1$3.default.errors} === 0`, () => gen.return(names_1$3.default.data), () => gen.throw((0, codegen_1$n._)`new ${ValidationError2}(${names_1$3.default.vErrors})`));
  } else {
    gen.assign((0, codegen_1$n._)`${validateName}.errors`, names_1$3.default.vErrors);
    if (opts.unevaluated)
      assignEvaluated(it);
    gen.return((0, codegen_1$n._)`${names_1$3.default.errors} === 0`);
  }
}
function assignEvaluated({ gen, evaluated, props: props2, items: items2 }) {
  if (props2 instanceof codegen_1$n.Name)
    gen.assign((0, codegen_1$n._)`${evaluated}.props`, props2);
  if (items2 instanceof codegen_1$n.Name)
    gen.assign((0, codegen_1$n._)`${evaluated}.items`, items2);
}
function schemaKeywords(it, types2, typeErrors, errsCount) {
  const { gen, schema, data: data2, allErrors, opts, self: self2 } = it;
  const { RULES } = self2;
  if (schema.$ref && (opts.ignoreKeywordsWithRef || !(0, util_1$l.schemaHasRulesButRef)(schema, RULES))) {
    gen.block(() => keywordCode(it, "$ref", RULES.all.$ref.definition));
    return;
  }
  if (!opts.jtd)
    checkStrictTypes(it, types2);
  gen.block(() => {
    for (const group of RULES.rules)
      groupKeywords(group);
    groupKeywords(RULES.post);
  });
  function groupKeywords(group) {
    if (!(0, applicability_1.shouldUseGroup)(schema, group))
      return;
    if (group.type) {
      gen.if((0, dataType_2.checkDataType)(group.type, data2, opts.strictNumbers));
      iterateKeywords(it, group);
      if (types2.length === 1 && types2[0] === group.type && typeErrors) {
        gen.else();
        (0, dataType_2.reportTypeError)(it);
      }
      gen.endIf();
    } else {
      iterateKeywords(it, group);
    }
    if (!allErrors)
      gen.if((0, codegen_1$n._)`${names_1$3.default.errors} === ${errsCount || 0}`);
  }
}
function iterateKeywords(it, group) {
  const { gen, schema, opts: { useDefaults } } = it;
  if (useDefaults)
    (0, defaults_1.assignDefaults)(it, group.type);
  gen.block(() => {
    for (const rule of group.rules) {
      if ((0, applicability_1.shouldUseRule)(schema, rule)) {
        keywordCode(it, rule.keyword, rule.definition, group.type);
      }
    }
  });
}
function checkStrictTypes(it, types2) {
  if (it.schemaEnv.meta || !it.opts.strictTypes)
    return;
  checkContextTypes(it, types2);
  if (!it.opts.allowUnionTypes)
    checkMultipleTypes(it, types2);
  checkKeywordTypes(it, it.dataTypes);
}
function checkContextTypes(it, types2) {
  if (!types2.length)
    return;
  if (!it.dataTypes.length) {
    it.dataTypes = types2;
    return;
  }
  types2.forEach((t) => {
    if (!includesType(it.dataTypes, t)) {
      strictTypesError(it, `type "${t}" not allowed by context "${it.dataTypes.join(",")}"`);
    }
  });
  it.dataTypes = it.dataTypes.filter((t) => includesType(types2, t));
}
function checkMultipleTypes(it, ts) {
  if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) {
    strictTypesError(it, "use allowUnionTypes to allow union type keyword");
  }
}
function checkKeywordTypes(it, ts) {
  const rules2 = it.self.RULES.all;
  for (const keyword2 in rules2) {
    const rule = rules2[keyword2];
    if (typeof rule == "object" && (0, applicability_1.shouldUseRule)(it.schema, rule)) {
      const { type: type2 } = rule.definition;
      if (type2.length && !type2.some((t) => hasApplicableType(ts, t))) {
        strictTypesError(it, `missing type "${type2.join(",")}" for keyword "${keyword2}"`);
      }
    }
  }
}
function hasApplicableType(schTs, kwdT) {
  return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
}
function includesType(ts, t) {
  return ts.includes(t) || t === "integer" && ts.includes("number");
}
function strictTypesError(it, msg) {
  const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
  msg += ` at "${schemaPath}" (strictTypes)`;
  (0, util_1$l.checkStrictMode)(it, msg, it.opts.strictTypes);
}
class KeywordCxt {
  constructor(it, def2, keyword2) {
    (0, keyword_1.validateKeywordUsage)(it, def2, keyword2);
    this.gen = it.gen;
    this.allErrors = it.allErrors;
    this.keyword = keyword2;
    this.data = it.data;
    this.schema = it.schema[keyword2];
    this.$data = def2.$data && it.opts.$data && this.schema && this.schema.$data;
    this.schemaValue = (0, util_1$l.schemaRefOrVal)(it, this.schema, keyword2, this.$data);
    this.schemaType = def2.schemaType;
    this.parentSchema = it.schema;
    this.params = {};
    this.it = it;
    this.def = def2;
    if (this.$data) {
      this.schemaCode = it.gen.const("vSchema", getData(this.$data, it));
    } else {
      this.schemaCode = this.schemaValue;
      if (!(0, keyword_1.validSchemaType)(this.schema, def2.schemaType, def2.allowUndefined)) {
        throw new Error(`${keyword2} value must be ${JSON.stringify(def2.schemaType)}`);
      }
    }
    if ("code" in def2 ? def2.trackErrors : def2.errors !== false) {
      this.errsCount = it.gen.const("_errs", names_1$3.default.errors);
    }
  }
  result(condition, successAction, failAction) {
    this.failResult((0, codegen_1$n.not)(condition), successAction, failAction);
  }
  failResult(condition, successAction, failAction) {
    this.gen.if(condition);
    if (failAction)
      failAction();
    else
      this.error();
    if (successAction) {
      this.gen.else();
      successAction();
      if (this.allErrors)
        this.gen.endIf();
    } else {
      if (this.allErrors)
        this.gen.endIf();
      else
        this.gen.else();
    }
  }
  pass(condition, failAction) {
    this.failResult((0, codegen_1$n.not)(condition), void 0, failAction);
  }
  fail(condition) {
    if (condition === void 0) {
      this.error();
      if (!this.allErrors)
        this.gen.if(false);
      return;
    }
    this.gen.if(condition);
    this.error();
    if (this.allErrors)
      this.gen.endIf();
    else
      this.gen.else();
  }
  fail$data(condition) {
    if (!this.$data)
      return this.fail(condition);
    const { schemaCode } = this;
    this.fail((0, codegen_1$n._)`${schemaCode} !== undefined && (${(0, codegen_1$n.or)(this.invalid$data(), condition)})`);
  }
  error(append, errorParams, errorPaths) {
    if (errorParams) {
      this.setParams(errorParams);
      this._error(append, errorPaths);
      this.setParams({});
      return;
    }
    this._error(append, errorPaths);
  }
  _error(append, errorPaths) {
    (append ? errors_1.reportExtraError : errors_1.reportError)(this, this.def.error, errorPaths);
  }
  $dataError() {
    (0, errors_1.reportError)(this, this.def.$dataError || errors_1.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, errors_1.resetErrorsCount)(this.gen, this.errsCount);
  }
  ok(cond) {
    if (!this.allErrors)
      this.gen.if(cond);
  }
  setParams(obj, assign) {
    if (assign)
      Object.assign(this.params, obj);
    else
      this.params = obj;
  }
  block$data(valid, codeBlock, $dataValid = codegen_1$n.nil) {
    this.gen.block(() => {
      this.check$data(valid, $dataValid);
      codeBlock();
    });
  }
  check$data(valid = codegen_1$n.nil, $dataValid = codegen_1$n.nil) {
    if (!this.$data)
      return;
    const { gen, schemaCode, schemaType, def: def2 } = this;
    gen.if((0, codegen_1$n.or)((0, codegen_1$n._)`${schemaCode} === undefined`, $dataValid));
    if (valid !== codegen_1$n.nil)
      gen.assign(valid, true);
    if (schemaType.length || def2.validateSchema) {
      gen.elseIf(this.invalid$data());
      this.$dataError();
      if (valid !== codegen_1$n.nil)
        gen.assign(valid, false);
    }
    gen.else();
  }
  invalid$data() {
    const { gen, schemaCode, schemaType, def: def2, it } = this;
    return (0, codegen_1$n.or)(wrong$DataType(), invalid$DataSchema());
    function wrong$DataType() {
      if (schemaType.length) {
        if (!(schemaCode instanceof codegen_1$n.Name))
          throw new Error("ajv implementation error");
        const st = Array.isArray(schemaType) ? schemaType : [schemaType];
        return (0, codegen_1$n._)`${(0, dataType_2.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, dataType_2.DataType.Wrong)}`;
      }
      return codegen_1$n.nil;
    }
    function invalid$DataSchema() {
      if (def2.validateSchema) {
        const validateSchemaRef = gen.scopeValue("validate$data", { ref: def2.validateSchema });
        return (0, codegen_1$n._)`!${validateSchemaRef}(${schemaCode})`;
      }
      return codegen_1$n.nil;
    }
  }
  subschema(appl, valid) {
    const subschema2 = (0, subschema_1.getSubschema)(this.it, appl);
    (0, subschema_1.extendSubschemaData)(subschema2, this.it, appl);
    (0, subschema_1.extendSubschemaMode)(subschema2, appl);
    const nextContext = __spreadProps(__spreadValues(__spreadValues({}, this.it), subschema2), { items: void 0, props: void 0 });
    subschemaCode(nextContext, valid);
    return nextContext;
  }
  mergeEvaluated(schemaCxt, toName) {
    const { it, gen } = this;
    if (!it.opts.unevaluated)
      return;
    if (it.props !== true && schemaCxt.props !== void 0) {
      it.props = util_1$l.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName);
    }
    if (it.items !== true && schemaCxt.items !== void 0) {
      it.items = util_1$l.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName);
    }
  }
  mergeValidEvaluated(schemaCxt, valid) {
    const { it, gen } = this;
    if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
      gen.if(valid, () => this.mergeEvaluated(schemaCxt, codegen_1$n.Name));
      return true;
    }
  }
}
validate.KeywordCxt = KeywordCxt;
function keywordCode(it, keyword2, def2, ruleType) {
  const cxt = new KeywordCxt(it, def2, keyword2);
  if ("code" in def2) {
    def2.code(cxt, ruleType);
  } else if (cxt.$data && def2.validate) {
    (0, keyword_1.funcKeywordCode)(cxt, def2);
  } else if ("macro" in def2) {
    (0, keyword_1.macroKeywordCode)(cxt, def2);
  } else if (def2.compile || def2.validate) {
    (0, keyword_1.funcKeywordCode)(cxt, def2);
  }
}
const JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
const RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function getData($data, { dataLevel, dataNames, dataPathArr }) {
  let jsonPointer;
  let data2;
  if ($data === "")
    return names_1$3.default.rootData;
  if ($data[0] === "/") {
    if (!JSON_POINTER.test($data))
      throw new Error(`Invalid JSON-pointer: ${$data}`);
    jsonPointer = $data;
    data2 = names_1$3.default.rootData;
  } else {
    const matches = RELATIVE_JSON_POINTER.exec($data);
    if (!matches)
      throw new Error(`Invalid JSON-pointer: ${$data}`);
    const up = +matches[1];
    jsonPointer = matches[2];
    if (jsonPointer === "#") {
      if (up >= dataLevel)
        throw new Error(errorMsg("property/index", up));
      return dataPathArr[dataLevel - up];
    }
    if (up > dataLevel)
      throw new Error(errorMsg("data", up));
    data2 = dataNames[dataLevel - up];
    if (!jsonPointer)
      return data2;
  }
  let expr = data2;
  const segments = jsonPointer.split("/");
  for (const segment of segments) {
    if (segment) {
      data2 = (0, codegen_1$n._)`${data2}${(0, codegen_1$n.getProperty)((0, util_1$l.unescapeJsonPointer)(segment))}`;
      expr = (0, codegen_1$n._)`${expr} && ${data2}`;
    }
  }
  return expr;
  function errorMsg(pointerType, up) {
    return `Cannot access ${pointerType} ${up} levels up, current level is ${dataLevel}`;
  }
}
validate.getData = getData;
var validation_error = {};
Object.defineProperty(validation_error, "__esModule", { value: true });
class ValidationError extends Error {
  constructor(errors2) {
    super("validation failed");
    this.errors = errors2;
    this.ajv = this.validation = true;
  }
}
validation_error.default = ValidationError;
var ref_error = {};
Object.defineProperty(ref_error, "__esModule", { value: true });
const resolve_1$1 = resolve$1;
class MissingRefError extends Error {
  constructor(resolver, baseId, ref2, msg) {
    super(msg || `can't resolve reference ${ref2} from id ${baseId}`);
    this.missingRef = (0, resolve_1$1.resolveUrl)(resolver, baseId, ref2);
    this.missingSchema = (0, resolve_1$1.normalizeId)((0, resolve_1$1.getFullPath)(resolver, this.missingRef));
  }
}
ref_error.default = MissingRefError;
var compile = {};
Object.defineProperty(compile, "__esModule", { value: true });
compile.resolveSchema = compile.getCompilingSchema = compile.resolveRef = compile.compileSchema = compile.SchemaEnv = void 0;
const codegen_1$m = codegen;
const validation_error_1 = validation_error;
const names_1$2 = names$1;
const resolve_1 = resolve$1;
const util_1$k = util;
const validate_1$1 = validate;
class SchemaEnv {
  constructor(env) {
    var _a;
    this.refs = {};
    this.dynamicAnchors = {};
    let schema;
    if (typeof env.schema == "object")
      schema = env.schema;
    this.schema = env.schema;
    this.schemaId = env.schemaId;
    this.root = env.root || this;
    this.baseId = (_a = env.baseId) !== null && _a !== void 0 ? _a : (0, resolve_1.normalizeId)(schema === null || schema === void 0 ? void 0 : schema[env.schemaId || "$id"]);
    this.schemaPath = env.schemaPath;
    this.localRefs = env.localRefs;
    this.meta = env.meta;
    this.$async = schema === null || schema === void 0 ? void 0 : schema.$async;
    this.refs = {};
  }
}
compile.SchemaEnv = SchemaEnv;
function compileSchema(sch) {
  const _sch = getCompilingSchema.call(this, sch);
  if (_sch)
    return _sch;
  const rootId = (0, resolve_1.getFullPath)(this.opts.uriResolver, sch.root.baseId);
  const { es5, lines } = this.opts.code;
  const { ownProperties } = this.opts;
  const gen = new codegen_1$m.CodeGen(this.scope, { es5, lines, ownProperties });
  let _ValidationError;
  if (sch.$async) {
    _ValidationError = gen.scopeValue("Error", {
      ref: validation_error_1.default,
      code: (0, codegen_1$m._)`require("ajv/dist/runtime/validation_error").default`
    });
  }
  const validateName = gen.scopeName("validate");
  sch.validateName = validateName;
  const schemaCxt = {
    gen,
    allErrors: this.opts.allErrors,
    data: names_1$2.default.data,
    parentData: names_1$2.default.parentData,
    parentDataProperty: names_1$2.default.parentDataProperty,
    dataNames: [names_1$2.default.data],
    dataPathArr: [codegen_1$m.nil],
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? { ref: sch.schema, code: (0, codegen_1$m.stringify)(sch.schema) } : { ref: sch.schema }),
    validateName,
    ValidationError: _ValidationError,
    schema: sch.schema,
    schemaEnv: sch,
    rootId,
    baseId: sch.baseId || rootId,
    schemaPath: codegen_1$m.nil,
    errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, codegen_1$m._)`""`,
    opts: this.opts,
    self: this
  };
  let sourceCode;
  try {
    this._compilations.add(sch);
    (0, validate_1$1.validateFunctionCode)(schemaCxt);
    gen.optimize(this.opts.code.optimize);
    const validateCode = gen.toString();
    sourceCode = `${gen.scopeRefs(names_1$2.default.scope)}return ${validateCode}`;
    if (this.opts.code.process)
      sourceCode = this.opts.code.process(sourceCode, sch);
    const makeValidate = new Function(`${names_1$2.default.self}`, `${names_1$2.default.scope}`, sourceCode);
    const validate2 = makeValidate(this, this.scope.get());
    this.scope.value(validateName, { ref: validate2 });
    validate2.errors = null;
    validate2.schema = sch.schema;
    validate2.schemaEnv = sch;
    if (sch.$async)
      validate2.$async = true;
    if (this.opts.code.source === true) {
      validate2.source = { validateName, validateCode, scopeValues: gen._values };
    }
    if (this.opts.unevaluated) {
      const { props: props2, items: items2 } = schemaCxt;
      validate2.evaluated = {
        props: props2 instanceof codegen_1$m.Name ? void 0 : props2,
        items: items2 instanceof codegen_1$m.Name ? void 0 : items2,
        dynamicProps: props2 instanceof codegen_1$m.Name,
        dynamicItems: items2 instanceof codegen_1$m.Name
      };
      if (validate2.source)
        validate2.source.evaluated = (0, codegen_1$m.stringify)(validate2.evaluated);
    }
    sch.validate = validate2;
    return sch;
  } catch (e) {
    delete sch.validate;
    delete sch.validateName;
    if (sourceCode)
      this.logger.error("Error compiling schema, function code:", sourceCode);
    throw e;
  } finally {
    this._compilations.delete(sch);
  }
}
compile.compileSchema = compileSchema;
function resolveRef(root2, baseId, ref2) {
  var _a;
  ref2 = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, ref2);
  const schOrFunc = root2.refs[ref2];
  if (schOrFunc)
    return schOrFunc;
  let _sch = resolve.call(this, root2, ref2);
  if (_sch === void 0) {
    const schema = (_a = root2.localRefs) === null || _a === void 0 ? void 0 : _a[ref2];
    const { schemaId } = this.opts;
    if (schema)
      _sch = new SchemaEnv({ schema, schemaId, root: root2, baseId });
  }
  if (_sch === void 0)
    return;
  return root2.refs[ref2] = inlineOrCompile.call(this, _sch);
}
compile.resolveRef = resolveRef;
function inlineOrCompile(sch) {
  if ((0, resolve_1.inlineRef)(sch.schema, this.opts.inlineRefs))
    return sch.schema;
  return sch.validate ? sch : compileSchema.call(this, sch);
}
function getCompilingSchema(schEnv) {
  for (const sch of this._compilations) {
    if (sameSchemaEnv(sch, schEnv))
      return sch;
  }
}
compile.getCompilingSchema = getCompilingSchema;
function sameSchemaEnv(s1, s2) {
  return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId;
}
function resolve(root2, ref2) {
  let sch;
  while (typeof (sch = this.refs[ref2]) == "string")
    ref2 = sch;
  return sch || this.schemas[ref2] || resolveSchema.call(this, root2, ref2);
}
function resolveSchema(root2, ref2) {
  const p = this.opts.uriResolver.parse(ref2);
  const refPath = (0, resolve_1._getFullPath)(this.opts.uriResolver, p);
  let baseId = (0, resolve_1.getFullPath)(this.opts.uriResolver, root2.baseId, void 0);
  if (Object.keys(root2.schema).length > 0 && refPath === baseId) {
    return getJsonPointer.call(this, p, root2);
  }
  const id2 = (0, resolve_1.normalizeId)(refPath);
  const schOrRef = this.refs[id2] || this.schemas[id2];
  if (typeof schOrRef == "string") {
    const sch = resolveSchema.call(this, root2, schOrRef);
    if (typeof (sch === null || sch === void 0 ? void 0 : sch.schema) !== "object")
      return;
    return getJsonPointer.call(this, p, sch);
  }
  if (typeof (schOrRef === null || schOrRef === void 0 ? void 0 : schOrRef.schema) !== "object")
    return;
  if (!schOrRef.validate)
    compileSchema.call(this, schOrRef);
  if (id2 === (0, resolve_1.normalizeId)(ref2)) {
    const { schema } = schOrRef;
    const { schemaId } = this.opts;
    const schId = schema[schemaId];
    if (schId)
      baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
    return new SchemaEnv({ schema, schemaId, root: root2, baseId });
  }
  return getJsonPointer.call(this, p, schOrRef);
}
compile.resolveSchema = resolveSchema;
const PREVENT_SCOPE_CHANGE = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function getJsonPointer(parsedRef, { baseId, schema, root: root2 }) {
  var _a;
  if (((_a = parsedRef.fragment) === null || _a === void 0 ? void 0 : _a[0]) !== "/")
    return;
  for (const part of parsedRef.fragment.slice(1).split("/")) {
    if (typeof schema === "boolean")
      return;
    const partSchema = schema[(0, util_1$k.unescapeFragment)(part)];
    if (partSchema === void 0)
      return;
    schema = partSchema;
    const schId = typeof schema === "object" && schema[this.opts.schemaId];
    if (!PREVENT_SCOPE_CHANGE.has(part) && schId) {
      baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
    }
  }
  let env;
  if (typeof schema != "boolean" && schema.$ref && !(0, util_1$k.schemaHasRulesButRef)(schema, this.RULES)) {
    const $ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schema.$ref);
    env = resolveSchema.call(this, root2, $ref);
  }
  const { schemaId } = this.opts;
  env = env || new SchemaEnv({ schema, schemaId, root: root2, baseId });
  if (env.schema !== env.root.schema)
    return env;
  return void 0;
}
const $id$1 = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#";
const description = "Meta-schema for $data reference (JSON AnySchema extension proposal)";
const type$1 = "object";
const required$1 = [
  "$data"
];
const properties$2 = {
  $data: {
    type: "string",
    anyOf: [
      {
        format: "relative-json-pointer"
      },
      {
        format: "json-pointer"
      }
    ]
  }
};
const additionalProperties$1 = false;
var require$$9 = {
  $id: $id$1,
  description,
  type: type$1,
  required: required$1,
  properties: properties$2,
  additionalProperties: additionalProperties$1
};
var uri$1 = {};
var uri_all = { exports: {} };
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
(function(module2, exports2) {
  (function(global2, factory) {
    factory(exports2);
  })(commonjsGlobal, function(exports3) {
    function merge2() {
      for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
        sets[_key] = arguments[_key];
      }
      if (sets.length > 1) {
        sets[0] = sets[0].slice(0, -1);
        var xl = sets.length - 1;
        for (var x = 1; x < xl; ++x) {
          sets[x] = sets[x].slice(1, -1);
        }
        sets[xl] = sets[xl].slice(1);
        return sets.join("");
      } else {
        return sets[0];
      }
    }
    function subexp(str) {
      return "(?:" + str + ")";
    }
    function typeOf(o) {
      return o === void 0 ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
    }
    function toUpperCase(str) {
      return str.toUpperCase();
    }
    function toArray(obj) {
      return obj !== void 0 && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
    }
    function assign(target, source) {
      var obj = target;
      if (source) {
        for (var key in source) {
          obj[key] = source[key];
        }
      }
      return obj;
    }
    function buildExps(isIRI) {
      var ALPHA$$ = "[A-Za-z]", DIGIT$$ = "[0-9]", HEXDIG$$2 = merge2(DIGIT$$, "[A-Fa-f]"), PCT_ENCODED$2 = subexp(subexp("%[EFef]" + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2) + "|" + subexp("%" + HEXDIG$$2 + HEXDIG$$2)), GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]", SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", RESERVED$$ = merge2(GEN_DELIMS$$, SUB_DELIMS$$), UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]", UNRESERVED$$2 = merge2(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$);
      subexp(ALPHA$$ + merge2(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*");
      subexp(subexp(PCT_ENCODED$2 + "|" + merge2(UNRESERVED$$2, SUB_DELIMS$$, "[\\:]")) + "*");
      var DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$), IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$), H16$ = subexp(HEXDIG$$2 + "{1,4}"), LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$), IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$), IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$), IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$), IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$), IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$), IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$), IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$), IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$), IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"), IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")), ZONEID$ = subexp(subexp(UNRESERVED$$2 + "|" + PCT_ENCODED$2) + "+");
      subexp("[vV]" + HEXDIG$$2 + "+\\." + merge2(UNRESERVED$$2, SUB_DELIMS$$, "[\\:]") + "+");
      subexp(subexp(PCT_ENCODED$2 + "|" + merge2(UNRESERVED$$2, SUB_DELIMS$$)) + "*");
      var PCHAR$ = subexp(PCT_ENCODED$2 + "|" + merge2(UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@]"));
      subexp(subexp(PCT_ENCODED$2 + "|" + merge2(UNRESERVED$$2, SUB_DELIMS$$, "[\\@]")) + "+");
      subexp(subexp(PCHAR$ + "|" + merge2("[\\/\\?]", IPRIVATE$$)) + "*");
      return {
        NOT_SCHEME: new RegExp(merge2("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
        NOT_USERINFO: new RegExp(merge2("[^\\%\\:]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
        NOT_HOST: new RegExp(merge2("[^\\%\\[\\]\\:]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
        NOT_PATH: new RegExp(merge2("[^\\%\\/\\:\\@]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
        NOT_PATH_NOSCHEME: new RegExp(merge2("[^\\%\\/\\@]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
        NOT_QUERY: new RegExp(merge2("[^\\%]", UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
        NOT_FRAGMENT: new RegExp(merge2("[^\\%]", UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
        ESCAPE: new RegExp(merge2("[^]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
        UNRESERVED: new RegExp(UNRESERVED$$2, "g"),
        OTHER_CHARS: new RegExp(merge2("[^\\%]", UNRESERVED$$2, RESERVED$$), "g"),
        PCT_ENCODED: new RegExp(PCT_ENCODED$2, "g"),
        IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
        IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$2 + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$")
      };
    }
    var URI_PROTOCOL = buildExps(false);
    var IRI_PROTOCOL = buildExps(true);
    var slicedToArray = function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    var toConsumableArray = function(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
          arr2[i] = arr[i];
        return arr2;
      } else {
        return Array.from(arr);
      }
    };
    var maxInt = 2147483647;
    var base = 36;
    var tMin = 1;
    var tMax = 26;
    var skew = 38;
    var damp = 700;
    var initialBias = 72;
    var initialN = 128;
    var delimiter = "-";
    var regexPunycode = /^xn--/;
    var regexNonASCII = /[^\0-\x7E]/;
    var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
    var errors2 = {
      "overflow": "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    var baseMinusTMin = base - tMin;
    var floor = Math.floor;
    var stringFromCharCode = String.fromCharCode;
    function error$12(type2) {
      throw new RangeError(errors2[type2]);
    }
    function map(array, fn) {
      var result = [];
      var length = array.length;
      while (length--) {
        result[length] = fn(array[length]);
      }
      return result;
    }
    function mapDomain(string, fn) {
      var parts = string.split("@");
      var result = "";
      if (parts.length > 1) {
        result = parts[0] + "@";
        string = parts[1];
      }
      string = string.replace(regexSeparators, ".");
      var labels = string.split(".");
      var encoded = map(labels, fn).join(".");
      return result + encoded;
    }
    function ucs2decode(string) {
      var output = [];
      var counter = 0;
      var length = string.length;
      while (counter < length) {
        var value = string.charCodeAt(counter++);
        if (value >= 55296 && value <= 56319 && counter < length) {
          var extra = string.charCodeAt(counter++);
          if ((extra & 64512) == 56320) {
            output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
          } else {
            output.push(value);
            counter--;
          }
        } else {
          output.push(value);
        }
      }
      return output;
    }
    var ucs2encode = function ucs2encode2(array) {
      return String.fromCodePoint.apply(String, toConsumableArray(array));
    };
    var basicToDigit = function basicToDigit2(codePoint) {
      if (codePoint - 48 < 10) {
        return codePoint - 22;
      }
      if (codePoint - 65 < 26) {
        return codePoint - 65;
      }
      if (codePoint - 97 < 26) {
        return codePoint - 97;
      }
      return base;
    };
    var digitToBasic = function digitToBasic2(digit, flag) {
      return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    };
    var adapt = function adapt2(delta, numPoints, firstTime) {
      var k = 0;
      delta = firstTime ? floor(delta / damp) : delta >> 1;
      delta += floor(delta / numPoints);
      for (; delta > baseMinusTMin * tMax >> 1; k += base) {
        delta = floor(delta / baseMinusTMin);
      }
      return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    };
    var decode = function decode2(input) {
      var output = [];
      var inputLength = input.length;
      var i = 0;
      var n = initialN;
      var bias = initialBias;
      var basic = input.lastIndexOf(delimiter);
      if (basic < 0) {
        basic = 0;
      }
      for (var j = 0; j < basic; ++j) {
        if (input.charCodeAt(j) >= 128) {
          error$12("not-basic");
        }
        output.push(input.charCodeAt(j));
      }
      for (var index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
        var oldi = i;
        for (var w = 1, k = base; ; k += base) {
          if (index >= inputLength) {
            error$12("invalid-input");
          }
          var digit = basicToDigit(input.charCodeAt(index++));
          if (digit >= base || digit > floor((maxInt - i) / w)) {
            error$12("overflow");
          }
          i += digit * w;
          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (digit < t) {
            break;
          }
          var baseMinusT = base - t;
          if (w > floor(maxInt / baseMinusT)) {
            error$12("overflow");
          }
          w *= baseMinusT;
        }
        var out = output.length + 1;
        bias = adapt(i - oldi, out, oldi == 0);
        if (floor(i / out) > maxInt - n) {
          error$12("overflow");
        }
        n += floor(i / out);
        i %= out;
        output.splice(i++, 0, n);
      }
      return String.fromCodePoint.apply(String, output);
    };
    var encode = function encode2(input) {
      var output = [];
      input = ucs2decode(input);
      var inputLength = input.length;
      var n = initialN;
      var delta = 0;
      var bias = initialBias;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _currentValue2 = _step.value;
          if (_currentValue2 < 128) {
            output.push(stringFromCharCode(_currentValue2));
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      var basicLength = output.length;
      var handledCPCount = basicLength;
      if (basicLength) {
        output.push(delimiter);
      }
      while (handledCPCount < inputLength) {
        var m = maxInt;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = void 0;
        try {
          for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var currentValue = _step2.value;
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
        var handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
          error$12("overflow");
        }
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = void 0;
        try {
          for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _currentValue = _step3.value;
            if (_currentValue < n && ++delta > maxInt) {
              error$12("overflow");
            }
            if (_currentValue == n) {
              var q = delta;
              for (var k = base; ; k += base) {
                var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (q < t) {
                  break;
                }
                var qMinusT = q - t;
                var baseMinusT = base - t;
                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                q = floor(qMinusT / baseMinusT);
              }
              output.push(stringFromCharCode(digitToBasic(q, 0)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
        ++delta;
        ++n;
      }
      return output.join("");
    };
    var toUnicode = function toUnicode2(input) {
      return mapDomain(input, function(string) {
        return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
      });
    };
    var toASCII = function toASCII2(input) {
      return mapDomain(input, function(string) {
        return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
      });
    };
    var punycode = {
      "version": "2.1.0",
      "ucs2": {
        "decode": ucs2decode,
        "encode": ucs2encode
      },
      "decode": decode,
      "encode": encode,
      "toASCII": toASCII,
      "toUnicode": toUnicode
    };
    var SCHEMES = {};
    function pctEncChar(chr) {
      var c = chr.charCodeAt(0);
      var e = void 0;
      if (c < 16)
        e = "%0" + c.toString(16).toUpperCase();
      else if (c < 128)
        e = "%" + c.toString(16).toUpperCase();
      else if (c < 2048)
        e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
      else
        e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
      return e;
    }
    function pctDecChars(str) {
      var newStr = "";
      var i = 0;
      var il = str.length;
      while (i < il) {
        var c = parseInt(str.substr(i + 1, 2), 16);
        if (c < 128) {
          newStr += String.fromCharCode(c);
          i += 3;
        } else if (c >= 194 && c < 224) {
          if (il - i >= 6) {
            var c2 = parseInt(str.substr(i + 4, 2), 16);
            newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
          } else {
            newStr += str.substr(i, 6);
          }
          i += 6;
        } else if (c >= 224) {
          if (il - i >= 9) {
            var _c = parseInt(str.substr(i + 4, 2), 16);
            var c3 = parseInt(str.substr(i + 7, 2), 16);
            newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
          } else {
            newStr += str.substr(i, 9);
          }
          i += 9;
        } else {
          newStr += str.substr(i, 3);
          i += 3;
        }
      }
      return newStr;
    }
    function _normalizeComponentEncoding(components, protocol) {
      function decodeUnreserved2(str) {
        var decStr = pctDecChars(str);
        return !decStr.match(protocol.UNRESERVED) ? str : decStr;
      }
      if (components.scheme)
        components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved2).toLowerCase().replace(protocol.NOT_SCHEME, "");
      if (components.userinfo !== void 0)
        components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      if (components.host !== void 0)
        components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved2).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      if (components.path !== void 0)
        components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      if (components.query !== void 0)
        components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      if (components.fragment !== void 0)
        components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      return components;
    }
    function _stripLeadingZeros(str) {
      return str.replace(/^0*(.*)/, "$1") || "0";
    }
    function _normalizeIPv4(host, protocol) {
      var matches = host.match(protocol.IPV4ADDRESS) || [];
      var _matches = slicedToArray(matches, 2), address = _matches[1];
      if (address) {
        return address.split(".").map(_stripLeadingZeros).join(".");
      } else {
        return host;
      }
    }
    function _normalizeIPv6(host, protocol) {
      var matches = host.match(protocol.IPV6ADDRESS) || [];
      var _matches2 = slicedToArray(matches, 3), address = _matches2[1], zone = _matches2[2];
      if (address) {
        var _address$toLowerCase$ = address.toLowerCase().split("::").reverse(), _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2), last = _address$toLowerCase$2[0], first = _address$toLowerCase$2[1];
        var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
        var lastFields = last.split(":").map(_stripLeadingZeros);
        var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
        var fieldCount = isLastFieldIPv4Address ? 7 : 8;
        var lastFieldsStart = lastFields.length - fieldCount;
        var fields = Array(fieldCount);
        for (var x = 0; x < fieldCount; ++x) {
          fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || "";
        }
        if (isLastFieldIPv4Address) {
          fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
        }
        var allZeroFields = fields.reduce(function(acc, field, index) {
          if (!field || field === "0") {
            var lastLongest = acc[acc.length - 1];
            if (lastLongest && lastLongest.index + lastLongest.length === index) {
              lastLongest.length++;
            } else {
              acc.push({ index, length: 1 });
            }
          }
          return acc;
        }, []);
        var longestZeroFields = allZeroFields.sort(function(a, b) {
          return b.length - a.length;
        })[0];
        var newHost = void 0;
        if (longestZeroFields && longestZeroFields.length > 1) {
          var newFirst = fields.slice(0, longestZeroFields.index);
          var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
          newHost = newFirst.join(":") + "::" + newLast.join(":");
        } else {
          newHost = fields.join(":");
        }
        if (zone) {
          newHost += "%" + zone;
        }
        return newHost;
      } else {
        return host;
      }
    }
    var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
    var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === void 0;
    function parse(uriString) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var components = {};
      var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
      if (options.reference === "suffix")
        uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
      var matches = uriString.match(URI_PARSE);
      if (matches) {
        if (NO_MATCH_IS_UNDEFINED) {
          components.scheme = matches[1];
          components.userinfo = matches[3];
          components.host = matches[4];
          components.port = parseInt(matches[5], 10);
          components.path = matches[6] || "";
          components.query = matches[7];
          components.fragment = matches[8];
          if (isNaN(components.port)) {
            components.port = matches[5];
          }
        } else {
          components.scheme = matches[1] || void 0;
          components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : void 0;
          components.host = uriString.indexOf("//") !== -1 ? matches[4] : void 0;
          components.port = parseInt(matches[5], 10);
          components.path = matches[6] || "";
          components.query = uriString.indexOf("?") !== -1 ? matches[7] : void 0;
          components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : void 0;
          if (isNaN(components.port)) {
            components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : void 0;
          }
        }
        if (components.host) {
          components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
        }
        if (components.scheme === void 0 && components.userinfo === void 0 && components.host === void 0 && components.port === void 0 && !components.path && components.query === void 0) {
          components.reference = "same-document";
        } else if (components.scheme === void 0) {
          components.reference = "relative";
        } else if (components.fragment === void 0) {
          components.reference = "absolute";
        } else {
          components.reference = "uri";
        }
        if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
          components.error = components.error || "URI is not a " + options.reference + " reference.";
        }
        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
        if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
          if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
            try {
              components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
            } catch (e) {
              components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
            }
          }
          _normalizeComponentEncoding(components, URI_PROTOCOL);
        } else {
          _normalizeComponentEncoding(components, protocol);
        }
        if (schemeHandler && schemeHandler.parse) {
          schemeHandler.parse(components, options);
        }
      } else {
        components.error = components.error || "URI can not be parsed.";
      }
      return components;
    }
    function _recomposeAuthority(components, options) {
      var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
      var uriTokens = [];
      if (components.userinfo !== void 0) {
        uriTokens.push(components.userinfo);
        uriTokens.push("@");
      }
      if (components.host !== void 0) {
        uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function(_, $1, $2) {
          return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
        }));
      }
      if (typeof components.port === "number" || typeof components.port === "string") {
        uriTokens.push(":");
        uriTokens.push(String(components.port));
      }
      return uriTokens.length ? uriTokens.join("") : void 0;
    }
    var RDS1 = /^\.\.?\//;
    var RDS2 = /^\/\.(\/|$)/;
    var RDS3 = /^\/\.\.(\/|$)/;
    var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
    function removeDotSegments(input) {
      var output = [];
      while (input.length) {
        if (input.match(RDS1)) {
          input = input.replace(RDS1, "");
        } else if (input.match(RDS2)) {
          input = input.replace(RDS2, "/");
        } else if (input.match(RDS3)) {
          input = input.replace(RDS3, "/");
          output.pop();
        } else if (input === "." || input === "..") {
          input = "";
        } else {
          var im = input.match(RDS5);
          if (im) {
            var s = im[0];
            input = input.slice(s.length);
            output.push(s);
          } else {
            throw new Error("Unexpected dot segment condition");
          }
        }
      }
      return output.join("");
    }
    function serialize(components) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
      var uriTokens = [];
      var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
      if (schemeHandler && schemeHandler.serialize)
        schemeHandler.serialize(components, options);
      if (components.host) {
        if (protocol.IPV6ADDRESS.test(components.host))
          ;
        else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
          try {
            components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
          } catch (e) {
            components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
          }
        }
      }
      _normalizeComponentEncoding(components, protocol);
      if (options.reference !== "suffix" && components.scheme) {
        uriTokens.push(components.scheme);
        uriTokens.push(":");
      }
      var authority = _recomposeAuthority(components, options);
      if (authority !== void 0) {
        if (options.reference !== "suffix") {
          uriTokens.push("//");
        }
        uriTokens.push(authority);
        if (components.path && components.path.charAt(0) !== "/") {
          uriTokens.push("/");
        }
      }
      if (components.path !== void 0) {
        var s = components.path;
        if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
          s = removeDotSegments(s);
        }
        if (authority === void 0) {
          s = s.replace(/^\/\//, "/%2F");
        }
        uriTokens.push(s);
      }
      if (components.query !== void 0) {
        uriTokens.push("?");
        uriTokens.push(components.query);
      }
      if (components.fragment !== void 0) {
        uriTokens.push("#");
        uriTokens.push(components.fragment);
      }
      return uriTokens.join("");
    }
    function resolveComponents(base2, relative) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var skipNormalization = arguments[3];
      var target = {};
      if (!skipNormalization) {
        base2 = parse(serialize(base2, options), options);
        relative = parse(serialize(relative, options), options);
      }
      options = options || {};
      if (!options.tolerant && relative.scheme) {
        target.scheme = relative.scheme;
        target.userinfo = relative.userinfo;
        target.host = relative.host;
        target.port = relative.port;
        target.path = removeDotSegments(relative.path || "");
        target.query = relative.query;
      } else {
        if (relative.userinfo !== void 0 || relative.host !== void 0 || relative.port !== void 0) {
          target.userinfo = relative.userinfo;
          target.host = relative.host;
          target.port = relative.port;
          target.path = removeDotSegments(relative.path || "");
          target.query = relative.query;
        } else {
          if (!relative.path) {
            target.path = base2.path;
            if (relative.query !== void 0) {
              target.query = relative.query;
            } else {
              target.query = base2.query;
            }
          } else {
            if (relative.path.charAt(0) === "/") {
              target.path = removeDotSegments(relative.path);
            } else {
              if ((base2.userinfo !== void 0 || base2.host !== void 0 || base2.port !== void 0) && !base2.path) {
                target.path = "/" + relative.path;
              } else if (!base2.path) {
                target.path = relative.path;
              } else {
                target.path = base2.path.slice(0, base2.path.lastIndexOf("/") + 1) + relative.path;
              }
              target.path = removeDotSegments(target.path);
            }
            target.query = relative.query;
          }
          target.userinfo = base2.userinfo;
          target.host = base2.host;
          target.port = base2.port;
        }
        target.scheme = base2.scheme;
      }
      target.fragment = relative.fragment;
      return target;
    }
    function resolve2(baseURI, relativeURI, options) {
      var schemelessOptions = assign({ scheme: "null" }, options);
      return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
    }
    function normalize(uri2, options) {
      if (typeof uri2 === "string") {
        uri2 = serialize(parse(uri2, options), options);
      } else if (typeOf(uri2) === "object") {
        uri2 = parse(serialize(uri2, options), options);
      }
      return uri2;
    }
    function equal3(uriA, uriB, options) {
      if (typeof uriA === "string") {
        uriA = serialize(parse(uriA, options), options);
      } else if (typeOf(uriA) === "object") {
        uriA = serialize(uriA, options);
      }
      if (typeof uriB === "string") {
        uriB = serialize(parse(uriB, options), options);
      } else if (typeOf(uriB) === "object") {
        uriB = serialize(uriB, options);
      }
      return uriA === uriB;
    }
    function escapeComponent(str, options) {
      return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
    }
    function unescapeComponent(str, options) {
      return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
    }
    var handler = {
      scheme: "http",
      domainHost: true,
      parse: function parse2(components, options) {
        if (!components.host) {
          components.error = components.error || "HTTP URIs must have a host.";
        }
        return components;
      },
      serialize: function serialize2(components, options) {
        var secure = String(components.scheme).toLowerCase() === "https";
        if (components.port === (secure ? 443 : 80) || components.port === "") {
          components.port = void 0;
        }
        if (!components.path) {
          components.path = "/";
        }
        return components;
      }
    };
    var handler$1 = {
      scheme: "https",
      domainHost: handler.domainHost,
      parse: handler.parse,
      serialize: handler.serialize
    };
    function isSecure(wsComponents) {
      return typeof wsComponents.secure === "boolean" ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
    }
    var handler$2 = {
      scheme: "ws",
      domainHost: true,
      parse: function parse2(components, options) {
        var wsComponents = components;
        wsComponents.secure = isSecure(wsComponents);
        wsComponents.resourceName = (wsComponents.path || "/") + (wsComponents.query ? "?" + wsComponents.query : "");
        wsComponents.path = void 0;
        wsComponents.query = void 0;
        return wsComponents;
      },
      serialize: function serialize2(wsComponents, options) {
        if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
          wsComponents.port = void 0;
        }
        if (typeof wsComponents.secure === "boolean") {
          wsComponents.scheme = wsComponents.secure ? "wss" : "ws";
          wsComponents.secure = void 0;
        }
        if (wsComponents.resourceName) {
          var _wsComponents$resourc = wsComponents.resourceName.split("?"), _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2), path = _wsComponents$resourc2[0], query = _wsComponents$resourc2[1];
          wsComponents.path = path && path !== "/" ? path : void 0;
          wsComponents.query = query;
          wsComponents.resourceName = void 0;
        }
        wsComponents.fragment = void 0;
        return wsComponents;
      }
    };
    var handler$3 = {
      scheme: "wss",
      domainHost: handler$2.domainHost,
      parse: handler$2.parse,
      serialize: handler$2.serialize
    };
    var O = {};
    var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]";
    var HEXDIG$$ = "[0-9A-Fa-f]";
    var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$));
    var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
    var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
    var VCHAR$$ = merge2(QTEXT$$, '[\\"\\\\]');
    var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
    var UNRESERVED = new RegExp(UNRESERVED$$, "g");
    var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
    var NOT_LOCAL_PART = new RegExp(merge2("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
    var NOT_HFNAME = new RegExp(merge2("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
    var NOT_HFVALUE = NOT_HFNAME;
    function decodeUnreserved(str) {
      var decStr = pctDecChars(str);
      return !decStr.match(UNRESERVED) ? str : decStr;
    }
    var handler$4 = {
      scheme: "mailto",
      parse: function parse$$1(components, options) {
        var mailtoComponents = components;
        var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
        mailtoComponents.path = void 0;
        if (mailtoComponents.query) {
          var unknownHeaders = false;
          var headers = {};
          var hfields = mailtoComponents.query.split("&");
          for (var x = 0, xl = hfields.length; x < xl; ++x) {
            var hfield = hfields[x].split("=");
            switch (hfield[0]) {
              case "to":
                var toAddrs = hfield[1].split(",");
                for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                  to.push(toAddrs[_x]);
                }
                break;
              case "subject":
                mailtoComponents.subject = unescapeComponent(hfield[1], options);
                break;
              case "body":
                mailtoComponents.body = unescapeComponent(hfield[1], options);
                break;
              default:
                unknownHeaders = true;
                headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                break;
            }
          }
          if (unknownHeaders)
            mailtoComponents.headers = headers;
        }
        mailtoComponents.query = void 0;
        for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
          var addr = to[_x2].split("@");
          addr[0] = unescapeComponent(addr[0]);
          if (!options.unicodeSupport) {
            try {
              addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
            } catch (e) {
              mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
            }
          } else {
            addr[1] = unescapeComponent(addr[1], options).toLowerCase();
          }
          to[_x2] = addr.join("@");
        }
        return mailtoComponents;
      },
      serialize: function serialize$$1(mailtoComponents, options) {
        var components = mailtoComponents;
        var to = toArray(mailtoComponents.to);
        if (to) {
          for (var x = 0, xl = to.length; x < xl; ++x) {
            var toAddr = String(to[x]);
            var atIdx = toAddr.lastIndexOf("@");
            var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
            var domain = toAddr.slice(atIdx + 1);
            try {
              domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
            } catch (e) {
              components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
            }
            to[x] = localPart + "@" + domain;
          }
          components.path = to.join(",");
        }
        var headers = mailtoComponents.headers = mailtoComponents.headers || {};
        if (mailtoComponents.subject)
          headers["subject"] = mailtoComponents.subject;
        if (mailtoComponents.body)
          headers["body"] = mailtoComponents.body;
        var fields = [];
        for (var name in headers) {
          if (headers[name] !== O[name]) {
            fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
          }
        }
        if (fields.length) {
          components.query = fields.join("&");
        }
        return components;
      }
    };
    var URN_PARSE = /^([^\:]+)\:(.*)/;
    var handler$5 = {
      scheme: "urn",
      parse: function parse$$1(components, options) {
        var matches = components.path && components.path.match(URN_PARSE);
        var urnComponents = components;
        if (matches) {
          var scheme = options.scheme || urnComponents.scheme || "urn";
          var nid = matches[1].toLowerCase();
          var nss = matches[2];
          var urnScheme = scheme + ":" + (options.nid || nid);
          var schemeHandler = SCHEMES[urnScheme];
          urnComponents.nid = nid;
          urnComponents.nss = nss;
          urnComponents.path = void 0;
          if (schemeHandler) {
            urnComponents = schemeHandler.parse(urnComponents, options);
          }
        } else {
          urnComponents.error = urnComponents.error || "URN can not be parsed.";
        }
        return urnComponents;
      },
      serialize: function serialize$$1(urnComponents, options) {
        var scheme = options.scheme || urnComponents.scheme || "urn";
        var nid = urnComponents.nid;
        var urnScheme = scheme + ":" + (options.nid || nid);
        var schemeHandler = SCHEMES[urnScheme];
        if (schemeHandler) {
          urnComponents = schemeHandler.serialize(urnComponents, options);
        }
        var uriComponents = urnComponents;
        var nss = urnComponents.nss;
        uriComponents.path = (nid || options.nid) + ":" + nss;
        return uriComponents;
      }
    };
    var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
    var handler$6 = {
      scheme: "urn:uuid",
      parse: function parse2(urnComponents, options) {
        var uuidComponents = urnComponents;
        uuidComponents.uuid = uuidComponents.nss;
        uuidComponents.nss = void 0;
        if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
          uuidComponents.error = uuidComponents.error || "UUID is not valid.";
        }
        return uuidComponents;
      },
      serialize: function serialize2(uuidComponents, options) {
        var urnComponents = uuidComponents;
        urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
        return urnComponents;
      }
    };
    SCHEMES[handler.scheme] = handler;
    SCHEMES[handler$1.scheme] = handler$1;
    SCHEMES[handler$2.scheme] = handler$2;
    SCHEMES[handler$3.scheme] = handler$3;
    SCHEMES[handler$4.scheme] = handler$4;
    SCHEMES[handler$5.scheme] = handler$5;
    SCHEMES[handler$6.scheme] = handler$6;
    exports3.SCHEMES = SCHEMES;
    exports3.pctEncChar = pctEncChar;
    exports3.pctDecChars = pctDecChars;
    exports3.parse = parse;
    exports3.removeDotSegments = removeDotSegments;
    exports3.serialize = serialize;
    exports3.resolveComponents = resolveComponents;
    exports3.resolve = resolve2;
    exports3.normalize = normalize;
    exports3.equal = equal3;
    exports3.escapeComponent = escapeComponent;
    exports3.unescapeComponent = unescapeComponent;
    Object.defineProperty(exports3, "__esModule", { value: true });
  });
})(uri_all, uri_all.exports);
Object.defineProperty(uri$1, "__esModule", { value: true });
const uri = uri_all.exports;
uri.code = 'require("ajv/dist/runtime/uri").default';
uri$1.default = uri;
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.CodeGen = exports2.Name = exports2.nil = exports2.stringify = exports2.str = exports2._ = exports2.KeywordCxt = void 0;
  var validate_12 = validate;
  Object.defineProperty(exports2, "KeywordCxt", { enumerable: true, get: function() {
    return validate_12.KeywordCxt;
  } });
  var codegen_12 = codegen;
  Object.defineProperty(exports2, "_", { enumerable: true, get: function() {
    return codegen_12._;
  } });
  Object.defineProperty(exports2, "str", { enumerable: true, get: function() {
    return codegen_12.str;
  } });
  Object.defineProperty(exports2, "stringify", { enumerable: true, get: function() {
    return codegen_12.stringify;
  } });
  Object.defineProperty(exports2, "nil", { enumerable: true, get: function() {
    return codegen_12.nil;
  } });
  Object.defineProperty(exports2, "Name", { enumerable: true, get: function() {
    return codegen_12.Name;
  } });
  Object.defineProperty(exports2, "CodeGen", { enumerable: true, get: function() {
    return codegen_12.CodeGen;
  } });
  const validation_error_12 = validation_error;
  const ref_error_12 = ref_error;
  const rules_1 = rules;
  const compile_12 = compile;
  const codegen_2 = codegen;
  const resolve_12 = resolve$1;
  const dataType_12 = dataType;
  const util_12 = util;
  const $dataRefSchema = require$$9;
  const uri_1 = uri$1;
  const defaultRegExp = (str, flags) => new RegExp(str, flags);
  defaultRegExp.code = "new RegExp";
  const META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes"];
  const EXT_SCOPE_NAMES = /* @__PURE__ */ new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error"
  ]);
  const removedOptions = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
  };
  const deprecatedOptions = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  };
  const MAX_EXPRESSION = 200;
  function requiredOptions(o) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
    const s = o.strict;
    const _optz = (_a = o.code) === null || _a === void 0 ? void 0 : _a.optimize;
    const optimize = _optz === true || _optz === void 0 ? 1 : _optz || 0;
    const regExp = (_c = (_b = o.code) === null || _b === void 0 ? void 0 : _b.regExp) !== null && _c !== void 0 ? _c : defaultRegExp;
    const uriResolver = (_d = o.uriResolver) !== null && _d !== void 0 ? _d : uri_1.default;
    return {
      strictSchema: (_f = (_e = o.strictSchema) !== null && _e !== void 0 ? _e : s) !== null && _f !== void 0 ? _f : true,
      strictNumbers: (_h = (_g = o.strictNumbers) !== null && _g !== void 0 ? _g : s) !== null && _h !== void 0 ? _h : true,
      strictTypes: (_k = (_j = o.strictTypes) !== null && _j !== void 0 ? _j : s) !== null && _k !== void 0 ? _k : "log",
      strictTuples: (_m = (_l = o.strictTuples) !== null && _l !== void 0 ? _l : s) !== null && _m !== void 0 ? _m : "log",
      strictRequired: (_p = (_o = o.strictRequired) !== null && _o !== void 0 ? _o : s) !== null && _p !== void 0 ? _p : false,
      code: o.code ? __spreadProps(__spreadValues({}, o.code), { optimize, regExp }) : { optimize, regExp },
      loopRequired: (_q = o.loopRequired) !== null && _q !== void 0 ? _q : MAX_EXPRESSION,
      loopEnum: (_r = o.loopEnum) !== null && _r !== void 0 ? _r : MAX_EXPRESSION,
      meta: (_s = o.meta) !== null && _s !== void 0 ? _s : true,
      messages: (_t = o.messages) !== null && _t !== void 0 ? _t : true,
      inlineRefs: (_u = o.inlineRefs) !== null && _u !== void 0 ? _u : true,
      schemaId: (_v = o.schemaId) !== null && _v !== void 0 ? _v : "$id",
      addUsedSchema: (_w = o.addUsedSchema) !== null && _w !== void 0 ? _w : true,
      validateSchema: (_x = o.validateSchema) !== null && _x !== void 0 ? _x : true,
      validateFormats: (_y = o.validateFormats) !== null && _y !== void 0 ? _y : true,
      unicodeRegExp: (_z = o.unicodeRegExp) !== null && _z !== void 0 ? _z : true,
      int32range: (_0 = o.int32range) !== null && _0 !== void 0 ? _0 : true,
      uriResolver
    };
  }
  class Ajv2 {
    constructor(opts = {}) {
      this.schemas = {};
      this.refs = {};
      this.formats = {};
      this._compilations = /* @__PURE__ */ new Set();
      this._loading = {};
      this._cache = /* @__PURE__ */ new Map();
      opts = this.opts = __spreadValues(__spreadValues({}, opts), requiredOptions(opts));
      const { es5, lines } = this.opts.code;
      this.scope = new codegen_2.ValueScope({ scope: {}, prefixes: EXT_SCOPE_NAMES, es5, lines });
      this.logger = getLogger(opts.logger);
      const formatOpt = opts.validateFormats;
      opts.validateFormats = false;
      this.RULES = (0, rules_1.getRules)();
      checkOptions.call(this, removedOptions, opts, "NOT SUPPORTED");
      checkOptions.call(this, deprecatedOptions, opts, "DEPRECATED", "warn");
      this._metaOpts = getMetaSchemaOptions.call(this);
      if (opts.formats)
        addInitialFormats.call(this);
      this._addVocabularies();
      this._addDefaultMetaSchema();
      if (opts.keywords)
        addInitialKeywords.call(this, opts.keywords);
      if (typeof opts.meta == "object")
        this.addMetaSchema(opts.meta);
      addInitialSchemas.call(this);
      opts.validateFormats = formatOpt;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data, meta, schemaId } = this.opts;
      let _dataRefSchema = $dataRefSchema;
      if (schemaId === "id") {
        _dataRefSchema = __spreadValues({}, $dataRefSchema);
        _dataRefSchema.id = _dataRefSchema.$id;
        delete _dataRefSchema.$id;
      }
      if (meta && $data)
        this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
    }
    defaultMeta() {
      const { meta, schemaId } = this.opts;
      return this.opts.defaultMeta = typeof meta == "object" ? meta[schemaId] || meta : void 0;
    }
    validate(schemaKeyRef, data2) {
      let v;
      if (typeof schemaKeyRef == "string") {
        v = this.getSchema(schemaKeyRef);
        if (!v)
          throw new Error(`no schema with key or ref "${schemaKeyRef}"`);
      } else {
        v = this.compile(schemaKeyRef);
      }
      const valid = v(data2);
      if (!("$async" in v))
        this.errors = v.errors;
      return valid;
    }
    compile(schema, _meta) {
      const sch = this._addSchema(schema, _meta);
      return sch.validate || this._compileSchemaEnv(sch);
    }
    compileAsync(schema, meta) {
      if (typeof this.opts.loadSchema != "function") {
        throw new Error("options.loadSchema should be a function");
      }
      const { loadSchema } = this.opts;
      return runCompileAsync.call(this, schema, meta);
      async function runCompileAsync(_schema, _meta) {
        await loadMetaSchema.call(this, _schema.$schema);
        const sch = this._addSchema(_schema, _meta);
        return sch.validate || _compileAsync.call(this, sch);
      }
      async function loadMetaSchema($ref) {
        if ($ref && !this.getSchema($ref)) {
          await runCompileAsync.call(this, { $ref }, true);
        }
      }
      async function _compileAsync(sch) {
        try {
          return this._compileSchemaEnv(sch);
        } catch (e) {
          if (!(e instanceof ref_error_12.default))
            throw e;
          checkLoaded.call(this, e);
          await loadMissingSchema.call(this, e.missingSchema);
          return _compileAsync.call(this, sch);
        }
      }
      function checkLoaded({ missingSchema: ref2, missingRef }) {
        if (this.refs[ref2]) {
          throw new Error(`AnySchema ${ref2} is loaded but ${missingRef} cannot be resolved`);
        }
      }
      async function loadMissingSchema(ref2) {
        const _schema = await _loadSchema.call(this, ref2);
        if (!this.refs[ref2])
          await loadMetaSchema.call(this, _schema.$schema);
        if (!this.refs[ref2])
          this.addSchema(_schema, ref2, meta);
      }
      async function _loadSchema(ref2) {
        const p = this._loading[ref2];
        if (p)
          return p;
        try {
          return await (this._loading[ref2] = loadSchema(ref2));
        } finally {
          delete this._loading[ref2];
        }
      }
    }
    addSchema(schema, key, _meta, _validateSchema = this.opts.validateSchema) {
      if (Array.isArray(schema)) {
        for (const sch of schema)
          this.addSchema(sch, void 0, _meta, _validateSchema);
        return this;
      }
      let id2;
      if (typeof schema === "object") {
        const { schemaId } = this.opts;
        id2 = schema[schemaId];
        if (id2 !== void 0 && typeof id2 != "string") {
          throw new Error(`schema ${schemaId} must be string`);
        }
      }
      key = (0, resolve_12.normalizeId)(key || id2);
      this._checkUnique(key);
      this.schemas[key] = this._addSchema(schema, _meta, key, _validateSchema, true);
      return this;
    }
    addMetaSchema(schema, key, _validateSchema = this.opts.validateSchema) {
      this.addSchema(schema, key, true, _validateSchema);
      return this;
    }
    validateSchema(schema, throwOrLogError) {
      if (typeof schema == "boolean")
        return true;
      let $schema2;
      $schema2 = schema.$schema;
      if ($schema2 !== void 0 && typeof $schema2 != "string") {
        throw new Error("$schema must be a string");
      }
      $schema2 = $schema2 || this.opts.defaultMeta || this.defaultMeta();
      if (!$schema2) {
        this.logger.warn("meta-schema not available");
        this.errors = null;
        return true;
      }
      const valid = this.validate($schema2, schema);
      if (!valid && throwOrLogError) {
        const message = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log")
          this.logger.error(message);
        else
          throw new Error(message);
      }
      return valid;
    }
    getSchema(keyRef) {
      let sch;
      while (typeof (sch = getSchEnv.call(this, keyRef)) == "string")
        keyRef = sch;
      if (sch === void 0) {
        const { schemaId } = this.opts;
        const root2 = new compile_12.SchemaEnv({ schema: {}, schemaId });
        sch = compile_12.resolveSchema.call(this, root2, keyRef);
        if (!sch)
          return;
        this.refs[keyRef] = sch;
      }
      return sch.validate || this._compileSchemaEnv(sch);
    }
    removeSchema(schemaKeyRef) {
      if (schemaKeyRef instanceof RegExp) {
        this._removeAllSchemas(this.schemas, schemaKeyRef);
        this._removeAllSchemas(this.refs, schemaKeyRef);
        return this;
      }
      switch (typeof schemaKeyRef) {
        case "undefined":
          this._removeAllSchemas(this.schemas);
          this._removeAllSchemas(this.refs);
          this._cache.clear();
          return this;
        case "string": {
          const sch = getSchEnv.call(this, schemaKeyRef);
          if (typeof sch == "object")
            this._cache.delete(sch.schema);
          delete this.schemas[schemaKeyRef];
          delete this.refs[schemaKeyRef];
          return this;
        }
        case "object": {
          const cacheKey = schemaKeyRef;
          this._cache.delete(cacheKey);
          let id2 = schemaKeyRef[this.opts.schemaId];
          if (id2) {
            id2 = (0, resolve_12.normalizeId)(id2);
            delete this.schemas[id2];
            delete this.refs[id2];
          }
          return this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    addVocabulary(definitions2) {
      for (const def2 of definitions2)
        this.addKeyword(def2);
      return this;
    }
    addKeyword(kwdOrDef, def2) {
      let keyword2;
      if (typeof kwdOrDef == "string") {
        keyword2 = kwdOrDef;
        if (typeof def2 == "object") {
          this.logger.warn("these parameters are deprecated, see docs for addKeyword");
          def2.keyword = keyword2;
        }
      } else if (typeof kwdOrDef == "object" && def2 === void 0) {
        def2 = kwdOrDef;
        keyword2 = def2.keyword;
        if (Array.isArray(keyword2) && !keyword2.length) {
          throw new Error("addKeywords: keyword must be string or non-empty array");
        }
      } else {
        throw new Error("invalid addKeywords parameters");
      }
      checkKeyword.call(this, keyword2, def2);
      if (!def2) {
        (0, util_12.eachItem)(keyword2, (kwd) => addRule.call(this, kwd));
        return this;
      }
      keywordMetaschema.call(this, def2);
      const definition = __spreadProps(__spreadValues({}, def2), {
        type: (0, dataType_12.getJSONTypes)(def2.type),
        schemaType: (0, dataType_12.getJSONTypes)(def2.schemaType)
      });
      (0, util_12.eachItem)(keyword2, definition.type.length === 0 ? (k) => addRule.call(this, k, definition) : (k) => definition.type.forEach((t) => addRule.call(this, k, definition, t)));
      return this;
    }
    getKeyword(keyword2) {
      const rule = this.RULES.all[keyword2];
      return typeof rule == "object" ? rule.definition : !!rule;
    }
    removeKeyword(keyword2) {
      const { RULES } = this;
      delete RULES.keywords[keyword2];
      delete RULES.all[keyword2];
      for (const group of RULES.rules) {
        const i = group.rules.findIndex((rule) => rule.keyword === keyword2);
        if (i >= 0)
          group.rules.splice(i, 1);
      }
      return this;
    }
    addFormat(name, format2) {
      if (typeof format2 == "string")
        format2 = new RegExp(format2);
      this.formats[name] = format2;
      return this;
    }
    errorsText(errors2 = this.errors, { separator = ", ", dataVar = "data" } = {}) {
      if (!errors2 || errors2.length === 0)
        return "No errors";
      return errors2.map((e) => `${dataVar}${e.instancePath} ${e.message}`).reduce((text, msg) => text + separator + msg);
    }
    $dataMetaSchema(metaSchema, keywordsJsonPointers) {
      const rules2 = this.RULES.all;
      metaSchema = JSON.parse(JSON.stringify(metaSchema));
      for (const jsonPointer of keywordsJsonPointers) {
        const segments = jsonPointer.split("/").slice(1);
        let keywords = metaSchema;
        for (const seg of segments)
          keywords = keywords[seg];
        for (const key in rules2) {
          const rule = rules2[key];
          if (typeof rule != "object")
            continue;
          const { $data } = rule.definition;
          const schema = keywords[key];
          if ($data && schema)
            keywords[key] = schemaOrData(schema);
        }
      }
      return metaSchema;
    }
    _removeAllSchemas(schemas, regex) {
      for (const keyRef in schemas) {
        const sch = schemas[keyRef];
        if (!regex || regex.test(keyRef)) {
          if (typeof sch == "string") {
            delete schemas[keyRef];
          } else if (sch && !sch.meta) {
            this._cache.delete(sch.schema);
            delete schemas[keyRef];
          }
        }
      }
    }
    _addSchema(schema, meta, baseId, validateSchema = this.opts.validateSchema, addSchema = this.opts.addUsedSchema) {
      let id2;
      const { schemaId } = this.opts;
      if (typeof schema == "object") {
        id2 = schema[schemaId];
      } else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        else if (typeof schema != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let sch = this._cache.get(schema);
      if (sch !== void 0)
        return sch;
      baseId = (0, resolve_12.normalizeId)(id2 || baseId);
      const localRefs = resolve_12.getSchemaRefs.call(this, schema, baseId);
      sch = new compile_12.SchemaEnv({ schema, schemaId, meta, baseId, localRefs });
      this._cache.set(sch.schema, sch);
      if (addSchema && !baseId.startsWith("#")) {
        if (baseId)
          this._checkUnique(baseId);
        this.refs[baseId] = sch;
      }
      if (validateSchema)
        this.validateSchema(schema, true);
      return sch;
    }
    _checkUnique(id2) {
      if (this.schemas[id2] || this.refs[id2]) {
        throw new Error(`schema with key or id "${id2}" already exists`);
      }
    }
    _compileSchemaEnv(sch) {
      if (sch.meta)
        this._compileMetaSchema(sch);
      else
        compile_12.compileSchema.call(this, sch);
      if (!sch.validate)
        throw new Error("ajv implementation error");
      return sch.validate;
    }
    _compileMetaSchema(sch) {
      const currentOpts = this.opts;
      this.opts = this._metaOpts;
      try {
        compile_12.compileSchema.call(this, sch);
      } finally {
        this.opts = currentOpts;
      }
    }
  }
  exports2.default = Ajv2;
  Ajv2.ValidationError = validation_error_12.default;
  Ajv2.MissingRefError = ref_error_12.default;
  function checkOptions(checkOpts, options, msg, log = "error") {
    for (const key in checkOpts) {
      const opt = key;
      if (opt in options)
        this.logger[log](`${msg}: option ${key}. ${checkOpts[opt]}`);
    }
  }
  function getSchEnv(keyRef) {
    keyRef = (0, resolve_12.normalizeId)(keyRef);
    return this.schemas[keyRef] || this.refs[keyRef];
  }
  function addInitialSchemas() {
    const optsSchemas = this.opts.schemas;
    if (!optsSchemas)
      return;
    if (Array.isArray(optsSchemas))
      this.addSchema(optsSchemas);
    else
      for (const key in optsSchemas)
        this.addSchema(optsSchemas[key], key);
  }
  function addInitialFormats() {
    for (const name in this.opts.formats) {
      const format2 = this.opts.formats[name];
      if (format2)
        this.addFormat(name, format2);
    }
  }
  function addInitialKeywords(defs) {
    if (Array.isArray(defs)) {
      this.addVocabulary(defs);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const keyword2 in defs) {
      const def2 = defs[keyword2];
      if (!def2.keyword)
        def2.keyword = keyword2;
      this.addKeyword(def2);
    }
  }
  function getMetaSchemaOptions() {
    const metaOpts = __spreadValues({}, this.opts);
    for (const opt of META_IGNORE_OPTIONS)
      delete metaOpts[opt];
    return metaOpts;
  }
  const noLogs = { log() {
  }, warn() {
  }, error() {
  } };
  function getLogger(logger) {
    if (logger === false)
      return noLogs;
    if (logger === void 0)
      return console;
    if (logger.log && logger.warn && logger.error)
      return logger;
    throw new Error("logger must implement log, warn and error methods");
  }
  const KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
  function checkKeyword(keyword2, def2) {
    const { RULES } = this;
    (0, util_12.eachItem)(keyword2, (kwd) => {
      if (RULES.keywords[kwd])
        throw new Error(`Keyword ${kwd} is already defined`);
      if (!KEYWORD_NAME.test(kwd))
        throw new Error(`Keyword ${kwd} has invalid name`);
    });
    if (!def2)
      return;
    if (def2.$data && !("code" in def2 || "validate" in def2)) {
      throw new Error('$data keyword must have "code" or "validate" function');
    }
  }
  function addRule(keyword2, definition, dataType2) {
    var _a;
    const post = definition === null || definition === void 0 ? void 0 : definition.post;
    if (dataType2 && post)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES } = this;
    let ruleGroup = post ? RULES.post : RULES.rules.find(({ type: t }) => t === dataType2);
    if (!ruleGroup) {
      ruleGroup = { type: dataType2, rules: [] };
      RULES.rules.push(ruleGroup);
    }
    RULES.keywords[keyword2] = true;
    if (!definition)
      return;
    const rule = {
      keyword: keyword2,
      definition: __spreadProps(__spreadValues({}, definition), {
        type: (0, dataType_12.getJSONTypes)(definition.type),
        schemaType: (0, dataType_12.getJSONTypes)(definition.schemaType)
      })
    };
    if (definition.before)
      addBeforeRule.call(this, ruleGroup, rule, definition.before);
    else
      ruleGroup.rules.push(rule);
    RULES.all[keyword2] = rule;
    (_a = definition.implements) === null || _a === void 0 ? void 0 : _a.forEach((kwd) => this.addKeyword(kwd));
  }
  function addBeforeRule(ruleGroup, rule, before) {
    const i = ruleGroup.rules.findIndex((_rule) => _rule.keyword === before);
    if (i >= 0) {
      ruleGroup.rules.splice(i, 0, rule);
    } else {
      ruleGroup.rules.push(rule);
      this.logger.warn(`rule ${before} is not defined`);
    }
  }
  function keywordMetaschema(def2) {
    let { metaSchema } = def2;
    if (metaSchema === void 0)
      return;
    if (def2.$data && this.opts.$data)
      metaSchema = schemaOrData(metaSchema);
    def2.validateSchema = this.compile(metaSchema, true);
  }
  const $dataRef = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function schemaOrData(schema) {
    return { anyOf: [schema, $dataRef] };
  }
})(core$2);
var draft7 = {};
var core$1 = {};
var id = {};
Object.defineProperty(id, "__esModule", { value: true });
const def$s = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
id.default = def$s;
var ref = {};
Object.defineProperty(ref, "__esModule", { value: true });
ref.callRef = ref.getValidate = void 0;
const ref_error_1 = ref_error;
const code_1$8 = code;
const codegen_1$l = codegen;
const names_1$1 = names$1;
const compile_1$1 = compile;
const util_1$j = util;
const def$r = {
  keyword: "$ref",
  schemaType: "string",
  code(cxt) {
    const { gen, schema: $ref, it } = cxt;
    const { baseId, schemaEnv: env, validateName, opts, self: self2 } = it;
    const { root: root2 } = env;
    if (($ref === "#" || $ref === "#/") && baseId === root2.baseId)
      return callRootRef();
    const schOrEnv = compile_1$1.resolveRef.call(self2, root2, baseId, $ref);
    if (schOrEnv === void 0)
      throw new ref_error_1.default(it.opts.uriResolver, baseId, $ref);
    if (schOrEnv instanceof compile_1$1.SchemaEnv)
      return callValidate(schOrEnv);
    return inlineRefSchema(schOrEnv);
    function callRootRef() {
      if (env === root2)
        return callRef(cxt, validateName, env, env.$async);
      const rootName = gen.scopeValue("root", { ref: root2 });
      return callRef(cxt, (0, codegen_1$l._)`${rootName}.validate`, root2, root2.$async);
    }
    function callValidate(sch) {
      const v = getValidate(cxt, sch);
      callRef(cxt, v, sch, sch.$async);
    }
    function inlineRefSchema(sch) {
      const schName = gen.scopeValue("schema", opts.code.source === true ? { ref: sch, code: (0, codegen_1$l.stringify)(sch) } : { ref: sch });
      const valid = gen.name("valid");
      const schCxt = cxt.subschema({
        schema: sch,
        dataTypes: [],
        schemaPath: codegen_1$l.nil,
        topSchemaRef: schName,
        errSchemaPath: $ref
      }, valid);
      cxt.mergeEvaluated(schCxt);
      cxt.ok(valid);
    }
  }
};
function getValidate(cxt, sch) {
  const { gen } = cxt;
  return sch.validate ? gen.scopeValue("validate", { ref: sch.validate }) : (0, codegen_1$l._)`${gen.scopeValue("wrapper", { ref: sch })}.validate`;
}
ref.getValidate = getValidate;
function callRef(cxt, v, sch, $async) {
  const { gen, it } = cxt;
  const { allErrors, schemaEnv: env, opts } = it;
  const passCxt = opts.passContext ? names_1$1.default.this : codegen_1$l.nil;
  if ($async)
    callAsyncRef();
  else
    callSyncRef();
  function callAsyncRef() {
    if (!env.$async)
      throw new Error("async schema referenced by sync schema");
    const valid = gen.let("valid");
    gen.try(() => {
      gen.code((0, codegen_1$l._)`await ${(0, code_1$8.callValidateCode)(cxt, v, passCxt)}`);
      addEvaluatedFrom(v);
      if (!allErrors)
        gen.assign(valid, true);
    }, (e) => {
      gen.if((0, codegen_1$l._)`!(${e} instanceof ${it.ValidationError})`, () => gen.throw(e));
      addErrorsFrom(e);
      if (!allErrors)
        gen.assign(valid, false);
    });
    cxt.ok(valid);
  }
  function callSyncRef() {
    cxt.result((0, code_1$8.callValidateCode)(cxt, v, passCxt), () => addEvaluatedFrom(v), () => addErrorsFrom(v));
  }
  function addErrorsFrom(source) {
    const errs = (0, codegen_1$l._)`${source}.errors`;
    gen.assign(names_1$1.default.vErrors, (0, codegen_1$l._)`${names_1$1.default.vErrors} === null ? ${errs} : ${names_1$1.default.vErrors}.concat(${errs})`);
    gen.assign(names_1$1.default.errors, (0, codegen_1$l._)`${names_1$1.default.vErrors}.length`);
  }
  function addEvaluatedFrom(source) {
    var _a;
    if (!it.opts.unevaluated)
      return;
    const schEvaluated = (_a = sch === null || sch === void 0 ? void 0 : sch.validate) === null || _a === void 0 ? void 0 : _a.evaluated;
    if (it.props !== true) {
      if (schEvaluated && !schEvaluated.dynamicProps) {
        if (schEvaluated.props !== void 0) {
          it.props = util_1$j.mergeEvaluated.props(gen, schEvaluated.props, it.props);
        }
      } else {
        const props2 = gen.var("props", (0, codegen_1$l._)`${source}.evaluated.props`);
        it.props = util_1$j.mergeEvaluated.props(gen, props2, it.props, codegen_1$l.Name);
      }
    }
    if (it.items !== true) {
      if (schEvaluated && !schEvaluated.dynamicItems) {
        if (schEvaluated.items !== void 0) {
          it.items = util_1$j.mergeEvaluated.items(gen, schEvaluated.items, it.items);
        }
      } else {
        const items2 = gen.var("items", (0, codegen_1$l._)`${source}.evaluated.items`);
        it.items = util_1$j.mergeEvaluated.items(gen, items2, it.items, codegen_1$l.Name);
      }
    }
  }
}
ref.callRef = callRef;
ref.default = def$r;
Object.defineProperty(core$1, "__esModule", { value: true });
const id_1 = id;
const ref_1 = ref;
const core = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  id_1.default,
  ref_1.default
];
core$1.default = core;
var validation$1 = {};
var limitNumber = {};
Object.defineProperty(limitNumber, "__esModule", { value: true });
const codegen_1$k = codegen;
const ops = codegen_1$k.operators;
const KWDs = {
  maximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
  minimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
  exclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
  exclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
};
const error$i = {
  message: ({ keyword: keyword2, schemaCode }) => (0, codegen_1$k.str)`must be ${KWDs[keyword2].okStr} ${schemaCode}`,
  params: ({ keyword: keyword2, schemaCode }) => (0, codegen_1$k._)`{comparison: ${KWDs[keyword2].okStr}, limit: ${schemaCode}}`
};
const def$q = {
  keyword: Object.keys(KWDs),
  type: "number",
  schemaType: "number",
  $data: true,
  error: error$i,
  code(cxt) {
    const { keyword: keyword2, data: data2, schemaCode } = cxt;
    cxt.fail$data((0, codegen_1$k._)`${data2} ${KWDs[keyword2].fail} ${schemaCode} || isNaN(${data2})`);
  }
};
limitNumber.default = def$q;
var multipleOf = {};
Object.defineProperty(multipleOf, "__esModule", { value: true });
const codegen_1$j = codegen;
const error$h = {
  message: ({ schemaCode }) => (0, codegen_1$j.str)`must be multiple of ${schemaCode}`,
  params: ({ schemaCode }) => (0, codegen_1$j._)`{multipleOf: ${schemaCode}}`
};
const def$p = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: true,
  error: error$h,
  code(cxt) {
    const { gen, data: data2, schemaCode, it } = cxt;
    const prec = it.opts.multipleOfPrecision;
    const res = gen.let("res");
    const invalid = prec ? (0, codegen_1$j._)`Math.abs(Math.round(${res}) - ${res}) > 1e-${prec}` : (0, codegen_1$j._)`${res} !== parseInt(${res})`;
    cxt.fail$data((0, codegen_1$j._)`(${schemaCode} === 0 || (${res} = ${data2}/${schemaCode}, ${invalid}))`);
  }
};
multipleOf.default = def$p;
var limitLength = {};
var ucs2length$1 = {};
Object.defineProperty(ucs2length$1, "__esModule", { value: true });
function ucs2length(str) {
  const len = str.length;
  let length = 0;
  let pos = 0;
  let value;
  while (pos < len) {
    length++;
    value = str.charCodeAt(pos++);
    if (value >= 55296 && value <= 56319 && pos < len) {
      value = str.charCodeAt(pos);
      if ((value & 64512) === 56320)
        pos++;
    }
  }
  return length;
}
ucs2length$1.default = ucs2length;
ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(limitLength, "__esModule", { value: true });
const codegen_1$i = codegen;
const util_1$i = util;
const ucs2length_1 = ucs2length$1;
const error$g = {
  message({ keyword: keyword2, schemaCode }) {
    const comp = keyword2 === "maxLength" ? "more" : "fewer";
    return (0, codegen_1$i.str)`must NOT have ${comp} than ${schemaCode} characters`;
  },
  params: ({ schemaCode }) => (0, codegen_1$i._)`{limit: ${schemaCode}}`
};
const def$o = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: true,
  error: error$g,
  code(cxt) {
    const { keyword: keyword2, data: data2, schemaCode, it } = cxt;
    const op = keyword2 === "maxLength" ? codegen_1$i.operators.GT : codegen_1$i.operators.LT;
    const len = it.opts.unicode === false ? (0, codegen_1$i._)`${data2}.length` : (0, codegen_1$i._)`${(0, util_1$i.useFunc)(cxt.gen, ucs2length_1.default)}(${data2})`;
    cxt.fail$data((0, codegen_1$i._)`${len} ${op} ${schemaCode}`);
  }
};
limitLength.default = def$o;
var pattern = {};
Object.defineProperty(pattern, "__esModule", { value: true });
const code_1$7 = code;
const codegen_1$h = codegen;
const error$f = {
  message: ({ schemaCode }) => (0, codegen_1$h.str)`must match pattern "${schemaCode}"`,
  params: ({ schemaCode }) => (0, codegen_1$h._)`{pattern: ${schemaCode}}`
};
const def$n = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: true,
  error: error$f,
  code(cxt) {
    const { data: data2, $data, schema, schemaCode, it } = cxt;
    const u = it.opts.unicodeRegExp ? "u" : "";
    const regExp = $data ? (0, codegen_1$h._)`(new RegExp(${schemaCode}, ${u}))` : (0, code_1$7.usePattern)(cxt, schema);
    cxt.fail$data((0, codegen_1$h._)`!${regExp}.test(${data2})`);
  }
};
pattern.default = def$n;
var limitProperties = {};
Object.defineProperty(limitProperties, "__esModule", { value: true });
const codegen_1$g = codegen;
const error$e = {
  message({ keyword: keyword2, schemaCode }) {
    const comp = keyword2 === "maxProperties" ? "more" : "fewer";
    return (0, codegen_1$g.str)`must NOT have ${comp} than ${schemaCode} items`;
  },
  params: ({ schemaCode }) => (0, codegen_1$g._)`{limit: ${schemaCode}}`
};
const def$m = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: true,
  error: error$e,
  code(cxt) {
    const { keyword: keyword2, data: data2, schemaCode } = cxt;
    const op = keyword2 === "maxProperties" ? codegen_1$g.operators.GT : codegen_1$g.operators.LT;
    cxt.fail$data((0, codegen_1$g._)`Object.keys(${data2}).length ${op} ${schemaCode}`);
  }
};
limitProperties.default = def$m;
var required = {};
Object.defineProperty(required, "__esModule", { value: true });
const code_1$6 = code;
const codegen_1$f = codegen;
const util_1$h = util;
const error$d = {
  message: ({ params: { missingProperty } }) => (0, codegen_1$f.str)`must have required property '${missingProperty}'`,
  params: ({ params: { missingProperty } }) => (0, codegen_1$f._)`{missingProperty: ${missingProperty}}`
};
const def$l = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: true,
  error: error$d,
  code(cxt) {
    const { gen, schema, schemaCode, data: data2, $data, it } = cxt;
    const { opts } = it;
    if (!$data && schema.length === 0)
      return;
    const useLoop = schema.length >= opts.loopRequired;
    if (it.allErrors)
      allErrorsMode();
    else
      exitOnErrorMode();
    if (opts.strictRequired) {
      const props2 = cxt.parentSchema.properties;
      const { definedProperties } = cxt.it;
      for (const requiredKey of schema) {
        if ((props2 === null || props2 === void 0 ? void 0 : props2[requiredKey]) === void 0 && !definedProperties.has(requiredKey)) {
          const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
          const msg = `required property "${requiredKey}" is not defined at "${schemaPath}" (strictRequired)`;
          (0, util_1$h.checkStrictMode)(it, msg, it.opts.strictRequired);
        }
      }
    }
    function allErrorsMode() {
      if (useLoop || $data) {
        cxt.block$data(codegen_1$f.nil, loopAllRequired);
      } else {
        for (const prop of schema) {
          (0, code_1$6.checkReportMissingProp)(cxt, prop);
        }
      }
    }
    function exitOnErrorMode() {
      const missing = gen.let("missing");
      if (useLoop || $data) {
        const valid = gen.let("valid", true);
        cxt.block$data(valid, () => loopUntilMissing(missing, valid));
        cxt.ok(valid);
      } else {
        gen.if((0, code_1$6.checkMissingProp)(cxt, schema, missing));
        (0, code_1$6.reportMissingProp)(cxt, missing);
        gen.else();
      }
    }
    function loopAllRequired() {
      gen.forOf("prop", schemaCode, (prop) => {
        cxt.setParams({ missingProperty: prop });
        gen.if((0, code_1$6.noPropertyInData)(gen, data2, prop, opts.ownProperties), () => cxt.error());
      });
    }
    function loopUntilMissing(missing, valid) {
      cxt.setParams({ missingProperty: missing });
      gen.forOf(missing, schemaCode, () => {
        gen.assign(valid, (0, code_1$6.propertyInData)(gen, data2, missing, opts.ownProperties));
        gen.if((0, codegen_1$f.not)(valid), () => {
          cxt.error();
          gen.break();
        });
      }, codegen_1$f.nil);
    }
  }
};
required.default = def$l;
var limitItems = {};
Object.defineProperty(limitItems, "__esModule", { value: true });
const codegen_1$e = codegen;
const error$c = {
  message({ keyword: keyword2, schemaCode }) {
    const comp = keyword2 === "maxItems" ? "more" : "fewer";
    return (0, codegen_1$e.str)`must NOT have ${comp} than ${schemaCode} items`;
  },
  params: ({ schemaCode }) => (0, codegen_1$e._)`{limit: ${schemaCode}}`
};
const def$k = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: true,
  error: error$c,
  code(cxt) {
    const { keyword: keyword2, data: data2, schemaCode } = cxt;
    const op = keyword2 === "maxItems" ? codegen_1$e.operators.GT : codegen_1$e.operators.LT;
    cxt.fail$data((0, codegen_1$e._)`${data2}.length ${op} ${schemaCode}`);
  }
};
limitItems.default = def$k;
var uniqueItems = {};
var equal$1 = {};
Object.defineProperty(equal$1, "__esModule", { value: true });
const equal2 = fastDeepEqual;
equal2.code = 'require("ajv/dist/runtime/equal").default';
equal$1.default = equal2;
Object.defineProperty(uniqueItems, "__esModule", { value: true });
const dataType_1 = dataType;
const codegen_1$d = codegen;
const util_1$g = util;
const equal_1$2 = equal$1;
const error$b = {
  message: ({ params: { i, j } }) => (0, codegen_1$d.str)`must NOT have duplicate items (items ## ${j} and ${i} are identical)`,
  params: ({ params: { i, j } }) => (0, codegen_1$d._)`{i: ${i}, j: ${j}}`
};
const def$j = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: true,
  error: error$b,
  code(cxt) {
    const { gen, data: data2, $data, schema, parentSchema, schemaCode, it } = cxt;
    if (!$data && !schema)
      return;
    const valid = gen.let("valid");
    const itemTypes = parentSchema.items ? (0, dataType_1.getSchemaTypes)(parentSchema.items) : [];
    cxt.block$data(valid, validateUniqueItems, (0, codegen_1$d._)`${schemaCode} === false`);
    cxt.ok(valid);
    function validateUniqueItems() {
      const i = gen.let("i", (0, codegen_1$d._)`${data2}.length`);
      const j = gen.let("j");
      cxt.setParams({ i, j });
      gen.assign(valid, true);
      gen.if((0, codegen_1$d._)`${i} > 1`, () => (canOptimize() ? loopN : loopN2)(i, j));
    }
    function canOptimize() {
      return itemTypes.length > 0 && !itemTypes.some((t) => t === "object" || t === "array");
    }
    function loopN(i, j) {
      const item = gen.name("item");
      const wrongType = (0, dataType_1.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, dataType_1.DataType.Wrong);
      const indices = gen.const("indices", (0, codegen_1$d._)`{}`);
      gen.for((0, codegen_1$d._)`;${i}--;`, () => {
        gen.let(item, (0, codegen_1$d._)`${data2}[${i}]`);
        gen.if(wrongType, (0, codegen_1$d._)`continue`);
        if (itemTypes.length > 1)
          gen.if((0, codegen_1$d._)`typeof ${item} == "string"`, (0, codegen_1$d._)`${item} += "_"`);
        gen.if((0, codegen_1$d._)`typeof ${indices}[${item}] == "number"`, () => {
          gen.assign(j, (0, codegen_1$d._)`${indices}[${item}]`);
          cxt.error();
          gen.assign(valid, false).break();
        }).code((0, codegen_1$d._)`${indices}[${item}] = ${i}`);
      });
    }
    function loopN2(i, j) {
      const eql = (0, util_1$g.useFunc)(gen, equal_1$2.default);
      const outer = gen.name("outer");
      gen.label(outer).for((0, codegen_1$d._)`;${i}--;`, () => gen.for((0, codegen_1$d._)`${j} = ${i}; ${j}--;`, () => gen.if((0, codegen_1$d._)`${eql}(${data2}[${i}], ${data2}[${j}])`, () => {
        cxt.error();
        gen.assign(valid, false).break(outer);
      })));
    }
  }
};
uniqueItems.default = def$j;
var _const = {};
Object.defineProperty(_const, "__esModule", { value: true });
const codegen_1$c = codegen;
const util_1$f = util;
const equal_1$1 = equal$1;
const error$a = {
  message: "must be equal to constant",
  params: ({ schemaCode }) => (0, codegen_1$c._)`{allowedValue: ${schemaCode}}`
};
const def$i = {
  keyword: "const",
  $data: true,
  error: error$a,
  code(cxt) {
    const { gen, data: data2, $data, schemaCode, schema } = cxt;
    if ($data || schema && typeof schema == "object") {
      cxt.fail$data((0, codegen_1$c._)`!${(0, util_1$f.useFunc)(gen, equal_1$1.default)}(${data2}, ${schemaCode})`);
    } else {
      cxt.fail((0, codegen_1$c._)`${schema} !== ${data2}`);
    }
  }
};
_const.default = def$i;
var _enum = {};
Object.defineProperty(_enum, "__esModule", { value: true });
const codegen_1$b = codegen;
const util_1$e = util;
const equal_1 = equal$1;
const error$9 = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode }) => (0, codegen_1$b._)`{allowedValues: ${schemaCode}}`
};
const def$h = {
  keyword: "enum",
  schemaType: "array",
  $data: true,
  error: error$9,
  code(cxt) {
    const { gen, data: data2, $data, schema, schemaCode, it } = cxt;
    if (!$data && schema.length === 0)
      throw new Error("enum must have non-empty array");
    const useLoop = schema.length >= it.opts.loopEnum;
    const eql = (0, util_1$e.useFunc)(gen, equal_1.default);
    let valid;
    if (useLoop || $data) {
      valid = gen.let("valid");
      cxt.block$data(valid, loopEnum);
    } else {
      if (!Array.isArray(schema))
        throw new Error("ajv implementation error");
      const vSchema = gen.const("vSchema", schemaCode);
      valid = (0, codegen_1$b.or)(...schema.map((_x, i) => equalCode(vSchema, i)));
    }
    cxt.pass(valid);
    function loopEnum() {
      gen.assign(valid, false);
      gen.forOf("v", schemaCode, (v) => gen.if((0, codegen_1$b._)`${eql}(${data2}, ${v})`, () => gen.assign(valid, true).break()));
    }
    function equalCode(vSchema, i) {
      const sch = schema[i];
      return typeof sch === "object" && sch !== null ? (0, codegen_1$b._)`${eql}(${data2}, ${vSchema}[${i}])` : (0, codegen_1$b._)`${data2} === ${sch}`;
    }
  }
};
_enum.default = def$h;
Object.defineProperty(validation$1, "__esModule", { value: true });
const limitNumber_1 = limitNumber;
const multipleOf_1 = multipleOf;
const limitLength_1 = limitLength;
const pattern_1 = pattern;
const limitProperties_1 = limitProperties;
const required_1 = required;
const limitItems_1 = limitItems;
const uniqueItems_1 = uniqueItems;
const const_1 = _const;
const enum_1 = _enum;
const validation = [
  limitNumber_1.default,
  multipleOf_1.default,
  limitLength_1.default,
  pattern_1.default,
  limitProperties_1.default,
  required_1.default,
  limitItems_1.default,
  uniqueItems_1.default,
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  const_1.default,
  enum_1.default
];
validation$1.default = validation;
var applicator = {};
var additionalItems = {};
Object.defineProperty(additionalItems, "__esModule", { value: true });
additionalItems.validateAdditionalItems = void 0;
const codegen_1$a = codegen;
const util_1$d = util;
const error$8 = {
  message: ({ params: { len } }) => (0, codegen_1$a.str)`must NOT have more than ${len} items`,
  params: ({ params: { len } }) => (0, codegen_1$a._)`{limit: ${len}}`
};
const def$g = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: error$8,
  code(cxt) {
    const { parentSchema, it } = cxt;
    const { items: items2 } = parentSchema;
    if (!Array.isArray(items2)) {
      (0, util_1$d.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    validateAdditionalItems(cxt, items2);
  }
};
function validateAdditionalItems(cxt, items2) {
  const { gen, schema, data: data2, keyword: keyword2, it } = cxt;
  it.items = true;
  const len = gen.const("len", (0, codegen_1$a._)`${data2}.length`);
  if (schema === false) {
    cxt.setParams({ len: items2.length });
    cxt.pass((0, codegen_1$a._)`${len} <= ${items2.length}`);
  } else if (typeof schema == "object" && !(0, util_1$d.alwaysValidSchema)(it, schema)) {
    const valid = gen.var("valid", (0, codegen_1$a._)`${len} <= ${items2.length}`);
    gen.if((0, codegen_1$a.not)(valid), () => validateItems(valid));
    cxt.ok(valid);
  }
  function validateItems(valid) {
    gen.forRange("i", items2.length, len, (i) => {
      cxt.subschema({ keyword: keyword2, dataProp: i, dataPropType: util_1$d.Type.Num }, valid);
      if (!it.allErrors)
        gen.if((0, codegen_1$a.not)(valid), () => gen.break());
    });
  }
}
additionalItems.validateAdditionalItems = validateAdditionalItems;
additionalItems.default = def$g;
var prefixItems = {};
var items = {};
Object.defineProperty(items, "__esModule", { value: true });
items.validateTuple = void 0;
const codegen_1$9 = codegen;
const util_1$c = util;
const code_1$5 = code;
const def$f = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(cxt) {
    const { schema, it } = cxt;
    if (Array.isArray(schema))
      return validateTuple(cxt, "additionalItems", schema);
    it.items = true;
    if ((0, util_1$c.alwaysValidSchema)(it, schema))
      return;
    cxt.ok((0, code_1$5.validateArray)(cxt));
  }
};
function validateTuple(cxt, extraItems, schArr = cxt.schema) {
  const { gen, parentSchema, data: data2, keyword: keyword2, it } = cxt;
  checkStrictTuple(parentSchema);
  if (it.opts.unevaluated && schArr.length && it.items !== true) {
    it.items = util_1$c.mergeEvaluated.items(gen, schArr.length, it.items);
  }
  const valid = gen.name("valid");
  const len = gen.const("len", (0, codegen_1$9._)`${data2}.length`);
  schArr.forEach((sch, i) => {
    if ((0, util_1$c.alwaysValidSchema)(it, sch))
      return;
    gen.if((0, codegen_1$9._)`${len} > ${i}`, () => cxt.subschema({
      keyword: keyword2,
      schemaProp: i,
      dataProp: i
    }, valid));
    cxt.ok(valid);
  });
  function checkStrictTuple(sch) {
    const { opts, errSchemaPath } = it;
    const l = schArr.length;
    const fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false);
    if (opts.strictTuples && !fullTuple) {
      const msg = `"${keyword2}" is ${l}-tuple, but minItems or maxItems/${extraItems} are not specified or different at path "${errSchemaPath}"`;
      (0, util_1$c.checkStrictMode)(it, msg, opts.strictTuples);
    }
  }
}
items.validateTuple = validateTuple;
items.default = def$f;
Object.defineProperty(prefixItems, "__esModule", { value: true });
const items_1$1 = items;
const def$e = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (cxt) => (0, items_1$1.validateTuple)(cxt, "items")
};
prefixItems.default = def$e;
var items2020 = {};
Object.defineProperty(items2020, "__esModule", { value: true });
const codegen_1$8 = codegen;
const util_1$b = util;
const code_1$4 = code;
const additionalItems_1$1 = additionalItems;
const error$7 = {
  message: ({ params: { len } }) => (0, codegen_1$8.str)`must NOT have more than ${len} items`,
  params: ({ params: { len } }) => (0, codegen_1$8._)`{limit: ${len}}`
};
const def$d = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: error$7,
  code(cxt) {
    const { schema, parentSchema, it } = cxt;
    const { prefixItems: prefixItems2 } = parentSchema;
    it.items = true;
    if ((0, util_1$b.alwaysValidSchema)(it, schema))
      return;
    if (prefixItems2)
      (0, additionalItems_1$1.validateAdditionalItems)(cxt, prefixItems2);
    else
      cxt.ok((0, code_1$4.validateArray)(cxt));
  }
};
items2020.default = def$d;
var contains = {};
Object.defineProperty(contains, "__esModule", { value: true });
const codegen_1$7 = codegen;
const util_1$a = util;
const error$6 = {
  message: ({ params: { min, max } }) => max === void 0 ? (0, codegen_1$7.str)`must contain at least ${min} valid item(s)` : (0, codegen_1$7.str)`must contain at least ${min} and no more than ${max} valid item(s)`,
  params: ({ params: { min, max } }) => max === void 0 ? (0, codegen_1$7._)`{minContains: ${min}}` : (0, codegen_1$7._)`{minContains: ${min}, maxContains: ${max}}`
};
const def$c = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: true,
  error: error$6,
  code(cxt) {
    const { gen, schema, parentSchema, data: data2, it } = cxt;
    let min;
    let max;
    const { minContains, maxContains } = parentSchema;
    if (it.opts.next) {
      min = minContains === void 0 ? 1 : minContains;
      max = maxContains;
    } else {
      min = 1;
    }
    const len = gen.const("len", (0, codegen_1$7._)`${data2}.length`);
    cxt.setParams({ min, max });
    if (max === void 0 && min === 0) {
      (0, util_1$a.checkStrictMode)(it, `"minContains" == 0 without "maxContains": "contains" keyword ignored`);
      return;
    }
    if (max !== void 0 && min > max) {
      (0, util_1$a.checkStrictMode)(it, `"minContains" > "maxContains" is always invalid`);
      cxt.fail();
      return;
    }
    if ((0, util_1$a.alwaysValidSchema)(it, schema)) {
      let cond = (0, codegen_1$7._)`${len} >= ${min}`;
      if (max !== void 0)
        cond = (0, codegen_1$7._)`${cond} && ${len} <= ${max}`;
      cxt.pass(cond);
      return;
    }
    it.items = true;
    const valid = gen.name("valid");
    if (max === void 0 && min === 1) {
      validateItems(valid, () => gen.if(valid, () => gen.break()));
    } else if (min === 0) {
      gen.let(valid, true);
      if (max !== void 0)
        gen.if((0, codegen_1$7._)`${data2}.length > 0`, validateItemsWithCount);
    } else {
      gen.let(valid, false);
      validateItemsWithCount();
    }
    cxt.result(valid, () => cxt.reset());
    function validateItemsWithCount() {
      const schValid = gen.name("_valid");
      const count = gen.let("count", 0);
      validateItems(schValid, () => gen.if(schValid, () => checkLimits(count)));
    }
    function validateItems(_valid, block) {
      gen.forRange("i", 0, len, (i) => {
        cxt.subschema({
          keyword: "contains",
          dataProp: i,
          dataPropType: util_1$a.Type.Num,
          compositeRule: true
        }, _valid);
        block();
      });
    }
    function checkLimits(count) {
      gen.code((0, codegen_1$7._)`${count}++`);
      if (max === void 0) {
        gen.if((0, codegen_1$7._)`${count} >= ${min}`, () => gen.assign(valid, true).break());
      } else {
        gen.if((0, codegen_1$7._)`${count} > ${max}`, () => gen.assign(valid, false).break());
        if (min === 1)
          gen.assign(valid, true);
        else
          gen.if((0, codegen_1$7._)`${count} >= ${min}`, () => gen.assign(valid, true));
      }
    }
  }
};
contains.default = def$c;
var dependencies = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.validateSchemaDeps = exports2.validatePropertyDeps = exports2.error = void 0;
  const codegen_12 = codegen;
  const util_12 = util;
  const code_12 = code;
  exports2.error = {
    message: ({ params: { property, depsCount, deps } }) => {
      const property_ies = depsCount === 1 ? "property" : "properties";
      return (0, codegen_12.str)`must have ${property_ies} ${deps} when property ${property} is present`;
    },
    params: ({ params: { property, depsCount, deps, missingProperty } }) => (0, codegen_12._)`{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`
  };
  const def2 = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: exports2.error,
    code(cxt) {
      const [propDeps, schDeps] = splitDependencies(cxt);
      validatePropertyDeps(cxt, propDeps);
      validateSchemaDeps(cxt, schDeps);
    }
  };
  function splitDependencies({ schema }) {
    const propertyDeps = {};
    const schemaDeps = {};
    for (const key in schema) {
      if (key === "__proto__")
        continue;
      const deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps;
      deps[key] = schema[key];
    }
    return [propertyDeps, schemaDeps];
  }
  function validatePropertyDeps(cxt, propertyDeps = cxt.schema) {
    const { gen, data: data2, it } = cxt;
    if (Object.keys(propertyDeps).length === 0)
      return;
    const missing = gen.let("missing");
    for (const prop in propertyDeps) {
      const deps = propertyDeps[prop];
      if (deps.length === 0)
        continue;
      const hasProperty = (0, code_12.propertyInData)(gen, data2, prop, it.opts.ownProperties);
      cxt.setParams({
        property: prop,
        depsCount: deps.length,
        deps: deps.join(", ")
      });
      if (it.allErrors) {
        gen.if(hasProperty, () => {
          for (const depProp of deps) {
            (0, code_12.checkReportMissingProp)(cxt, depProp);
          }
        });
      } else {
        gen.if((0, codegen_12._)`${hasProperty} && (${(0, code_12.checkMissingProp)(cxt, deps, missing)})`);
        (0, code_12.reportMissingProp)(cxt, missing);
        gen.else();
      }
    }
  }
  exports2.validatePropertyDeps = validatePropertyDeps;
  function validateSchemaDeps(cxt, schemaDeps = cxt.schema) {
    const { gen, data: data2, keyword: keyword2, it } = cxt;
    const valid = gen.name("valid");
    for (const prop in schemaDeps) {
      if ((0, util_12.alwaysValidSchema)(it, schemaDeps[prop]))
        continue;
      gen.if((0, code_12.propertyInData)(gen, data2, prop, it.opts.ownProperties), () => {
        const schCxt = cxt.subschema({ keyword: keyword2, schemaProp: prop }, valid);
        cxt.mergeValidEvaluated(schCxt, valid);
      }, () => gen.var(valid, true));
      cxt.ok(valid);
    }
  }
  exports2.validateSchemaDeps = validateSchemaDeps;
  exports2.default = def2;
})(dependencies);
var propertyNames = {};
Object.defineProperty(propertyNames, "__esModule", { value: true });
const codegen_1$6 = codegen;
const util_1$9 = util;
const error$5 = {
  message: "property name must be valid",
  params: ({ params }) => (0, codegen_1$6._)`{propertyName: ${params.propertyName}}`
};
const def$b = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: error$5,
  code(cxt) {
    const { gen, schema, data: data2, it } = cxt;
    if ((0, util_1$9.alwaysValidSchema)(it, schema))
      return;
    const valid = gen.name("valid");
    gen.forIn("key", data2, (key) => {
      cxt.setParams({ propertyName: key });
      cxt.subschema({
        keyword: "propertyNames",
        data: key,
        dataTypes: ["string"],
        propertyName: key,
        compositeRule: true
      }, valid);
      gen.if((0, codegen_1$6.not)(valid), () => {
        cxt.error(true);
        if (!it.allErrors)
          gen.break();
      });
    });
    cxt.ok(valid);
  }
};
propertyNames.default = def$b;
var additionalProperties = {};
Object.defineProperty(additionalProperties, "__esModule", { value: true });
const code_1$3 = code;
const codegen_1$5 = codegen;
const names_1 = names$1;
const util_1$8 = util;
const error$4 = {
  message: "must NOT have additional properties",
  params: ({ params }) => (0, codegen_1$5._)`{additionalProperty: ${params.additionalProperty}}`
};
const def$a = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: true,
  trackErrors: true,
  error: error$4,
  code(cxt) {
    const { gen, schema, parentSchema, data: data2, errsCount, it } = cxt;
    if (!errsCount)
      throw new Error("ajv implementation error");
    const { allErrors, opts } = it;
    it.props = true;
    if (opts.removeAdditional !== "all" && (0, util_1$8.alwaysValidSchema)(it, schema))
      return;
    const props2 = (0, code_1$3.allSchemaProperties)(parentSchema.properties);
    const patProps = (0, code_1$3.allSchemaProperties)(parentSchema.patternProperties);
    checkAdditionalProperties();
    cxt.ok((0, codegen_1$5._)`${errsCount} === ${names_1.default.errors}`);
    function checkAdditionalProperties() {
      gen.forIn("key", data2, (key) => {
        if (!props2.length && !patProps.length)
          additionalPropertyCode(key);
        else
          gen.if(isAdditional(key), () => additionalPropertyCode(key));
      });
    }
    function isAdditional(key) {
      let definedProp;
      if (props2.length > 8) {
        const propsSchema = (0, util_1$8.schemaRefOrVal)(it, parentSchema.properties, "properties");
        definedProp = (0, code_1$3.isOwnProperty)(gen, propsSchema, key);
      } else if (props2.length) {
        definedProp = (0, codegen_1$5.or)(...props2.map((p) => (0, codegen_1$5._)`${key} === ${p}`));
      } else {
        definedProp = codegen_1$5.nil;
      }
      if (patProps.length) {
        definedProp = (0, codegen_1$5.or)(definedProp, ...patProps.map((p) => (0, codegen_1$5._)`${(0, code_1$3.usePattern)(cxt, p)}.test(${key})`));
      }
      return (0, codegen_1$5.not)(definedProp);
    }
    function deleteAdditional(key) {
      gen.code((0, codegen_1$5._)`delete ${data2}[${key}]`);
    }
    function additionalPropertyCode(key) {
      if (opts.removeAdditional === "all" || opts.removeAdditional && schema === false) {
        deleteAdditional(key);
        return;
      }
      if (schema === false) {
        cxt.setParams({ additionalProperty: key });
        cxt.error();
        if (!allErrors)
          gen.break();
        return;
      }
      if (typeof schema == "object" && !(0, util_1$8.alwaysValidSchema)(it, schema)) {
        const valid = gen.name("valid");
        if (opts.removeAdditional === "failing") {
          applyAdditionalSchema(key, valid, false);
          gen.if((0, codegen_1$5.not)(valid), () => {
            cxt.reset();
            deleteAdditional(key);
          });
        } else {
          applyAdditionalSchema(key, valid);
          if (!allErrors)
            gen.if((0, codegen_1$5.not)(valid), () => gen.break());
        }
      }
    }
    function applyAdditionalSchema(key, valid, errors2) {
      const subschema2 = {
        keyword: "additionalProperties",
        dataProp: key,
        dataPropType: util_1$8.Type.Str
      };
      if (errors2 === false) {
        Object.assign(subschema2, {
          compositeRule: true,
          createErrors: false,
          allErrors: false
        });
      }
      cxt.subschema(subschema2, valid);
    }
  }
};
additionalProperties.default = def$a;
var properties$1 = {};
Object.defineProperty(properties$1, "__esModule", { value: true });
const validate_1 = validate;
const code_1$2 = code;
const util_1$7 = util;
const additionalProperties_1$1 = additionalProperties;
const def$9 = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(cxt) {
    const { gen, schema, parentSchema, data: data2, it } = cxt;
    if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === void 0) {
      additionalProperties_1$1.default.code(new validate_1.KeywordCxt(it, additionalProperties_1$1.default, "additionalProperties"));
    }
    const allProps = (0, code_1$2.allSchemaProperties)(schema);
    for (const prop of allProps) {
      it.definedProperties.add(prop);
    }
    if (it.opts.unevaluated && allProps.length && it.props !== true) {
      it.props = util_1$7.mergeEvaluated.props(gen, (0, util_1$7.toHash)(allProps), it.props);
    }
    const properties2 = allProps.filter((p) => !(0, util_1$7.alwaysValidSchema)(it, schema[p]));
    if (properties2.length === 0)
      return;
    const valid = gen.name("valid");
    for (const prop of properties2) {
      if (hasDefault(prop)) {
        applyPropertySchema(prop);
      } else {
        gen.if((0, code_1$2.propertyInData)(gen, data2, prop, it.opts.ownProperties));
        applyPropertySchema(prop);
        if (!it.allErrors)
          gen.else().var(valid, true);
        gen.endIf();
      }
      cxt.it.definedProperties.add(prop);
      cxt.ok(valid);
    }
    function hasDefault(prop) {
      return it.opts.useDefaults && !it.compositeRule && schema[prop].default !== void 0;
    }
    function applyPropertySchema(prop) {
      cxt.subschema({
        keyword: "properties",
        schemaProp: prop,
        dataProp: prop
      }, valid);
    }
  }
};
properties$1.default = def$9;
var patternProperties = {};
Object.defineProperty(patternProperties, "__esModule", { value: true });
const code_1$1 = code;
const codegen_1$4 = codegen;
const util_1$6 = util;
const util_2 = util;
const def$8 = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(cxt) {
    const { gen, schema, data: data2, parentSchema, it } = cxt;
    const { opts } = it;
    const patterns = (0, code_1$1.allSchemaProperties)(schema);
    const alwaysValidPatterns = patterns.filter((p) => (0, util_1$6.alwaysValidSchema)(it, schema[p]));
    if (patterns.length === 0 || alwaysValidPatterns.length === patterns.length && (!it.opts.unevaluated || it.props === true)) {
      return;
    }
    const checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
    const valid = gen.name("valid");
    if (it.props !== true && !(it.props instanceof codegen_1$4.Name)) {
      it.props = (0, util_2.evaluatedPropsToName)(gen, it.props);
    }
    const { props: props2 } = it;
    validatePatternProperties();
    function validatePatternProperties() {
      for (const pat of patterns) {
        if (checkProperties)
          checkMatchingProperties(pat);
        if (it.allErrors) {
          validateProperties(pat);
        } else {
          gen.var(valid, true);
          validateProperties(pat);
          gen.if(valid);
        }
      }
    }
    function checkMatchingProperties(pat) {
      for (const prop in checkProperties) {
        if (new RegExp(pat).test(prop)) {
          (0, util_1$6.checkStrictMode)(it, `property ${prop} matches pattern ${pat} (use allowMatchingProperties)`);
        }
      }
    }
    function validateProperties(pat) {
      gen.forIn("key", data2, (key) => {
        gen.if((0, codegen_1$4._)`${(0, code_1$1.usePattern)(cxt, pat)}.test(${key})`, () => {
          const alwaysValid = alwaysValidPatterns.includes(pat);
          if (!alwaysValid) {
            cxt.subschema({
              keyword: "patternProperties",
              schemaProp: pat,
              dataProp: key,
              dataPropType: util_2.Type.Str
            }, valid);
          }
          if (it.opts.unevaluated && props2 !== true) {
            gen.assign((0, codegen_1$4._)`${props2}[${key}]`, true);
          } else if (!alwaysValid && !it.allErrors) {
            gen.if((0, codegen_1$4.not)(valid), () => gen.break());
          }
        });
      });
    }
  }
};
patternProperties.default = def$8;
var not = {};
Object.defineProperty(not, "__esModule", { value: true });
const util_1$5 = util;
const def$7 = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: true,
  code(cxt) {
    const { gen, schema, it } = cxt;
    if ((0, util_1$5.alwaysValidSchema)(it, schema)) {
      cxt.fail();
      return;
    }
    const valid = gen.name("valid");
    cxt.subschema({
      keyword: "not",
      compositeRule: true,
      createErrors: false,
      allErrors: false
    }, valid);
    cxt.failResult(valid, () => cxt.reset(), () => cxt.error());
  },
  error: { message: "must NOT be valid" }
};
not.default = def$7;
var anyOf = {};
Object.defineProperty(anyOf, "__esModule", { value: true });
const code_1 = code;
const def$6 = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: true,
  code: code_1.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
anyOf.default = def$6;
var oneOf = {};
Object.defineProperty(oneOf, "__esModule", { value: true });
const codegen_1$3 = codegen;
const util_1$4 = util;
const error$3 = {
  message: "must match exactly one schema in oneOf",
  params: ({ params }) => (0, codegen_1$3._)`{passingSchemas: ${params.passing}}`
};
const def$5 = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: true,
  error: error$3,
  code(cxt) {
    const { gen, schema, parentSchema, it } = cxt;
    if (!Array.isArray(schema))
      throw new Error("ajv implementation error");
    if (it.opts.discriminator && parentSchema.discriminator)
      return;
    const schArr = schema;
    const valid = gen.let("valid", false);
    const passing = gen.let("passing", null);
    const schValid = gen.name("_valid");
    cxt.setParams({ passing });
    gen.block(validateOneOf);
    cxt.result(valid, () => cxt.reset(), () => cxt.error(true));
    function validateOneOf() {
      schArr.forEach((sch, i) => {
        let schCxt;
        if ((0, util_1$4.alwaysValidSchema)(it, sch)) {
          gen.var(schValid, true);
        } else {
          schCxt = cxt.subschema({
            keyword: "oneOf",
            schemaProp: i,
            compositeRule: true
          }, schValid);
        }
        if (i > 0) {
          gen.if((0, codegen_1$3._)`${schValid} && ${valid}`).assign(valid, false).assign(passing, (0, codegen_1$3._)`[${passing}, ${i}]`).else();
        }
        gen.if(schValid, () => {
          gen.assign(valid, true);
          gen.assign(passing, i);
          if (schCxt)
            cxt.mergeEvaluated(schCxt, codegen_1$3.Name);
        });
      });
    }
  }
};
oneOf.default = def$5;
var allOf = {};
Object.defineProperty(allOf, "__esModule", { value: true });
const util_1$3 = util;
const def$4 = {
  keyword: "allOf",
  schemaType: "array",
  code(cxt) {
    const { gen, schema, it } = cxt;
    if (!Array.isArray(schema))
      throw new Error("ajv implementation error");
    const valid = gen.name("valid");
    schema.forEach((sch, i) => {
      if ((0, util_1$3.alwaysValidSchema)(it, sch))
        return;
      const schCxt = cxt.subschema({ keyword: "allOf", schemaProp: i }, valid);
      cxt.ok(valid);
      cxt.mergeEvaluated(schCxt);
    });
  }
};
allOf.default = def$4;
var _if = {};
Object.defineProperty(_if, "__esModule", { value: true });
const codegen_1$2 = codegen;
const util_1$2 = util;
const error$2 = {
  message: ({ params }) => (0, codegen_1$2.str)`must match "${params.ifClause}" schema`,
  params: ({ params }) => (0, codegen_1$2._)`{failingKeyword: ${params.ifClause}}`
};
const def$3 = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: true,
  error: error$2,
  code(cxt) {
    const { gen, parentSchema, it } = cxt;
    if (parentSchema.then === void 0 && parentSchema.else === void 0) {
      (0, util_1$2.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
    }
    const hasThen = hasSchema(it, "then");
    const hasElse = hasSchema(it, "else");
    if (!hasThen && !hasElse)
      return;
    const valid = gen.let("valid", true);
    const schValid = gen.name("_valid");
    validateIf();
    cxt.reset();
    if (hasThen && hasElse) {
      const ifClause = gen.let("ifClause");
      cxt.setParams({ ifClause });
      gen.if(schValid, validateClause("then", ifClause), validateClause("else", ifClause));
    } else if (hasThen) {
      gen.if(schValid, validateClause("then"));
    } else {
      gen.if((0, codegen_1$2.not)(schValid), validateClause("else"));
    }
    cxt.pass(valid, () => cxt.error(true));
    function validateIf() {
      const schCxt = cxt.subschema({
        keyword: "if",
        compositeRule: true,
        createErrors: false,
        allErrors: false
      }, schValid);
      cxt.mergeEvaluated(schCxt);
    }
    function validateClause(keyword2, ifClause) {
      return () => {
        const schCxt = cxt.subschema({ keyword: keyword2 }, schValid);
        gen.assign(valid, schValid);
        cxt.mergeValidEvaluated(schCxt, valid);
        if (ifClause)
          gen.assign(ifClause, (0, codegen_1$2._)`${keyword2}`);
        else
          cxt.setParams({ ifClause: keyword2 });
      };
    }
  }
};
function hasSchema(it, keyword2) {
  const schema = it.schema[keyword2];
  return schema !== void 0 && !(0, util_1$2.alwaysValidSchema)(it, schema);
}
_if.default = def$3;
var thenElse = {};
Object.defineProperty(thenElse, "__esModule", { value: true });
const util_1$1 = util;
const def$2 = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: keyword2, parentSchema, it }) {
    if (parentSchema.if === void 0)
      (0, util_1$1.checkStrictMode)(it, `"${keyword2}" without "if" is ignored`);
  }
};
thenElse.default = def$2;
Object.defineProperty(applicator, "__esModule", { value: true });
const additionalItems_1 = additionalItems;
const prefixItems_1 = prefixItems;
const items_1 = items;
const items2020_1 = items2020;
const contains_1 = contains;
const dependencies_1 = dependencies;
const propertyNames_1 = propertyNames;
const additionalProperties_1 = additionalProperties;
const properties_1 = properties$1;
const patternProperties_1 = patternProperties;
const not_1 = not;
const anyOf_1 = anyOf;
const oneOf_1 = oneOf;
const allOf_1 = allOf;
const if_1 = _if;
const thenElse_1 = thenElse;
function getApplicator(draft2020 = false) {
  const applicator2 = [
    not_1.default,
    anyOf_1.default,
    oneOf_1.default,
    allOf_1.default,
    if_1.default,
    thenElse_1.default,
    propertyNames_1.default,
    additionalProperties_1.default,
    dependencies_1.default,
    properties_1.default,
    patternProperties_1.default
  ];
  if (draft2020)
    applicator2.push(prefixItems_1.default, items2020_1.default);
  else
    applicator2.push(additionalItems_1.default, items_1.default);
  applicator2.push(contains_1.default);
  return applicator2;
}
applicator.default = getApplicator;
var format$2 = {};
var format$1 = {};
Object.defineProperty(format$1, "__esModule", { value: true });
const codegen_1$1 = codegen;
const error$1 = {
  message: ({ schemaCode }) => (0, codegen_1$1.str)`must match format "${schemaCode}"`,
  params: ({ schemaCode }) => (0, codegen_1$1._)`{format: ${schemaCode}}`
};
const def$1 = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: true,
  error: error$1,
  code(cxt, ruleType) {
    const { gen, data: data2, $data, schema, schemaCode, it } = cxt;
    const { opts, errSchemaPath, schemaEnv, self: self2 } = it;
    if (!opts.validateFormats)
      return;
    if ($data)
      validate$DataFormat();
    else
      validateFormat();
    function validate$DataFormat() {
      const fmts = gen.scopeValue("formats", {
        ref: self2.formats,
        code: opts.code.formats
      });
      const fDef = gen.const("fDef", (0, codegen_1$1._)`${fmts}[${schemaCode}]`);
      const fType = gen.let("fType");
      const format2 = gen.let("format");
      gen.if((0, codegen_1$1._)`typeof ${fDef} == "object" && !(${fDef} instanceof RegExp)`, () => gen.assign(fType, (0, codegen_1$1._)`${fDef}.type || "string"`).assign(format2, (0, codegen_1$1._)`${fDef}.validate`), () => gen.assign(fType, (0, codegen_1$1._)`"string"`).assign(format2, fDef));
      cxt.fail$data((0, codegen_1$1.or)(unknownFmt(), invalidFmt()));
      function unknownFmt() {
        if (opts.strictSchema === false)
          return codegen_1$1.nil;
        return (0, codegen_1$1._)`${schemaCode} && !${format2}`;
      }
      function invalidFmt() {
        const callFormat = schemaEnv.$async ? (0, codegen_1$1._)`(${fDef}.async ? await ${format2}(${data2}) : ${format2}(${data2}))` : (0, codegen_1$1._)`${format2}(${data2})`;
        const validData = (0, codegen_1$1._)`(typeof ${format2} == "function" ? ${callFormat} : ${format2}.test(${data2}))`;
        return (0, codegen_1$1._)`${format2} && ${format2} !== true && ${fType} === ${ruleType} && !${validData}`;
      }
    }
    function validateFormat() {
      const formatDef = self2.formats[schema];
      if (!formatDef) {
        unknownFormat();
        return;
      }
      if (formatDef === true)
        return;
      const [fmtType, format2, fmtRef] = getFormat(formatDef);
      if (fmtType === ruleType)
        cxt.pass(validCondition());
      function unknownFormat() {
        if (opts.strictSchema === false) {
          self2.logger.warn(unknownMsg());
          return;
        }
        throw new Error(unknownMsg());
        function unknownMsg() {
          return `unknown format "${schema}" ignored in schema at path "${errSchemaPath}"`;
        }
      }
      function getFormat(fmtDef) {
        const code2 = fmtDef instanceof RegExp ? (0, codegen_1$1.regexpCode)(fmtDef) : opts.code.formats ? (0, codegen_1$1._)`${opts.code.formats}${(0, codegen_1$1.getProperty)(schema)}` : void 0;
        const fmt = gen.scopeValue("formats", { key: schema, ref: fmtDef, code: code2 });
        if (typeof fmtDef == "object" && !(fmtDef instanceof RegExp)) {
          return [fmtDef.type || "string", fmtDef.validate, (0, codegen_1$1._)`${fmt}.validate`];
        }
        return ["string", fmtDef, fmt];
      }
      function validCondition() {
        if (typeof formatDef == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
          if (!schemaEnv.$async)
            throw new Error("async format in sync schema");
          return (0, codegen_1$1._)`await ${fmtRef}(${data2})`;
        }
        return typeof format2 == "function" ? (0, codegen_1$1._)`${fmtRef}(${data2})` : (0, codegen_1$1._)`${fmtRef}.test(${data2})`;
      }
    }
  }
};
format$1.default = def$1;
Object.defineProperty(format$2, "__esModule", { value: true });
const format_1$1 = format$1;
const format = [format_1$1.default];
format$2.default = format;
var metadata = {};
Object.defineProperty(metadata, "__esModule", { value: true });
metadata.contentVocabulary = metadata.metadataVocabulary = void 0;
metadata.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
metadata.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(draft7, "__esModule", { value: true });
const core_1 = core$1;
const validation_1 = validation$1;
const applicator_1 = applicator;
const format_1 = format$2;
const metadata_1 = metadata;
const draft7Vocabularies = [
  core_1.default,
  validation_1.default,
  (0, applicator_1.default)(),
  format_1.default,
  metadata_1.metadataVocabulary,
  metadata_1.contentVocabulary
];
draft7.default = draft7Vocabularies;
var discriminator = {};
var types = {};
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DiscrError = void 0;
  (function(DiscrError) {
    DiscrError["Tag"] = "tag";
    DiscrError["Mapping"] = "mapping";
  })(exports2.DiscrError || (exports2.DiscrError = {}));
})(types);
Object.defineProperty(discriminator, "__esModule", { value: true });
const codegen_1 = codegen;
const types_1 = types;
const compile_1 = compile;
const util_1 = util;
const error = {
  message: ({ params: { discrError, tagName } }) => discrError === types_1.DiscrError.Tag ? `tag "${tagName}" must be string` : `value of tag "${tagName}" must be in oneOf`,
  params: ({ params: { discrError, tag, tagName } }) => (0, codegen_1._)`{error: ${discrError}, tag: ${tagName}, tagValue: ${tag}}`
};
const def = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error,
  code(cxt) {
    const { gen, data: data2, schema, parentSchema, it } = cxt;
    const { oneOf: oneOf2 } = parentSchema;
    if (!it.opts.discriminator) {
      throw new Error("discriminator: requires discriminator option");
    }
    const tagName = schema.propertyName;
    if (typeof tagName != "string")
      throw new Error("discriminator: requires propertyName");
    if (schema.mapping)
      throw new Error("discriminator: mapping is not supported");
    if (!oneOf2)
      throw new Error("discriminator: requires oneOf keyword");
    const valid = gen.let("valid", false);
    const tag = gen.const("tag", (0, codegen_1._)`${data2}${(0, codegen_1.getProperty)(tagName)}`);
    gen.if((0, codegen_1._)`typeof ${tag} == "string"`, () => validateMapping(), () => cxt.error(false, { discrError: types_1.DiscrError.Tag, tag, tagName }));
    cxt.ok(valid);
    function validateMapping() {
      const mapping = getMapping();
      gen.if(false);
      for (const tagValue in mapping) {
        gen.elseIf((0, codegen_1._)`${tag} === ${tagValue}`);
        gen.assign(valid, applyTagSchema(mapping[tagValue]));
      }
      gen.else();
      cxt.error(false, { discrError: types_1.DiscrError.Mapping, tag, tagName });
      gen.endIf();
    }
    function applyTagSchema(schemaProp) {
      const _valid = gen.name("valid");
      const schCxt = cxt.subschema({ keyword: "oneOf", schemaProp }, _valid);
      cxt.mergeEvaluated(schCxt, codegen_1.Name);
      return _valid;
    }
    function getMapping() {
      var _a;
      const oneOfMapping = {};
      const topRequired = hasRequired(parentSchema);
      let tagRequired = true;
      for (let i = 0; i < oneOf2.length; i++) {
        let sch = oneOf2[i];
        if ((sch === null || sch === void 0 ? void 0 : sch.$ref) && !(0, util_1.schemaHasRulesButRef)(sch, it.self.RULES)) {
          sch = compile_1.resolveRef.call(it.self, it.schemaEnv, it.baseId, sch === null || sch === void 0 ? void 0 : sch.$ref);
          if (sch instanceof compile_1.SchemaEnv)
            sch = sch.schema;
        }
        const propSch = (_a = sch === null || sch === void 0 ? void 0 : sch.properties) === null || _a === void 0 ? void 0 : _a[tagName];
        if (typeof propSch != "object") {
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${tagName}"`);
        }
        tagRequired = tagRequired && (topRequired || hasRequired(sch));
        addMappings(propSch, i);
      }
      if (!tagRequired)
        throw new Error(`discriminator: "${tagName}" must be required`);
      return oneOfMapping;
      function hasRequired({ required: required2 }) {
        return Array.isArray(required2) && required2.includes(tagName);
      }
      function addMappings(sch, i) {
        if (sch.const) {
          addMapping(sch.const, i);
        } else if (sch.enum) {
          for (const tagValue of sch.enum) {
            addMapping(tagValue, i);
          }
        } else {
          throw new Error(`discriminator: "properties/${tagName}" must have "const" or "enum"`);
        }
      }
      function addMapping(tagValue, i) {
        if (typeof tagValue != "string" || tagValue in oneOfMapping) {
          throw new Error(`discriminator: "${tagName}" values must be unique strings`);
        }
        oneOfMapping[tagValue] = i;
      }
    }
  }
};
discriminator.default = def;
const $schema = "http://json-schema.org/draft-07/schema#";
const $id = "http://json-schema.org/draft-07/schema#";
const title = "Core schema meta-schema";
const definitions = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $ref: "#"
    }
  },
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    allOf: [
      {
        $ref: "#/definitions/nonNegativeInteger"
      },
      {
        "default": 0
      }
    ]
  },
  simpleTypes: {
    "enum": [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: true,
    "default": []
  }
};
const type = [
  "object",
  "boolean"
];
const properties = {
  $id: {
    type: "string",
    format: "uri-reference"
  },
  $schema: {
    type: "string",
    format: "uri"
  },
  $ref: {
    type: "string",
    format: "uri-reference"
  },
  $comment: {
    type: "string"
  },
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  "default": true,
  readOnly: {
    type: "boolean",
    "default": false
  },
  examples: {
    type: "array",
    items: true
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  additionalItems: {
    $ref: "#"
  },
  items: {
    anyOf: [
      {
        $ref: "#"
      },
      {
        $ref: "#/definitions/schemaArray"
      }
    ],
    "default": true
  },
  maxItems: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    "default": false
  },
  contains: {
    $ref: "#"
  },
  maxProperties: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/definitions/stringArray"
  },
  additionalProperties: {
    $ref: "#"
  },
  definitions: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    "default": {}
  },
  properties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    "default": {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    propertyNames: {
      format: "regex"
    },
    "default": {}
  },
  dependencies: {
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $ref: "#"
        },
        {
          $ref: "#/definitions/stringArray"
        }
      ]
    }
  },
  propertyNames: {
    $ref: "#"
  },
  "const": true,
  "enum": {
    type: "array",
    items: true,
    minItems: 1,
    uniqueItems: true
  },
  type: {
    anyOf: [
      {
        $ref: "#/definitions/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/definitions/simpleTypes"
        },
        minItems: 1,
        uniqueItems: true
      }
    ]
  },
  format: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentEncoding: {
    type: "string"
  },
  "if": {
    $ref: "#"
  },
  then: {
    $ref: "#"
  },
  "else": {
    $ref: "#"
  },
  allOf: {
    $ref: "#/definitions/schemaArray"
  },
  anyOf: {
    $ref: "#/definitions/schemaArray"
  },
  oneOf: {
    $ref: "#/definitions/schemaArray"
  },
  not: {
    $ref: "#"
  }
};
var require$$3 = {
  $schema,
  $id,
  title,
  definitions,
  type,
  properties,
  "default": true
};
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.CodeGen = exports2.Name = exports2.nil = exports2.stringify = exports2.str = exports2._ = exports2.KeywordCxt = void 0;
  const core_12 = core$2;
  const draft7_1 = draft7;
  const discriminator_1 = discriminator;
  const draft7MetaSchema = require$$3;
  const META_SUPPORT_DATA = ["/properties"];
  const META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";
  class Ajv2 extends core_12.default {
    _addVocabularies() {
      super._addVocabularies();
      draft7_1.default.forEach((v) => this.addVocabulary(v));
      if (this.opts.discriminator)
        this.addKeyword(discriminator_1.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      if (!this.opts.meta)
        return;
      const metaSchema = this.opts.$data ? this.$dataMetaSchema(draft7MetaSchema, META_SUPPORT_DATA) : draft7MetaSchema;
      this.addMetaSchema(metaSchema, META_SCHEMA_ID, false);
      this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : void 0);
    }
  }
  module2.exports = exports2 = Ajv2;
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.default = Ajv2;
  var validate_12 = validate;
  Object.defineProperty(exports2, "KeywordCxt", { enumerable: true, get: function() {
    return validate_12.KeywordCxt;
  } });
  var codegen_12 = codegen;
  Object.defineProperty(exports2, "_", { enumerable: true, get: function() {
    return codegen_12._;
  } });
  Object.defineProperty(exports2, "str", { enumerable: true, get: function() {
    return codegen_12.str;
  } });
  Object.defineProperty(exports2, "stringify", { enumerable: true, get: function() {
    return codegen_12.stringify;
  } });
  Object.defineProperty(exports2, "nil", { enumerable: true, get: function() {
    return codegen_12.nil;
  } });
  Object.defineProperty(exports2, "Name", { enumerable: true, get: function() {
    return codegen_12.Name;
  } });
  Object.defineProperty(exports2, "CodeGen", { enumerable: true, get: function() {
    return codegen_12.CodeGen;
  } });
})(ajv, ajv.exports);
var Ajv = /* @__PURE__ */ getDefaultExportFromCjs(ajv.exports);
function vfjsValidationInitialize() {
  const { ajv: ajv2 = {} } = this.vfjsOptions;
  const { options = {}, keywords = {}, plugins = {} } = ajv2;
  this.ajv = new Ajv(__spreadProps(__spreadValues({}, options), {
    allErrors: true
  }));
  Object.keys(plugins).forEach((name) => {
    if (typeof plugins[name] === "function") {
      plugins[name](this.ajv);
    }
  });
  Object.keys(keywords).forEach((key) => {
    this.ajv.addKeyword(key, keywords[key]);
  });
  Object.keys(this.schemas).forEach((key) => {
    this.ajv.addSchema(this.schemas[key], key);
  });
  this.ajv.validate(this.getVfjsSchema(), {});
  if (this.ajv.errors) {
    const propertiesRequired = this.getVfjsPropertiesRequired(this.ajv.errors);
    this.vfjsFieldsRequired = this.getVfjsChildPropertiesRequired(propertiesRequired);
  }
}
const vfjsValidation = __spreadValues(__spreadValues({
  vfjsValidationInitialize
}, getters), setters);
const vfjsMethods = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, vfjsBus), vfjsLifecycle), vfjsHelpers), vfjsModel), vfjsSchema), vfjsState), vfjsUi), vfjsValidation);
const props = {
  [VFJS_EXTERNAL_COMPONENTS_PROP]: {
    type: Object,
    default: () => ({})
  },
  [VFJS_EXTERNAL_MODEL_PROP]: {
    type: Object,
    default: () => ({})
  },
  [VFJS_EXTERNAL_SCHEMA_PROP]: {
    type: Object,
    required: true,
    default: () => ({})
  },
  [VFJS_EXTERNAL_SCHEMAS_PROP]: {
    type: Object,
    default: () => ({})
  },
  [VFJS_EXTERNAL_ID_PROP]: {
    type: String,
    default: () => Math.random().toString(36).substring(2, 11)
  },
  [VFJS_EXTERNAL_OPTIONS_PROP]: {
    type: Object,
    default: () => ({})
  },
  [VFJS_EXTERNAL_TAG_PROP]: {
    type: String,
    default: "div"
  },
  [VFJS_EXTERNAL_UI_SCHEMA_PROP]: {
    type: Array,
    required: true,
    default: () => ({})
  }
};
const watch = {
  [VFJS_EXTERNAL_COMPONENTS_PROP](value) {
    this.vfjsComponents = Object.assign({}, value);
  },
  [VFJS_EXTERNAL_MODEL_PROP]: {
    deep: true,
    handler(value) {
      this.setVfjsModel(value);
    }
  },
  [VFJS_EXTERNAL_SCHEMA_PROP](value) {
    this.setVfjsSchema(value);
  },
  [VFJS_EXTERNAL_UI_SCHEMA_PROP](value) {
    this.setVfjsUiSchema(value);
  },
  [VFJS_EXTERNAL_OPTIONS_PROP](value) {
    this.vfjsOptions = merge$1({}, this.vfjsOptions, value);
    if (this.vfjsOptions.showValidationErrors) {
      this.setVfjsValidationErrors();
    }
  }
};
const vfjsGlobalMixin = {
  model: {
    prop: VFJS_EXTERNAL_MODEL_PROP,
    event: VFJS_EXTERNAL_EVENT_CHANGE
  },
  created() {
    this.vfjsInitialize();
  },
  beforeUnmount() {
    this.vfjsDestroy();
  },
  emits: [
    VFJS_EXTERNAL_EVENT_CHANGE,
    VFJS_EXTERNAL_EVENT_STATE_CHANGE,
    VFJS_EXTERNAL_EVENT_VALIDATED
  ],
  computed,
  data,
  props,
  methods: vfjsMethods,
  watch
};
const VueFormJsonSchema = __spreadProps(__spreadValues({
  name: "vue-form-json-schema"
}, vfjsGlobalMixin), {
  render() {
    return vfjsHelperCreateElement(this.tag, [...this.vfjsFields]);
  }
});
function install(Vue, options = {
  component: "vue-form-json-schema"
}) {
  if (!install.installed) {
    install.installed = true;
    Vue.component(options.component, VueFormJsonSchema);
  }
}
const plugin = {
  install
};
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue && typeof GlobalVue.use === "function") {
  GlobalVue.use(plugin);
}
export { VueFormJsonSchema as default, VueFormJsonSchemaFieldComponent as vfjsField, vfjsFieldMixin, VueFormJsonSchema as vfjsGlobal, vfjsGlobalMixin, plugin as vfjsPlugin };
//# sourceMappingURL=vue3-form-json-schema.es.js.map
