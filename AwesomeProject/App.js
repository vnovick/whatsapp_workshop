/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native Workshop!</Text>
          <Text style={styles.instructions}> To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Text style={styles.welcome}>Assignment</Text>
          <View style={styles.workshopInstructions}>
            <Text style={styles.instructions}>1. Create src folder</Text>
            <Text style={styles.instructions}>
              2. Create src/screens/ChatsScreen.js component
            </Text>
            <Text style={styles.instructions}>
              3. Create src/screens/ChatViewScreen.js component
            </Text>
            <Text style={styles.instructions}>
              4. Create src/components/Compose.js component
            </Text>
            <Text style={styles.instructions}>
              5. Create src/components/Message.js component
            </Text>
            <Text style={styles.instructions}>
              6. Create src/components/ChatItem.js component
            </Text>
            <Text style={styles.instructions}>
              7. Create src/components/Avatar.js component
            </Text>
            <Text style={styles.instructions}>
              8. Switch different screens in App.js by changing state
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151019',
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    width: '80%',
  },
  instructions: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 15,
  },
  workshopInstructions: {
    alignItems: 'flex-start',
  },
});

export default App;
