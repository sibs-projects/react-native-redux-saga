'use strict';

import React, {Component} from 'react';
import {StatusBarIOS, Text, View, Navigator, StyleSheet, StatusBar} from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './containers/LoginScreen';
import HomeScreen from './containers/HomeScreen';

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

class MyApp extends Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  }

  render() {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return <LoginScreen />;
    }

    return (
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene key="tabbar" tags={true} tabBarStyle={styles.tabBar} default="home" type="reset" duration={1} initial={true} >
              <Scene
                key="home"
                title="HomeScreen"
                icon={TabIcon}
                hideNavBar={true}
                component={HomeScreen} />
            </Scene>
          </Scene>
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

const mapStateToProps = function(state) {
  const { user } = state;
  return {
    isAuthenticated: user.isAuthenticated,
  }
};

export default connect(mapStateToProps)(MyApp);
