import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import RootReducer from './reducers';
// import {subscribeToNotesFirestore} from './firestore';
import {initFirebase} from './firestore';
export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware()),
);

// for the sake of using expo, this app relies on firestore.js
// instead of the native SDK. Firebase.js is built for web
// and set a timer that triggers a warning in react native
// In a production app the native firebase SDK is a better choice
console.ignoredYellowBox = ['Setting a timer'];
initFirebase(store);
