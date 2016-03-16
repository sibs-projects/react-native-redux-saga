import { createStore, applyMiddleware, compose  } from 'redux'
import createLogger from 'redux-logger'
import reducers from '../reducers/index';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import saga from 'redux-saga';
import sagas from '../sagas/index';


export default function configureStore() {

  const engine = createEngine('AppTree');
  const middleware = storage.createMiddleware(engine);

  let store = createStore(
    storage.reducer(reducers), //Apply redux-storage so we can persist Redux state to disk
    compose(
      applyMiddleware(
        saga(sagas),
        middleware
        //createLogger()
      )
    )
  );

  const load = storage.createLoader(engine);
  load(store);

  return store;
}