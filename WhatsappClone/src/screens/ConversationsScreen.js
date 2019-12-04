import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {getChats} from '../services/api';
import {ChatItem} from '../components';

export const ConversationsScreen = ({navigation}) => {
  const [chats, setchats] = useState([]);
  useEffect(() => {
    const fetchChats = async () => {
      const chatsResult = await getChats();
      setchats(chatsResult);
    };
    fetchChats();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({item}) => (
          <ChatItem item={item} navigate={navigation.navigate} />
        )}
        keyExtractor={(item, index) => `message-${index}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

ConversationsScreen.navigationOptions = {
  title: 'Conversations',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0, .1)',
  },
});
