
const counter = {
    value: 0,
    tick() {
        this.value += 1;
    }
};

class getEmitter {
    constructor() {
        this._store = {
            notification: new Map,
            subscriber1: [],
            subscriber2: []
        }
    }

    on(eventName, subscriber, handler) {
        if (!this._store[eventName]) {
            this._store[eventName] = new Map();
        }
        if (!this._store[eventName].has(subscriber)) {
            this._store[eventName].set(subscriber, []);
        }

        this._store[eventName].get(subscriber).push(handler);

        return this;
    }

    off(eventName, subscriber) {
        if (!this._store[eventName]) {
            return this;
        }

        this._store[eventName].delete(subscriber);

        return this;
    }

    emit(eventName) {
        if (!this._store[eventName]) {
            return this;
        }

        this._store[eventName].forEach((handlers, subscriber) => {
            handlers.forEach(handler => handler.call(subscriber));
        });

        return this;
    }
}

module.exports = new getEmitter();



