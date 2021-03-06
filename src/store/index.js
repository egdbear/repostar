import { compose, applyMiddleware, createStore } from 'redux';
import { saveState, loadState } from './persistance';

import reducer from '../reducers';
import { createLogger } from 'redux-logger';

const persistedState = loadState();

const configureStore = (initialState) => {
  const store = createStore(
    reducer,
    persistedState,
    compose(
      applyMiddleware(
        createLogger()
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
};

const configuredStore = configureStore();

configuredStore.subscribe(() => {
  saveState(configuredStore.getState())
});

export default configuredStore;
