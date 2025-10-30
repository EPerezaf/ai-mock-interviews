import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB67VlSJxULlJ1H5yb2DhsiBsRnbTPoSDw",
    authDomain: "prepwise-62fd6.firebaseapp.com",
    projectId: "prepwise-62fd6",
    storageBucket: "prepwise-62fd6.appsot.app",
    messagingSenderId: "282354224005",
    appId: "1:282354224005:web:1ac14335faa2048bc6d2ec",
    measurementId: "G-Q384SPM3GK"
};

const app = !getApps().length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);