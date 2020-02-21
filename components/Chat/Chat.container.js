import {connect} from 'react-redux';
import {ChatComponent} from './Chat.component';
import {View} from 'react-native';
import {sendMessages} from '../../state/firestore'

const ChatContainer = connect(
  state => ({
    messages: state.chat.messages,
  }),
  dispatch => ({
    sendMessage: (messages) => sendMessages(messages)
  }),
)(ChatComponent);

export default ChatContainer;
