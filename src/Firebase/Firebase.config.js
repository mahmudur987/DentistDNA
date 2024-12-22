import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDwk2RWvstDmtBkKk4fvj9a3Br7B7F5OFg",
  authDomain: "dentist-dna.firebaseapp.com",
  projectId: "dentist-dna",
  storageBucket: "dentist-dna.firebasestorage.app",
  messagingSenderId: "311746862883",
  appId: "1:311746862883:web:ca26a45b5a363407acf696",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
