import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBJCDugFr8xQ-Z3BVs1kuizxxwJbxqDfDA",
    authDomain: "shopping-9874b.firebaseapp.com",
    databaseURL: "https://shopping-9874b-default-rtdb.firebaseio.com",
    projectId: "shopping-9874b",
    storageBucket: "shopping-9874b.firebasestorage.app",
    messagingSenderId: "391083571206",
    appId: "1:391083571206:web:57875ea266df584691ab87",
    measurementId: "G-6KB5D4H8NT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
