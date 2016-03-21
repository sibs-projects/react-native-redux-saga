import React, { Component, Navigator } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import MyApp from './MyApp';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    );
  }
}