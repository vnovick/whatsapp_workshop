import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {Avatar} from './Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ChatItem = ({
  navigate,
  item: {id, avatar, title, description, date},
}) => {
  const imageUrl = {uri: avatar};

  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  return (
    <Animated.View
      style={{
        opacity: animatedValue,
        transform: [
          {
            translateX: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-100, 0],
            }),
          },
        ],
      }}>
      <TouchableOpacity
        style={styles.chatItem}
        onPress={() => navigate('chatView', {id, title})}>
        <Avatar src={imageUrl} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.label}>{description}</Text>
        </View>
        <View style={styles.navLabel}>
          <Text style={styles.label}>{date}</Text>
          <Icon style={styles.arrow} name="chevron-right" size={20} />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 24,
    marginLeft: 24,
  },
  content: {
    flex: 5,
  },
  navLabel: {
    flex: 2,
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
  },
  label: {
    color: 'rgba(0,0,0,.5)',
  },
  arrow: {
    color: 'rgba(0,0,0,.5)',
  },
});
