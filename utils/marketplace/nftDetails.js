import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebase/firebase-config";

export const getMyNfts = async (uid) => {
    const nftRef = collection(db, "nftBought");
    const nftQuery = query(nftRef, where("user", "==", uid));
    const nftQuerySnap = await getDocs(nftQuery);
  
    // Agregar cada nft a un arreglo
    const nfts = [];
    nftQuerySnap.forEach((doc) => {
      // nfts.push(doc.data());
      nfts.push({ ...doc.data(), id: doc.id });
    });
  
    return nfts;
  };
  