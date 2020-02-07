import firebase from 'firebase';
import {
  receiveMessage
} from './reducers/chat.reducer';

let store = null;

const initializeApp = () => {
  console.log('============ in init')
  if (!firebase.apps.length) {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyDZJZm9TgdBItFu1agAWryuKHWXv8og4pE",
    //   authDomain: "stachka-example.firebaseapp.com",
    //   databaseURL: "https://stachka-example.firebaseio.com",
    //   projectId: "stachka-example",
    //   storageBucket: "stachka-example.appspot.com",
    //   messagingSenderId: "907316643379"
    // });
    firebase.initializeApp({
      apiKey: "AIzaSyBD80MmwwZNe8lACA5rR-surFY7GqDdV5U",
      authDomain: "chat-example-17063.firebaseio.com",
      databaseURL: "https://chat-example-17063.firebaseio.com",
      projectId: "chat-example-17063",
      storageBucket: "chat-example-17063.appspot.com"
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

const parseAll = (snapshot, store) => {
  // console.log('snapshot is parseAll val:', snapshot.val());
  // console.log('typeof snapshot:', typeof snapshot);
  // console.log('someval:', snapshot['-LdL3l6ry1zroqPqgobX']);
  snapshot.forEach(val => {
    // console.log('one key', key); // the name of the current key.
    const parsedComment = parse(val)
    // console.log('one val', parsedComment); // the name of the current key.
    store.dispatch(receiveMessage(parsedComment));
  });
}

const parse = rawComment => {
  const { timestamp: numberStamp, text, user } = rawComment.val();
  const { key: _id } = rawComment;
  const timestamp = new Date(numberStamp);
  return {
    _id,
    timestamp,
    text,
    user,
  };
};

const listen = (store) => {
  console.log('listen')
  firebase
    .database()
    .ref('messages')
    .limitToLast(30)
    .on('value', (snapshot => parseAll(snapshot, store)))
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
