export default {
  id: 'example:counter-control',

  dependencies: {
    'example:counter': '^1.0'
  },

  create(env) {
    const counterV1 = env.featureServices['example:counter'];

    return {
      attachTo(container) {
        const minusButton = document.createElement('button');

        minusButton.innerHTML = '-';
        minusButton.onclick = () => counterV1.decrement();

        container.appendChild(minusButton);

        const plusButton = document.createElement('button');

        plusButton.innerHTML = '+';
        plusButton.onclick = () => counterV1.increment();

        container.appendChild(plusButton);
      }
    };
  }
};
