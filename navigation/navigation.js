import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ChatContainer from '../components/Chat/Chat.container';
import SettingsContainer from '../components/Settings/Settings.container';

const RootNavigator = createDrawerNavigator({
  general: {
    title: "title",
    drawerLabel: "#general",
    headerTitle: "#general",
    params: {title: 'general'},
    screen: ChatContainer,
  },
  random: {
    drawerLabel: "#random",
    screen: ChatContainer,
    params: {title: 'random'},
  },
},
{
  drawerBackgroundColor: '#303',
  contentOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: '#505',
    inactiveTintColor: '#cab'
  }
});

const NavigationContainer = createAppContainer(RootNavigator);

export default NavigationContainer;
