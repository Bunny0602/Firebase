// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl1frx25jAQIP85S1qA-GkBdY5TSzIGDQ",
  authDomain: "fir-integration-6140a.firebaseapp.com",
  projectId: "fir-integration-6140a",
  storageBucket: "fir-integration-6140a.appspot.com",
  messagingSenderId: "963516941445",
  appId: "1:963516941445:web:8b75ce1ffa62ca6aedd5ec",
  measurementId: "G-E7QRFDZ1JR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };
