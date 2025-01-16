import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAL5EDhDXPv9ygraj7jVNhFRGEjzCWmxpE",
  authDomain: "disney-clone-b10cf.firebaseapp.com",
  projectId: "disney-clone-b10cf",
  storageBucket: "disney-clone-b10cf.firebasestorage.app",
  messagingSenderId: "1048982349735",
  appId: "1:1048982349735:web:b3fff442f69a7dba383882",
  measurementId: "G-F23VLMW30W",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
