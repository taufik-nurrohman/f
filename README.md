Utility functions that do not fit into a specific category.

Usage
-----

### CommonJS

~~~ js
const {forEachArray} = require('@taufik-nurrohman/f');

forEachArray([1, 2, 3], function (value, key) {
    console.log(value);
});
~~~

### ECMAScript

~~~ js
import {forEachArray} from '@taufik-nurrohman/f';

forEachArray([1, 2, 3], function (value, key) {
    console.log(value);
});
~~~

Methods
-------

### forEachArray(array, at)

### forEachMap(map, at)

### forEachObject(object, at)

### getPrototype(of)

### getReference(key)

### getValueInMap(key, map)

### hasKeyInMap(key, map)

### letReference(key)

### letValueInMap(key)

### setObjectAttributes(of, attributes, asStaticAttributes)

~~~ js
function Editor(self, state) {
    this.self = self;
    this.state = state;
    return this;
}

setObjectAttributes(Editor, {
    'name': {
        value: 'Editor'
    }
}, true);

setObjectAttributes(Editor, {
    'value': {
        get: function () {
            return this.self.value;
        },
        set: function (value) {
            this.self.value = value;
        }
    }
});
~~~

### setObjectMethods(of, methods, asStaticMethods)

~~~ js
function Editor(self, state) {
    this.self = self;
    this.state = state;
    return this;
}

setObjectMethods(Editor, {
    'restore': function () {
        this.value = localStorage.getItem('session');
        return this;
    },
    'save': function () {
        localStorage.setItem('session', this.value);
        return this;
    }
});
~~~

### setPrototype(of, value)

### setReference(key, value)

### setValueInMap(key, value, map)

### toKeyFirstFromMap(map)

### toKeyLastFromMap(map)

### toKeysFromMap(map)

### toValueFirstFromMap(map)

### toValueLastFromMap(map)

### toValuesFromMap(map)