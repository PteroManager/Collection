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
}
exports.default = Collection;
