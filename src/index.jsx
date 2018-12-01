import './styles.css';

import {FeatureAppManager, FeatureServiceRegistry} from '@feature-hub/core';
import {loadAmdModule} from '@feature-hub/module-loader';
import {FeatureAppContainer} from '@feature-hub/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {counterDefinition} from './counter';
import counterControlDefinition from './counter-control';

const registry = new FeatureServiceRegistry({});

registry.registerProviders([counterDefinition], 'counter-web-app');

const manager = new FeatureAppManager(registry, loadAmdModule);

ReactDOM.render(
  <div>
    <FeatureAppContainer
      manager={manager}
      featureAppDefinition={counterControlDefinition}
    />
  </div>,
  document.getElementById('app')
);
