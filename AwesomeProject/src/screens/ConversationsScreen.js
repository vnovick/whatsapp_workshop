import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import {ChatItem} from '../components';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_CONVERSATIONS = gql`
  {
    conversations {
      id
      title
      description
      date
      user {
        id
        avatar
      }
    }
  }
`;

export const ConversationsScreen = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_CONVERSATIONS);

  const getConversationsView = () => {
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
        data={data.conversations}
        renderItem={({item}) => (
          <ChatItem item={item} navigate={navigation.navigate} />
        )}
        keyExtractor={(item, index) => `message-${index}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    );
  };
  return <View style={styles.container}>{getConversationsView()}</View>;
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
