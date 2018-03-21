import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// In React Native, all components must be imported
// from the React Native library or another React Native
// based library.

// HTML tags do not exists. Only a limited set of
// CSS properties exist. We can't use stylesheets.
// CSS must be inlined for every component.

// The <View> is a generic container like <div>.
// The <Text> is require to display any text on the screen.

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: new Date()
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  startTimer () {
    if (!this.intervalId) {
      this.intervalId = setInterval(
        () => {
          this.setState({
            currentTime: new Date()
          })
        },
        1000
      );
    }
  }

  stopTimer () {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  render() {
    const {currentTime} = this.state;

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 100}}>⏰</Text>
        <Text style={{fontSize: 40}}>
            {currentTime.toLocaleTimeString()}
        </Text>
        <View style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around"
        }}>
          <TouchableOpacity
            style={{
              padding: 5,
              borderRadius: 5,
              backgroundColor: "maroon",
              width: 120,
              alignItems: "center"
            }}
            onPress={this.startTimer}
          >
            <Text style={{fontSize: 40, color: "white"}}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 5,
              borderRadius: 5,
              backgroundColor: "maroon",
              width: 120,
              alignItems: "center"
            }}
            onPress={this.stopTimer}
          >
            <Text style={{fontSize: 40, color: "white"}}>Stop</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
// Logs from console.log will appear in the terminal tab where
// expo is running (or where you used the command `yarn start`)

// For styling, all named colors work. You can use hex, rgb and rgba
// colors as well. To layout, you must use flexbox.
// Every React element is already a "flex-item/flex-container".
// By default, the flex-direction is always "column".
// Style dimensions are just numbers or %. We do not get em, rem, etc.
// Plain numbers for dimensions count as scaled pixels.

const styles = StyleSheet.create({
  container: {
    flex: 1, // 👈 flexGrow
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
