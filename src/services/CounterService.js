import { BaseService } from "./BaseService";

export default class CounterService extends BaseService {
    constructor(count = 0) {
        super();
        this._count = count;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    get count() {
        return this._count;
    }

    set count(value) {
        this._count = value;
        this._emitUpdate();
    }
}
