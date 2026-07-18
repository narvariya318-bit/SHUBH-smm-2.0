// Firebase configuration and initialization using CDN SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Aapka bilkul naya Firebase Project (shubh-smm-new) config
const firebaseConfig = {
  apiKey: "AIzaSyBJaFdwTMzmrcV3oSJc35moeAHtLkKmMmY",
  authDomain: "shubh-smm-new.firebaseapp.com",
  projectId: "shubh-smm-new",
  storageBucket: "shubh-smm-new.firebasestorage.app",
  messagingSenderId: "210338313060",
  appId: "1:514238514443:web:9c0e940b60ae1376fd0e0e" // Keep your correct web app ID format
};

let auth = null;
let db = null;
let isInitialized = false;

export async function initFirebase() {
  if (isInitialized) return { auth, db };

  try {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app, "(default)");
    
    isInitialized = true;
    console.log("Firebase CDN initialized successfully with new project.");
    return { auth, db };
  } catch (err) {
    console.error("Firebase CDN init failed, falling back to local simulation mode:", err);
    return { auth: null, db: null };
  }
}

export { auth, db };
