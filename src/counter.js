class CounterV1 {
  constructor() {
    this.count = 0;
    this.listeners = [];
  }

  decrement() {
    this._update(this.count - 1);
  }

  increment() {
    this._update(this.count + 1);
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  _update(count) {
    this.count = count;

    for (const listener of this.listeners) {
      listener();
    }
  }
}

export const counterDefinition = {
  id: 'example:counter',

  create: () => {
    const counterV1 = new CounterV1();

    return {
      '1.0': () => ({featureService: counterV1})
    };
  }
};
