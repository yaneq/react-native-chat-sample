import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './ChatList.styles';

export const ChatListComponent = ({chats, navigation}) => {
  return (
    <View>
      <Text> in chat list component with chats </Text>
      {chats.map((chat, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate('ChatScreen', {chat: chat})}>
            <View style={styles.chatContainer}>
              <Text>{chat.title}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
