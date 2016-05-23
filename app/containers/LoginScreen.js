import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TextInput} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/loginActions';
import { Actions } from 'react-native-router-flux';

class LoginScreen extends Component {
  state = {
    email: 'user@gmail.com',
    password: 'user',
  };

  loginEmail = () => {
    const { email, password } = this.state;

    console.log(email, password, this.props.actions);

    this.props.actions.loginRequest(email, password);
    //Actions.main();
  };

  render() {
    const { email, password } = this.state;
    const { user } = this.props;


    const titleConfig = {
      title: 'Meetup Async Login',
      tintColor: 'black',
    };

    let error;
    if (user.errorMessage !== '') {
      console.log('user', user, user.errorMessage);
      error = <Text style={{backgroundColor: 'red'}}>{user.errorMessage}</Text>;
    }

    return (
      <View style={styles.container}>
        <NavigationBar
          title={titleConfig}
          tintColor="#ADF8D1"
        />
        <View>
          {error}
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={email => this.setState({email})}
            value={email}
          />

          <TextInput
            style={styles.input}
            placeholder="password"
            onChangeText={password => this.setState({password})}
            value={password}
          />

          <Icon.Button
            name="envelope-o"
            onPress={this.loginEmail}>
            Login
          </Icon.Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //flexDirection: 'row'
  },

  input: {
    alignSelf: 'center',
    height: 44,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});

function mapStateToProps(state) {
  const { user } = state;

  return {
    user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);