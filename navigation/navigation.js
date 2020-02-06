import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ChatListContainer from '../components/ChatList/ChatList.container';
import ChatContainer from '../components/Chat/Chat.container';
import SettingsContainer from '../components/Settings/Settings.container';

const ChatNavigator = createStackNavigator(
  {
    ChatListScreen: ChatListContainer,
    ChatScreen: ChatContainer,
  },
  {initialRouteName: 'ChatListScreen'},
);

const RootNavigator = createDrawerNavigator({
  Chats: ChatNavigator,
  Settings: SettingsContainer,
});

const NavigationContainer = createAppContainer(RootNavigator);

export default NavigationContainer;
