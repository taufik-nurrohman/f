import {isFunction} from '@taufik-nurrohman/is';
import {toCount} from '@taufik-nurrohman/to';

export const forEachArray = function (array, at) {
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

export const forEachMap = function (map, at) {
    for (let [k, v] of map) {
        v = at(v, k);
        if (-1 === v) {
            letValueInMap(k, map);
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

export const forEachObject = function (object, at) {
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
    for (let [k, v] of set.entries()) {
        v = at(v, k);
        if (-1 === v) {
            letValueInMap(k, set);
            continue;
        }
        if (0 === v) {
            break;
        }
        if (1 === v) {
            continue;
        }
    }
    return set;
};

export const getPrototype = of => of.prototype;

export const getReference = key => getValueInMap(key, references) || null;

export const getValueInMap = (k, map) => map.get(k);

export const hasKeyInMap = (k, map) => map.has(k);

export const letReference = k => letValueInMap(k, references);

export const letValueInMap = (k, map) => map.delete(k);

export const onAnimationsEnd = (node, task) => {
    return (isFunction(node.getAnimations) ? Promise.all(node.getAnimations().map(v => v.finished)).then(task) : task()), node;
};

export const setObjectAttributes = function (of, attributes, asStaticAttributes) {
    if (!asStaticAttributes) {
        of = getPrototype(of);
    }
    return forEachObject(attributes, (v, k) => {
        Object.defineProperty(of, k, v);
    }), of;
};

export const setObjectMethods = function (of, methods, asStaticMethods) {
    if (!asStaticMethods) {
        of = getPrototype(of);
    }
    return forEachObject(methods, (v, k) => {
        of[k] = v;
    }), of;
};

export const setPrototype = (of, value) => (getPrototype(of) = value);

export const setReference = (key, value) => setValueInMap(key, value, references);

export const setValueInMap = (k, v, map) => map.set(k, v);

export const toKeyFirstFromMap = map => toKeysFromMap(map).shift();

export const toKeyLastFromMap = map => toKeysFromMap(map).pop();

export const toKeysFromMap = function (map) {
    let r = [];
    return forEachMap(map, (v, k) => {
        r.push(k);
    }), r;
};

export const toValueFirstFromMap = map => toValuesFromMap(map).shift();

export const toValueLastFromMap = map => toValuesFromMap(map).pop();

export const toValuesFromMap = function (map) {
    let r = [];
    return forEachMap(map, v => {
        r.push(v);
    }), r;
};

const references = new WeakMap;