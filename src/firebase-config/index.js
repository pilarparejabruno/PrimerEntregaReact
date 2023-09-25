import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPd9d3SrWVkcFfk6vtmMRZmMnfmSKz2mc",
  authDomain: "e-ccomerceraices.firebaseapp.com",
  projectId: "e-ccomerceraices",
  storageBucket: "e-ccomerceraices.appspot.com",
  messagingSenderId: "314259625555",
  appId: "1:314259625555:web:bd8449dc84743e93c798a6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
