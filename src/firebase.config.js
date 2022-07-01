import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
	apiKey: `${import.meta.env.FIREBASE_KEY}`,
	authDomain: "react-boards-b8dac.firebaseapp.com",
	projectId: "react-boards-b8dac",
	storageBucket: "react-boards-b8dac.appspot.com",
	messagingSenderId: "242908899081",
	appId: "1:242908899081:web:508e18ab30dcdf814cd5d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, serverTimestamp };
