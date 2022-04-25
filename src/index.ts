interface CollectionConstructor {
    new(): Collection<unknown, unknown>;
    new <K, V>(entries?: ReadonlyArray<readonly [K, V]> | null): Collection<K, V>;
    new <K, V>(iterable: Iterable<readonly [K, V]>): Collection<K, V>;
    readonly prototype: Collection<unknown, unknown>;
    readonly [Symbol.species]: CollectionConstructor;
}

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

class Collection<K, V> extends Map<K, V> {
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
    public firstKey(): K | undefined {
        return this.keys().next().value;
    }

    /**
     * Returns the first value of the collection.
     * @returns {V} [V]
     */
    public firstValue(): V | undefined {
        return this.values().next().value;
    }

    /**
     * Returns the last key of the collection.
     * @returns {K} [K]
     */
    public lastKey(): K | undefined {
        return [...this.keys()].reverse()[0];
    }

    /**
     * Returns the last value of the collection.
     * @returns {V} [V]
     */
    public lastValue(): V | undefined {
        return [...this.values()].reverse()[0];
    }
}

export default Collection;