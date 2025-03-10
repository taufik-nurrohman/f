import {toCount} from '@taufik-nurrohman/to';

export const forEachArray = function (array, then) {
    for (let i = 0, j = toCount(array), v; i < j; ++i) {
        v = then(array[i], i);
        if (0 === v) {
            break;
        }
        if (1 === v) {
            continue;
        }
    }
    return array;
};

export const forEachMap = function (map, then) {
    for (let [k, v] of map) {
        v = then(v, k);
        if (0 === v) {
            break;
        }
        if (1 === v) {
            continue;
        }
    }
    return map;
};

export const forEachObject = function (object, then) {
    let v;
    for (let k in object) {
        v = then(object[k], k);
        if (0 === v) {
            break;
        }
        if (1 === v) {
            continue;
        }
    }
    return object;
};