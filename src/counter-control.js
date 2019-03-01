function createButton(title, onClick) {
  const button = document.createElement('button');

  button.innerHTML = title;
  button.onclick = onClick;

  return button;
}

export default {
  id: 'example:counter-control',

  dependencies: {
    'example:counter': '^1.0'
  },

  create(env) {
    const counter = env.featureServices['example:counter'];

    return {
      attachTo(container) {
        container.appendChild(createButton('-', () => counter.decrement()));
        container.appendChild(createButton('+', () => counter.increment()));
      }
    };
  }
};
