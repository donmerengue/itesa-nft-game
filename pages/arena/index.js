import PlayGame from "../../components/play/Arena";
import Navbar from "../../components/layout/Navbar";
import DeslogueadoPage from "../../components/auth/DeslogueadoPage";
import { auth } from "../../firebase/firebase-config";
const GameArenaIndex = () => {
  return (
    <>
      <Navbar />
      {auth.currentUser ? <PlayGame /> : <DeslogueadoPage />}
    </>
  );
};

export default GameArenaIndex;
