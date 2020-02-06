import {connect} from 'react-redux';
import {ChatListComponent} from './ChatList.component';

const ChatListContainer = connect(
  state => ({
    chats: [{ title: 'chat 1'}],
  }),
  dispatch => ({
    // login: () => dispatch(login())
  }),
)(ChatListComponent);

export default ChatListContainer;
