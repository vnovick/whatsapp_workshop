import React from 'react';
import {StyleSheet, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

const USER_ID = '124b15ed-50f4-42d3-ac74-0cb1293f4d7b';

export const Message = ({item}) => {
  const incoming = item.userId !== USER_ID;
  return (
    <Animatable.View
      duration={200}
      animation={incoming ? 'slideInLeft' : 'slideInRight'}
      style={[styles.message, incoming && styles.incomingMessage]}>
      <Text>{item.message}</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
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
