const {toCount} = require('@taufik-nurrohman/to');

const forEachArray = function (array, at) {
    for (let i = 0, j = toCount(array), v; i < j; ++i) {
        v = at(array[i], i);
        if (-1 === v) {
            array.splice(i, 1);
            continue;
        }
        if (0 === v) {
            break;
        }
        if (1 === v) {
            continue;
        }
    }
    return array;
};

const forEachMap = function (map, at) {
    for (let [k, v] of map) {
        v = at(v, k);
        if (-1 === v) {
            map.delete(k);
            continue;
        }
        if (0 === v) {
            break;
        }
        if (1 === v) {
            continue;
        }
    }
    return map;
};

const forEachObject = function (object, at) {
    let v;
    for (let k in object) {
        v = at(object[k], k);
        if (-1 === v) {
            delete object[k];
            continue;
        }
        if (0 === v) {
            break;
        }
        if (1 === v) {
            continue;
        }
    }
    return object;
};

export const forEachSet = function (set, at) {
    return forEachMap(set, at);
};

const getPrototype = of => of.prototype;

const getReference = key => getValueInMap(key, references) || null;

const getValueInMap = (k, map) => map.get(k);

const hasKeyInMap = (k, map) => map.has(k);

const letReference = k => letValueInMap(k, references);

const letValueInMap = (k, map) => map.delete(k);

const setObjectAttributes = function (of, attributes, asStaticAttributes) {
    if (!asStaticAttributes) {
        of = getPrototype(of);
    }
    return forEachObject(attributes, (v, k) => {
        Object.defineProperty(of, k, v);
    }), of;
};

const setObjectMethods = function (of, methods, asStaticMethods) {
    if (!asStaticMethods) {
        of = getPrototype(of);
    }
    return forEachObject(methods, (v, k) => {
        of[k] = v;
    }), of;
};

const setPrototype = (of, value) => of.prototype = value;

const setReference = (key, value) => setValueInMap(key, value, references);

const setValueInMap = (k, v, map) => map.set(k, v);

const toKeyFirstFromMap = map => toKeysFromMap(map).shift();

const toKeyLastFromMap = map => toKeysFromMap(map).pop();

const toKeysFromMap = function (map) {
    let r = [];
    return forEachMap(map, (v, k) => {
        r.push(k);
    }), r;
};

const toValueFirstFromMap = map => toValuesFromMap(map).shift();

const toValueLastFromMap = map => toValuesFromMap(map).pop();

const toValuesFromMap = function (map) {
    let r = [];
    return forEachMap(map, v => {
        r.push(v);
    }), r;
};

const references = new WeakMap;

Object.assign(exports, {
    forEachArray,
    forEachMap,
    forEachObject,
    forEachSet,
    getPrototype,
    getReference,
    getValueInMap,
    hasKeyInMap,
    letReference,
    letValueInMap,
    setObjectAttributes,
    setObjectMethods,
    setPrototype,
    setReference,
    setValueInMap,
    toKeyFirstFromMap,
    toKeyLastFromMap,
    toKeysFromMap,
    toValueFirstFromMap,
    toValueLastFromMap,
    toValuesFromMap
});