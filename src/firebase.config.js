import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import{getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyANJET9cIQ7QT2PgM6O3sloN_AKFzPFnu8",
    authDomain: "restaurantapp-eedc5.firebaseapp.com",
    databaseURL: "https://restaurantapp-eedc5-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-eedc5",
    storageBucket: "restaurantapp-eedc5.appspot.com",
    messagingSenderId: "732303634377",
    appId: "1:732303634377:web:5c69a4c4c51fd159e40218"
  };

  const app= getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore= getFirestore(app);
  const storage= getStorage(app);
  export {app,firestore, storage};