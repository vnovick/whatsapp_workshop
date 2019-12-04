import React from 'react';
import {StyleSheet, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

export const Message = ({item}) => (
  <Animatable.View
    duration={200}
    animation={item.incoming ? 'slideInLeft' : 'slideInRight'}
    style={[styles.message, item.incoming && styles.incomingMessage]}>
    <Text>{item.message}</Text>
  </Animatable.View>
);

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
