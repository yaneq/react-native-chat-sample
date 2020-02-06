import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './Settings.styles';

export const SettingsComponent = ({chats, navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}> Test local notification </Text>
      </TouchableOpacity>
    </View>
  );
};
