"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Collection extends Map {
    constructor(iterable = []) {
        super(iterable);
    }
    firstKey() {
        return this.keys().next().value;
    }
    firstValue() {
        return this.values().next().value;
    }
    lastKey() {
        return [...this.keys()].reverse()[0];
    }
    lastValue() {
        return [...this.values()].reverse()[0];
    }
}
exports.default = Collection;
