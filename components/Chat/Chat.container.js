import {connect} from 'react-redux';
import {ChatComponent} from './Chat.component';
import {View} from 'react-native';

const ChatContainer = connect(
  state => ({
    messages: state.chat.messages,
  }),
  dispatch => ({
    // login: () => dispatch(login())
  }),
)(ChatComponent);

export default ChatContainer;
