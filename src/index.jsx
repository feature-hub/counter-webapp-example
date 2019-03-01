import {createFeatureHub} from '@feature-hub/core';
import {loadAmdModule} from '@feature-hub/module-loader-amd';
import {
  FeatureAppContainer,
  FeatureHubContextProvider
} from '@feature-hub/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import counterDefinition from './counter';
import counterControlDefinition from './counter-control';
import counterDisplayDefinition from './counter-display';
import counterResetDefinition from './counter-reset';

const {featureAppManager} = createFeatureHub('example:counter-web-app', {
  featureServiceDefinitions: [counterDefinition],
  moduleLoader: loadAmdModule
});

ReactDOM.render(
  <FeatureHubContextProvider value={{featureAppManager}}>
    <FeatureAppContainer featureAppDefinition={counterControlDefinition} />
    <FeatureAppContainer featureAppDefinition={counterResetDefinition} />
    <FeatureAppContainer featureAppDefinition={counterDisplayDefinition} />
  </FeatureHubContextProvider>,
  document.getElementById('app')
);
