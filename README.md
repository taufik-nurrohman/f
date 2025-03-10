Utility functions that do not fit into a specific category.

Usage
-----

### CommonJS

~~~ js
const {forEachArray} = require('@taufik-nurrohman/h');

forEachArray([1, 2, 3], function (value, key) {
    console.log(value);
});
~~~

### ECMAScript

~~~ js
import {forEachArray} from '@taufik-nurrohman/h';

forEachArray([1, 2, 3], function (value, key) {
    console.log(value);
});
~~~

Methods
-------

### forEachArray(array, then)

### forEachMap(map, then)

### forEachObject(object, then)