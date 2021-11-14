import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq9gfwJXnV8vkwFKwf9dZBvI2-zuT1FNY",
  authDomain: "movie-library-b928b.firebaseapp.com",
  projectId: "movie-library-b928b",
  storageBucket: "movie-library-b928b.appspot.com",
  messagingSenderId: "887482957104",
  appId: "1:887482957104:web:195125ec15a3fd26ad1cf5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

