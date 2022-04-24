class Collection<K, V> extends Map<K, V> {
    constructor(iterable: Iterable<[K, V]> = []) {
        super(iterable);
    }
    
    public firstKey(): K | undefined {
        return this.keys().next().value;
    }

    public firstValue(): V | undefined {
        return this.values().next().value;
    }

    public lastKey(): K | undefined {
        return [...this.keys()].reverse()[0];
    }

    public lastValue(): V | undefined {
        return [...this.values()].reverse()[0];
    }
}

export default Collection;