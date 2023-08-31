import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9DBt0dZ061YcvWbEmWRByeJbSy_ALmC0",
  authDomain: "mern-app-api.firebaseapp.com",
  projectId: "mern-app-api",
  storageBucket: "mern-app-api.appspot.com",
  messagingSenderId: "322096236781",
  appId: "1:322096236781:web:0a7ea7619b952c00ca64e4"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
