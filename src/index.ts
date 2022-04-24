class Collection<K, V> extends Map<K, V> {
    constructor(iterable: Iterable<[K, V]> = []) {
        super(iterable);
    }
    
    public add(key: K, value: V): this {
        this.set(key, value);
        return this;
    }
    
    public delete(key: K): boolean {
        return this.delete(key);
    }
    
    public has(key: K): boolean {
        return this.has(key);
    }
    
    public get(key: K): V | undefined {
        return this.get(key);
    }
    
    public set(key: K, value: V): this {
        this.set(key, value);
        return this;
    }
    
    public clear(): void {
        this.clear();
    }
    
    public forEach(callbackfn: (value: V, key: K, map: this) => void, thisArg?: any): void {
        this.forEach(callbackfn, thisArg);
    }
    
    public entries(): IterableIterator<[K, V]> {
        return this.entries();
    }
    
    public keys(): IterableIterator<K> {
        return this.keys();
    }
    
    public values(): IterableIterator<V> {
        return this.values();
    }
    
    public [Symbol.iterator](): IterableIterator<[K, V]> {
        return this[Symbol.iterator]();
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