"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a new Collection
 * @constructor
 * @template K, V
 * @extends {Map<K, V>}
 * @extends {Collection<K, V>}
 * @implements {Collection<K, V>}
 * @implements {Iterable<readonly [K, V]>}
 * @implements {CollectionConstructor<K, V>}
 * @implements {CollectionConstructor<unknown, unknown>}
 */
class Collection extends Map {
    /**
     * Returns a new collection with the given key-value pairs.
     */
    constructor() {
        super();
    }
    /**
     * Returns all the keys of the collection inside an array.
     * @returns {Array<K>} [K[]]
     */
    keysToArray() {
        return [...this.keys()];
    }
    /**
     * Returns all the values of the collection inside an array
     * @returns {Array<V>} [V]
     */
    valuesToArray() {
        return [...this.values()];
    }
    /**
     * Returns the first key of the collection.
     * @returns {K} [K]
     */
    firstKey() {
        return this.keys().next().value;
    }
    /**
     * Returns the first value of the collection.
     * @returns {V} [V]
     */
    firstValue() {
        return this.values().next().value;
    }
    /**
     * Returns the last key of the collection.
     * @returns {K} [K]
     */
    lastKey() {
        return [...this.keys()].reverse()[0];
    }
    /**
     * Returns the last value of the collection.
     * @returns {V} [V]
     */
    lastValue() {
        return [...this.values()].reverse()[0];
    }
    /**
     * Returns a random chosen key from the collection.
     * @returns {K} [K]
     */
    randomKey() {
        let randomNumber = Math.floor(Math.random() * this.size);
        let keyArray = this.keysToArray();
        return keyArray[randomNumber];
    }
    /**
     * Returns a random chosen value from the collection.
     * @returns {V} [V]
     */
    randomValue() {
        let randomNumber = Math.floor(Math.random() * this.size);
        let valueArray = this.valuesToArray();
        return valueArray[randomNumber];
    }
    /**
     * Returns the key at the given position.
     * @param position {number} The position of the key.
     * @returns {K} [K]
     */
    keyAt(position) {
        let keyArray = this.keysToArray();
        return keyArray[position];
    }
    /**
     * Returns the value at the given position.
     * @param position {number} The position of the value.
     * @returns {V} [K]
     */
    valueAt(position) {
        let valueArray = this.valuesToArray();
        return valueArray[position];
    }
    /**
     * Returns a new collection with the reversed keys and values.
     * @returns {Collection<K, V>} [Collection<K, V>]
     */
    reverse() {
        let array = this.keysToArray();
        array = array.reverse();
        let reversed = new Collection();
        for (let key of array) {
            let value = this.get(key);
            reversed.set(key, value);
        }
        return reversed;
    }
    /**
     * Returns a new collection with the keys and values in a random order.
     * @returns {Collection<K, V>} [Collection<K, V>]
     */
    shuffle() {
        let array = this.keysToArray();
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        let shuffled = new Collection();
        for (let key of array) {
            let value = this.get(key);
            shuffled.set(key, value);
        }
        return shuffled;
    }
}
exports.default = Collection;
