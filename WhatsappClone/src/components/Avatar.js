import React from 'react';
import {Image, View, StyleSheet, Platform} from 'react-native';

export const Avatar = ({src}) => (
  <View style={styles.avatarContainer}>
    <Image resizeMethod="scale" style={styles.avatar} source={src} />
  </View>
);

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    flex: 2,
    overflow:'hidden'
  },
  avatar: {
    resizeMode: 'stretch',
    borderRadius: Platform.OS === 'ios' ? 20: 80,
    width: 40,
    height: 40,
  },
});
