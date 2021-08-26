import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCu5mQ4ZTVgr5FM2TmL5oMV88jU9fyMsWA",
    authDomain: "todoist-f7d17.firebaseapp.com",
    databaseURL: "https://todoist-f7d17-default-rtdb.firebaseio.com",
    projectId: "todoist-f7d17",
    storageBucket: "todoist-f7d17.appspot.com",
    messagingSenderId: "1072281670616",
    appId: "1:1072281670616:web:437a0e8e18c24f431898ad"

});

export { firebaseConfig as firebase }; 