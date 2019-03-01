class CounterV1 {
  constructor(count = 0) {
    this.count = count;
    this.listeners = new Set();
  }

  subscribe(listener) {
    this.listeners.add(listener);

    return () => this.listeners.delete(listener);
  }

  update(count, uniqueConsumerId) {
    this.count = count;
    this.listeners.forEach(listener => listener(uniqueConsumerId));
  }
}

export class ConsumerCounterV1 {
  constructor(counter, uniqueConsumerId) {
    this.counter = counter;
    this.uniqueConsumerId = uniqueConsumerId;
  }

  get count() {
    return this.counter.count;
  }

  decrement() {
    this.update(this.counter.count - 1);
  }

  increment() {
    this.update(this.counter.count + 1);
  }

  reset() {
    this.update(0);
  }

  subscribe(listener) {
    return this.counter.subscribe(listener);
  }

  update(count) {
    this.counter.update(count, this.uniqueConsumerId);
  }
}

export default {
  id: 'example:counter',

  create: () => {
    const sharedCounter = new CounterV1();

    return {
      '1.0': uniqueConsumerId => ({
        featureService: new ConsumerCounterV1(sharedCounter, uniqueConsumerId)
      })
    };
  }
};
