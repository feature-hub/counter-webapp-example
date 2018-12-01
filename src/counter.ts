import {
  FeatureServiceBinder,
  FeatureServiceProviderDefinition,
  SharedFeatureService
} from '@feature-hub/core';

export interface CounterV1 {
  getCount(): number;
  decrement(): void;
  increment(): void;
}

export interface SharedCounter extends SharedFeatureService {
  readonly '1.0': FeatureServiceBinder<CounterV1>;
}

class CounterV1Impl implements CounterV1 {
  private count = 0;

  public getCount(): number {
    return this.count;
  }

  public decrement(): void {
    this.count -= 1;
  }

  public increment(): void {
    this.count += 1;
  }
}

export const counterDefinition: FeatureServiceProviderDefinition = {
  id: 'example:counter',
  create: () => {
    const counterV1 = new CounterV1Impl();

    return {
      '1.0': () => ({featureService: counterV1})
    };
  }
};
