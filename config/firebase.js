import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCeW_CyZvEipI9gugi9pcTIFB-c4PP9HMk', // tamam
  authDomain: 'ogrencievi-a6402.firebaseapp.com', // tamam
  databaseURL: 'https://ogrencievi-a6402.firebaseio.com',  // tamam
  projectId: 'ogrencievi-a6402', // tamam
  storageBucket: 'ogrencievi-a6402.appspot.com', // tamam
  messagingSenderId: '746956635781', // tamam
  appId: '1:746956635781:android:1013fe88bba5dace0333ec', // tamam
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// initialize auth; only for native platforms (Android and iOS)
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
  
export { auth };
