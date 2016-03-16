'use strict';

import React, {
  Component,
  StatusBarIOS,
  Text,
  View,
  Navigator,
  StyleSheet
} from 'react-native';

import ReactNativeRouter, {
  Actions,
  Route,
  Schema,
  Animations,
  TabBar
} from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import Icon             from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './containers/HomeScreen';

// Connect router to redux
const Router = connect()(ReactNativeRouter.Router);

class TabIcon extends Component {
  render() {
    const color = this.props.selected ? '#247CFB' : '#0c7dd3';
    const backgroundColor = this.props.selected ? '#D7E7FF' : '#FFFFFF';

    return (
      <View style={[styles.tabItem, {backgroundColor: backgroundColor}]}>
        <Icon style={{color: color}} name={this.props.iconName || "circle"} size={18} />
        <Text style={{color: color, fontSize: 8}}>{this.props.title}</Text>
      </View>
    );
  }
}

export default class WatchPub extends Component {
  componentDidMount() {
    StatusBarIOS.setStyle('default');
  }

  render() {
    return (
      <View style={styles.container}>
        <Router hideNavBar={true} >
          <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom} hideNavBar={true}/>
          <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight} hideNavBar={true}/>
          <Schema name="withoutAnimation"/>
          <Schema name="tab" type="switch" icon={TabIcon}/>

          <Route name="main">
            <Router footer={TabBar} tabBarStyle={styles.tabBar} showNavigationBar={false} >
              <Route name="HomeScreen" schema="tab" title="HomeScreen" hideNavBar={true} component={HomeScreen} />
            </Router>
          </Route>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    borderTopColor: '#e1e1e1',
    borderTopWidth: 1,
    backgroundColor: '#FFFFFF',
    opacity: 0.98
  },
  navigationBarStyle: {
    backgroundColor: '#00f'
  },
  navigationBarTitleStyle: {
    color:'white'
  },
  navigationBarleftButtonTextStyle:{
    color:'white'
  },
  navTitleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  tabItem: {
    flex: 1,
    width: 100,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  }
});
