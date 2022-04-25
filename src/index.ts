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
     * Returns all the keys of the collection inside an array.
     * @returns {Array<K>} [K[]]
     */
    public keysToArray(): K[] {
        return [...this.keys()];
    }

    /**
     * Returns all the values of the collection inside an array
     * @returns {Array<V>} [V]
     */
    public valuesToArray(): V[] {
        return [...this.values()];
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

    /**
     * Returns a random chosen key from the collection.
     * @returns {K} [K]
     */
    public randomKey(): K | undefined {
        let randomNumber = Math.floor(Math.random() * this.size);
        let keyArray = this.keysToArray();

        return keyArray[randomNumber];
    }

    /**
     * Returns a random chosen value from the collection.
     * @returns {V} [V]
     */
    public randomValue(): V | undefined {
        let randomNumber = Math.floor(Math.random() * this.size);
        let valueArray = this.valuesToArray();

        return valueArray[randomNumber];
    }

    /**
     * Returns the key at the given position.
     * @param position {number} The position of the key.
     * @returns {K} [K]
     */
    public keyAt(position: number): K | undefined {
        let keyArray = this.keysToArray();

        return keyArray[position];
    }

    /**
     * Returns the value at the given position.
     * @param position {number} The position of the value.
     * @returns {V} [K]
     */
    public valueAt(position: number): V | undefined {
        let valueArray = this.valuesToArray();

        return valueArray[position];
    }

    /**
     * Returns a new collection with the reversed keys and values.
     * @returns {Collection<K, V>} [Collection<K, V>]
     */
    public reverse(): Collection<K, V> {
        let array = this.keysToArray();

        array = array.reverse()

        let reversed = new Collection<K, V>();

        for (let key of array) {
            let value = this.get(key)
            reversed.set(key, (value as unknown) as V);
        }

        return reversed;
    }

    /**
     * Returns a new collection with the keys and values in a random order.
     * @returns {Collection<K, V>} [Collection<K, V>]
     */
    public shuffle(): Collection<K, V> {
        let array = this.keysToArray();
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        let shuffled = new Collection<K, V>();
        for (let key of array) {
            let value = this.get(key)
            shuffled.set(key, (value as unknown) as V);
        }

        return shuffled;
    }
}

export default Collection;