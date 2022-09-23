import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDV81Odzjzy_b52jfvVnephegNPt5fWeS0",
    authDomain: "restaurantapp-cc917.firebaseapp.com",
    databaseURL: "https://restaurantapp-cc917-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-cc917",
    storageBucket: "restaurantapp-cc917.appspot.com",
    messagingSenderId: "331094204893",
    appId: "1:331094204893:web:2e7ab8eaab282a30779634"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };