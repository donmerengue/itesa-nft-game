// Aqui van las configuraciones del server de firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDJ_omMPV3hudbbu_Q3F4JI_gmxKq8tUMM",
  authDomain: "itesa-nft-game.firebaseapp.com",
  projectId: "itesa-nft-game",
  storageBucket: "itesa-nft-game.appspot.com",
  messagingSenderId: "673428874226",
  appId: "1:673428874226:web:71336958cc70063541016b",
  measurementId: "G-J1QR8DB3HE",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
