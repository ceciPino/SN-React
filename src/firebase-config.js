// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9cMbacBGiSzgEkLX_2ejd0ShkZnU53jM",
  authDomain: "plantasia-rr.firebaseapp.com",
  projectId: "plantasia-rr",
  storageBucket: "plantasia-rr.appspot.com",
  messagingSenderId: "7217571367",
  appId: "1:7217571367:web:8fd050c7bc551704b69002",
  measurementId: "G-523G5PQ7T9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
