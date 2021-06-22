import * as React from 'react';
import { StatusBar, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo';

export default class App extends React.Component {
  state = {
    inputValue: ''
  };

  render() {
    return (
        <LinearGradient colors={['#667eea', '#764ba2']} style={{ flex:1 }}>
          <StatusBar barStyle="light-content" />
          <View>
            <TextInput
    style={styles.input}
    placeholder="Type here to add a to do."
    placeholderTextColor={'#fff'}
    multiline={true}
    autoCapitalize="sentences"
    underlineColorAndroid="transparent"
    selectionColor={'white'}
    maxLength={30}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit={true}
  />
          </View>
        </LinearGradient>
    );
  }
}

const styles = {
  input:
    {
      marginTop: 30,
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 34,
    color: 'white',
    fontWeight: '500'
  }
}
