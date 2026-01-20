import { initializeApp } from "firebase/app";
import { getDatabase, Database } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXsUwrkmSgVydq3vvJ_-y3l8e7OO8x-iw",
  authDomain: "ilovetua-4ecb0.firebaseapp.com",
  projectId: "ilovetua-4ecb0",
  storageBucket: "ilovetua-4ecb0.firebasestorage.app",
  messagingSenderId: "52157230562",
  appId: "1:52157230562:web:fb999c91a48c143a3e9dbb",
  measurementId: "G-ZGZYR2QMXD",
  databaseURL: "https://ilovetua-4ecb0-default-rtdb.firebaseio.com",
};

let app;
let database: Database | null = null;

try {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  // Initialize Realtime Database
  database = getDatabase(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export { database };
