import React, { Component, Navigator } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import HomeScreen from './containers/HomeScreen';

const store = configureStore();

export default class App extends Component {
  renderScene = (route, navigator) => {
    return <route.component navigator={navigator} route={route} />
  };

  render() {
    return (
      <Provider store={store}>
        <Navigator
          ref='navigator'
          renderScene={this.renderScene}
          initialRoute={{
            component: HomeScreen,
          }}
          configureScene={route => route.sceneConfig || Navigator.SceneConfigs.FloatFromRight}
        />
      </Provider>
    );
  }
}