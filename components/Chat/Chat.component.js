import React from 'react';
import {Text, View,Platform, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {styles} from './Chat.styles';

export const ChatComponent = ({navigation, messages}) => {
  console.log(messages.length);
  const user = {
    name: 'some name',
    _id: '1'
  };
  const mainContent = (<GiftedChat
    messages={messages}
    onSend={null}
    user={user}
  />)
  let wrapped = null;
  if (Platform.OS === 'android') {
    wrapped = (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding"  keyboardVerticalOffset={80} enabled>
         {mainContent}
    </KeyboardAvoidingView>
  );
  } else {
    wrapped = (<SafeAreaView style={{flex: 1}}>
      {mainContent}
    </SafeAreaView>)
  }
  return (
    <View style={{flex: 1}}>
      {wrapped}
    </View>
  )
};
