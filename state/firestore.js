import firebase from "firebase";
import firestore from "@firebase/firestore";
import { receiveMessages } from "./reducers/chat.reducer";

let store = null;

const initializeApp = () => {
  console.log("============ in init");
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyBD80MmwwZNe8lACA5rR-surFY7GqDdV5U",
      authDomain: "chat-example-17063.firebaseio.com",
      databaseURL: "https://chat-example-17063.firebaseio.com",
      projectId: "chat-example-17063",
      storageBucket: "chat-example-17063.appspot.com"
    });
  }
};

const observeAuth = () =>
  firebase.auth().onAuthStateChanged(onAuthStateChanged);

const onAuthStateChanged = user => {
  console.log("============ in onAuthStateChanged");
  if (!user) {
    try {
      firebase.auth().signInAnonymously();
      console.log("signed in");
    } catch ({ message }) {
      alert(message);
    }
  }
};

const parse = rawComment => {
  const { timestamp: numberStamp, text, user } = rawComment.data();
  const { id: _id } = rawComment;
  const timestamp = new Date(numberStamp);
  return {
    _id,
    timestamp,
    text,
    user
  };
};

const listen = store => {
  console.log("listen");
  firebase
    .firestore()
    .collection("messages")
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => {
      let messages = [];
      snapshot.forEach(doc => {
        messages.push(parse(doc));
      });
      store.dispatch(receiveMessages(messages));
    });
};

export const sendMessages = messages => {
  for (let i = 0; i < messages.length; i++) {
    const { text, user } = messages[i];
    const message = {
      text,
      user,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    };
    firebase
      .firestore()
      .collection("messages")
      .add(message);
  }
};

export const initFirebase = store => {
  initializeApp();
  // observeAuth();
  listen(store);
};
