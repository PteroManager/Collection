<div align="center">
<a href="https://npmjs.com/package/@pteromanager/collection" target="_blank">
<img src="https://img.shields.io/npm/v/@pteromanager/collection.svg" alt=""/>
</a>
<a href="https://pteromanager.ga/discord" target="_blank">
<img alt="Discord" src="https://img.shields.io/discord/949749367236083732?color=Blue&label=Discord%20Server&logo=Discord&logoColor=White">
</a>
<a href="https://npmjs.com/package/@pteromanager/collection" target="_blank">
<img src="https://img.shields.io/npm/dt/@pteromanager/collection.svg" alt=""/>
</a>
<a href="https://npmjs.com/package/@pteromanager/collection" target="_blank">
<img src="https://img.shields.io/npm/dw/@pteromanager/collection.svg" alt=""/>
</a>
<a href="https://npmjs.com/package/@pteromanager/collection" target="_blank">
<img src="https://img.shields.io/npm/dw/@pteromanager/collection.svg" alt=""/>
</a>
<a href="https://github.com/PteroManager/Collection" target="_blank">
<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/PteroManager/Collection">
</a>

# @PteroManager/Collection
</div>

@PteroManager/Collection is an extended class the Map class. It is used to store a collection of objects.

<div align="center">

# Installation
</div>

```sh
npm i @pteromanager/collection
```

<div align="center">

# How to use it
</div>

```js
const { default: Collection } = require('@pteromanager/collection');
const myCollection = new Collection();

myCollection.set('a', 1);
myCollection.set('b', 2);
myCollection.set('c', 3);

console.log(myCollection.get('a'));
// => 1
console.log(myCollection.firstKey());
// => 'a'
console.log(myCollection.firstValue());
// => 1
console.log(myCollection.lastKey());
// => 'c'
console.log(myCollection.lastValue());
// => 3
```

<div align="center">

# Support
</div>

You can read the [documentation](https://pteromanager..ga) for more information or [join our Discord Server](https://pteromanager.ga/discord).