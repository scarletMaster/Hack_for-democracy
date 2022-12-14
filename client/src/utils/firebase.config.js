import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-46a74.firebaseapp.com",
  projectId: "react-firebase-redux-46a74",
  storageBucket: "react-firebase-redux-46a74.appspot.com",
  messagingSenderId: "166593254703",
  appId: "1:166593254703:web:f53d861a4cd252255afdda"
});
// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: "react-firebase-redux-97f70.firebaseapp.com",
//   projectId: "react-firebase-redux-97f70",
//   storageBucket: "react-firebase-redux-97f70.appspot.com",
//   messagingSenderId: "879445570363",
//   appId: "1:879445570363:web:6fe651fc68c093191cfd1e",
// });

export const auth = app.auth();
export default app;
