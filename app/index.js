import React, {Component} from 'react';
import {Navigator} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import MyApp from './MyApp';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <MyApp />
      </Provider>
    );
  }
}