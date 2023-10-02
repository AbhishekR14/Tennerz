import { initializeApp } from "firebase/app";
import { getFirestore , collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCEY0TpISozV4_-EBHdph8eRDanuJtY_uU",
  authDomain: "tennerz-bcb65.firebaseapp.com",
  projectId: "tennerz-bcb65",
  storageBucket: "tennerz-bcb65.appspot.com",
  messagingSenderId: "508558088174",
  appId: "1:508558088174:web:c0f1d0d55db4521dbba0ff"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const leaderBoardCollection = collection(db, "tennerz");