import React, { Component, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

class HomeScreen extends Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    const { counter } = this.props;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>Counter: {counter}</Text>
        <TouchableHighlight
          onPress={this.increment}>
          <Text>+</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.decrement}>
          <Text>-</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'row'
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
  const { counter } = state;

  return {
    counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);