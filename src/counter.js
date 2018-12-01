class CounterV1 {
  constructor() {
    this.count = 0;
  }

  decrement() {
    this.count -= 1;
  }

  increment() {
    this.count += 1;
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
