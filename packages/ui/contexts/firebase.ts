import firebaseJson from '../../../apps/firebase/firebase.json';

export const FIREBASE = {
  CONFIG: {
    APP_NAME: 'google-photos',
    apiKey: 'AIzaSyCwCbnCcsSyqLdpMGygRFGp-xMfdZDVSEA',
    authDomain: 'photos-tools-2022.firebaseapp.com',
    projectId: 'photos-tools-2022',
    storageBucket: 'photos-tools-2022.appspot.com',
    messagingSenderId: '550579950350',
    appId: '1:550579950350:web:d32a68a214c5c58a273d5f',
    measurementId: 'G-5M5ME2ZH0R',
  },
  EMULATORS: {
    HOST: '127.0.0.1',
    AUTHENTICATION: firebaseJson.emulators.auth.port,
    FUNCTIONS: firebaseJson.emulators.functions.port,
    FIRESTORE: firebaseJson.emulators.firestore.port,
    DATABASE: firebaseJson.emulators.database.port,
    HOSTING: firebaseJson.emulators.hosting.port,
    STORAGE: firebaseJson.emulators.hosting.port,
    UI: firebaseJson.emulators.ui.port,
  },
};
