// firebase.js
// Import modules from Firebase CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-functions.js";

// ---------- Paste your firebaseConfig here (em đã gửi trước) ----------
const firebaseConfig = {
  apiKey: "AIzaSyD6DNuThRLY6NsSqlhX71j5zHKhu6e-K_E",
  authDomain: "cuuho-mientrung.firebaseapp.com",
  projectId: "cuuho-mientrung",
  storageBucket: "cuuho-mientrung.firebasestorage.app",
  messagingSenderId: "54443732617",
  appId: "1:54443732617:web:e86f1bc8aea31e64a96058"
};

// initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions ? getFunctions(app) : null;

export { app, auth, db, storage, functions };
