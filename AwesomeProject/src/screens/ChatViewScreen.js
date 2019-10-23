import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {getMessagesById, postMessage} from '../services/api';
import {Compose, Message} from '../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ChatViewScreen = () => {
  const getMessageItem = item => {
    return (
      <View
        style={[
          styles.message,
          item.incoming ? styles.incomingMessage : styles.outgoingMessage,
        ]}>
        <Text>{item.message}</Text>
      </View>
    );
  };

  const [messages, setmessages] = useState([]);

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;
  useEffect(() => {
    const fetchMessages = async () => {
      const result = await getMessagesById();
      setmessages(result);
    };
    fetchMessages();
  }, [messages]);

  return (
    <ImageBackground
      source={require('../assets/imgs/background.png')}
      style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={styles.container}>
        <FlatList
          style={styles.container}
          data={messages}
          renderItem={Message}
          keyExtractor={(item, index) => `message-${index}`}
        />
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
