import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

export const Avatar = ({src}) => (
  <View style={styles.avatarContainer}>
    <Image resizeMethod="scale" style={styles.avatar} source={src} />
  </View>
);

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    flex: 2,
  },
  avatar: {
    resizeMode: 'stretch',
    borderRadius: 20,
    width: 40,
    height: 40,
  },
});
