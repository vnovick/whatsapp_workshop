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
import {ApolloProvider} from '@apollo/react-hooks';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {split} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition} from 'apollo-utilities';

// Create an http link:
const httpLink = new HttpLink({
  uri: 'https://whatsapp-workshop.herokuapp.com/v1/graphql',
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://whatsapp-workshop.herokuapp.com/v1/graphql`,
  options: {
    reconnect: true,
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const cache = new InMemoryCache();
const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,
});

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
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" />
      <AppContainer />
    </ApolloProvider>
  );
};

export default App;
