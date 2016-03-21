import React, { Component, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';
import { Actions } from 'react-native-router-flux';
import { logout } from '../actions/loginActions';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome'

class HomeScreen extends Component {
  increment = () => {
    this.props.actions.increment();
  };

  decrement = () => {
    this.props.actions.decrement();
  };

  render() {
    const { counter, user } = this.props;

    const titleConfig = {
      title: 'Home',
      tintColor: 'black',
    };

    const logoutButtonConfig = {
      title: 'Logout',
      handler: () =>  {
        this.props.actions.logout();
        Actions.pop();
      }
    };

    return (
      <View style={styles.container}>
        <NavigationBar
          title={titleConfig}
          tintColor="#ADF8D1"
          rightButton={logoutButtonConfig}
        />
        <Text>{JSON.stringify(user)}</Text>
        <View style={styles.center}>
          <Text>Counter: {counter}</Text>
          <Icon.Button
            name="plus"
            onPress={this.increment} />
          <Icon.Button
            name="minus"
            background="red"
            onPress={this.decrement} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    //flexDirection: 'row'
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    alignSelf: 'center',
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});

function mapStateToProps(state) {
  const { counter, user } = state;

  return {
    counter,
    user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      logout: () => dispatch(logout()),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);