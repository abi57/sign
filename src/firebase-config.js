import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmHMGtGL86jJaMNJiVKHzLSBi5dXhNGeo",
  authDomain: "user-authentication-eaaab.firebaseapp.com",
  projectId: "user-authentication-eaaab",
  storageBucket: "user-authentication-eaaab.appspot.com",
  messagingSenderId: "1015000224095",
  appId: "1:1015000224095:web:4e8b925f2a32216d02e6ea",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
