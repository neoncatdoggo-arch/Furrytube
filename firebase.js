// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-storage.js";

// Your Firebase config (leave as-is)
const firebaseConfig = {
  apiKey: "AIzaSyBCEUq_n6xB66yZDw6B-yO2loTYOIc_khA",
  authDomain: "furrytube-2aa8e.firebaseapp.com",
  projectId: "furrytube-2aa8e",
  storageBucket: "furrytube-2aa8e.appspot.com",
  messagingSenderId: "507748631044",
  appId: "1:507748631044:web:ca0d06e637d1ec11e9eb51"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
