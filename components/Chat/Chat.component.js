import React from 'react';
import {Text, View, Platform, KeyboardAvoidingView, SafeAreaView, TouchableOpacity, Keyboard} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {styles} from './Chat.styles';

export const ChatComponent = ({navigation, messages}) => {
  const user = {
    name: 'some name',
    _id: '1'
  };
  const mainContent = (
  <View style={{flex: 1}}>
    <TouchableOpacity style={{backgroundColor: '#f3f3f3', borderBottomColor: '#eee', borderBottomWidth: 1}}  onPress={() => {navigation.openDrawer(); Keyboard.dismiss()}}>
      <View style={{height: 90, backgroundColor: '#303', marginBottom: 30}}>
        <Text style={{fontSize: 26, fontFamily: 'quicksand-bold', paddingLeft: 25, paddingTop: 45, color: '#eee', letterSpacing: -2}}>
          <Text style={{color: '#f44', letterSpacing: -3}}># </Text>
          {navigation.getParam('title', 'fallback')}
        </Text>
      </View>
    </TouchableOpacity>
  <GiftedChat
    messages={messages}
    onSend={null}
    user={user}
  />
  </View>)
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
