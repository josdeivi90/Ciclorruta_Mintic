// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyCiRyZ6PusAGZCx9zTfhmNrc3g-dyR7VpU",
  authDomain: "ciclorrutamintic.firebaseapp.com",
  projectId: "ciclorrutamintic",
  storageBucket: "ciclorrutamintic.appspot.com",
  messagingSenderId: "443945219003",
  appId: "1:443945219003:web:4dcfa3249a6e3993a88a9e",
  measurementId: "G-QFCGXDC25Q"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/home",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function SignInButton() {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}

export default SignInButton;
