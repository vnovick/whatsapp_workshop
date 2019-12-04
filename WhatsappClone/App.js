/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, YellowBox} from 'react-native';
import {ChatViewScreen, ConversationsScreen} from './src/screens';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

YellowBox.ignoreWarnings([
  'Warning: DatePickerAndroid', // will be fixed with https://github.com/mmazzarolo/react-native-modal-datetime-picker/pull/262
  'RCTRootView cancelTouches', // https://github.com/kmagiera/react-native-gesture-handler/issues/746
]);

const AppNavigator = createStackNavigator(
  {
    conversationsScreen: ConversationsScreen,
    chatView: ChatViewScreen,
  },
  {
    initialRouteName: 'conversationsScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#006655',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppContainer />
    </>
  );
};

export default App;
