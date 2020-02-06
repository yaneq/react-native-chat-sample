import {combineReducers} from 'redux';
import ChatReducer from './reducers/chat.reducer';

const RootReducer = combineReducers({
  chat: ChatReducer,
});

export default RootReducer;
