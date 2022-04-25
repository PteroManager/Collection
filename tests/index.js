let { default: Collection } = require('../')

let collection = new Collection();

collection.set('a', 1);
collection.set('b', 2);
collection.set('c', 3);
collection.set('d', 4);
collection.set('e', 5);
collection.set('f', 6);

console.log(collection.valueAt(2))