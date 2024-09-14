export class BaseService {
    constructor() {
        this.onUpdate = null;
    }

    _emitUpdate() {
        if (typeof this.onUpdate === "function") {
            this.onUpdate();
        }
    }
}
