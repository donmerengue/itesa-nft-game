import { userAgent } from "next/server";

console.log("matchmaking");
// Al cliquear en play now, el usuario cambia su estado a wannaPlay
// TODO: 20/9 -> armar logica de controllers para la DB
const wannaPlay = () => {
  console.log(
    "aca se llamar al controlador de wannaPlay que haria algo asi: user.wannaPlay = true;"
  );
};

// Un usuario se empareja con otro para batallar si los dos estan en wannaPlay
// TODO: 20/9 -> armar logica de controllers para la DB
const findMatch = (second) => {
  console.log(
    "aca se llama al controlador de findMatch que haria algo asi: (ver comentario)"
  );
//   const docRef = query(
//     collection(db, "users"),
//     where("wannaPlay", "==", true)
//   );
  // y ademas que filtre por niveles (pensar como!)
};
