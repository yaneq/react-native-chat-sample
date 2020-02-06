import firebase from 'firebase';
import {
  receiveMessage
} from './reducers/chat.reducer';

const initializeApp = () => {
  console.log('============ in init')
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyDZJZm9TgdBItFu1agAWryuKHWXv8og4pE",
      authDomain: "stachka-example.firebaseapp.com",
      databaseURL: "https://stachka-example.firebaseio.com",
      projectId: "stachka-example",
      storageBucket: "stachka-example.appspot.com",
      messagingSenderId: "907316643379"
    });
  }
}

const observeAuth = () =>
  firebase.auth().onAuthStateChanged(onAuthStateChanged);

const onAuthStateChanged = user => {
  console.log('============ in onAuthStateChanged')
  if (!user) {
    try {
      firebase.auth().signInAnonymously();
      console.log('signed in');

    } catch ({
      message
    }) {
      alert(message);
    }
  }
};

const init = (store) => {
  initializeApp();
  // observeAuth();
  listen(store);
}


// this.ref
//       .limitToLast(20)
//       .on('child_added', snapshot => callback(this.parse(snapshot)));

const parse = snapshot => {
  const { timestamp: numberStamp, text, user } = snapshot.val();
  const { key: _id } = snapshot;
  const timestamp = new Date(numberStamp);
  const message = {
    _id,
    timestamp,
    text,
    user,
  };
  return message;
};

const listen = (store) => {
  console.log('listen')
  firebase
    .database()
    .ref('messages')
    .limitToLast(30)
    .on('child_added', (message => store.dispatch(receiveMessage(parse(message)))))
}
//   firebase
//     .firestore()
//     .collection('notes')
//     .onSnapshot(snapshot => {
//       let notes = [];
//       snapshot.forEach(note => {
//         console.log('Metadata Changes', note);
//         const {text} = note.data();
//         notes.push({id: note.id, text: text});
//       });
//       console.log('notes', notes);
//       store.dispatch(receiveNotes(notes));
//     });
// };

export const initFirebase = init;
