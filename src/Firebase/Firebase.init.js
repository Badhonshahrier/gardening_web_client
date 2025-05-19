// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgWv_lwouk8hyuXKtBk2weM1twiXr9CXs",
    authDomain: "gardening-authentication-a8520.firebaseapp.com",
    projectId: "gardening-authentication-a8520",
    storageBucket: "gardening-authentication-a8520.firebasestorage.app",
    messagingSenderId: "758030464488",
    appId: "1:758030464488:web:1e03141348584b351da05d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);