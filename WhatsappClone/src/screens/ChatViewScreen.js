import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {Compose, Message} from '../components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSubscription, useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const SEND_MESSAGE = gql`
  mutation sendMessage($userId: uuid, $conversationId: uuid, $text: String) {
    insert_chats(
      objects: {
        userId: $userId
        conversationId: $conversationId
        message: $text
      }
    ) {
      affected_rows
    }
  }
`;

const GET_CHATS = gql`
  subscription getChats($conversationId: uuid) {
    chats(where: {conversationId: {_eq: $conversationId}}) {
      id
      message
      date
      userId
    }
  }
`;

export const ChatViewScreen = ({navigation}) => {
  const {loading, error, data} = useSubscription(GET_CHATS, {
    variables: {
      conversationId: navigation.state.params.id,
    },
  });

  const [sendMessage] = useMutation(SEND_MESSAGE);

  const postMessage = text => {
    sendMessage({
      variables: {
        userId: navigation.state.params.userId,
        conversationId: navigation.state.params.id,
        text,
      },
      refetchQueries: ['getChats'],
    });
  };

  const getChatsView = () => {
    if (loading) {
      return <ActivityIndicator />;
    }
    if (error) {
      return (
        <View>
          <Text>{JSON.stringify(error)}</Text>
        </View>
      );
    }

    return (
      <FlatList
        style={styles.container}
        data={data.chats}
        renderItem={Message}
        keyExtractor={item => `message-${item.id}`}
      />
    );
  };

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

  return (
    <ImageBackground
      source={require('../assets/imgs/background.png')}
      style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={styles.container}>
        {getChatsView()}
        <Compose submit={postMessage} />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

ChatViewScreen.navigationOptions = ({navigation}) => {
  return {
    title: navigation.state.params.title,
    headerLeft: (
      <Icon
        name="chevron-left"
        size={40}
        color="#ffffff"
        onPress={() => navigation.goBack()}
      />
    ),
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  message: {
    width: '70%',
    margin: 10,
    padding: 10,
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7',
    borderRadius: 10,
  },
  incomingMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
});
