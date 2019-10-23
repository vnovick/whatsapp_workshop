/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Button, StatusBar} from 'react-native';
import {ChatViewScreen, ConversationsScreen} from './src/screens';

const App: () => React$Node = () => {
  const [isConversationsScreen, setisConversationsScreen] = useState(true);

  const renderScreen = () => {
    return isConversationsScreen ? <ConversationsScreen /> : <ChatViewScreen />;
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {renderScreen()}
          <View>
            <Button
              title="Switch Screen"
              onPress={() => {
                setisConversationsScreen(!isConversationsScreen);
              }}
            />
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
