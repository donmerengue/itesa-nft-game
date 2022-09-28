// Obtener un numero random entre min y max
export const getRandomArbitrary = (min, max) =>
  Math.random() * (max - min) + min;

// Aplicar aleatoriedad al ataque para obtener poder final
export const getAttack = (nftAttack) =>
  getRandomArbitrary(0.7, 1) * nftAttack;

// Aplicar aleatoriedad a la defensa para obtener poder final
export const getDefense = (nftDefense) =>
  getRandomArbitrary(0.75, 0.95) * nftDefense;

// Aplicar aleatoriedad a la suerte para obtener poder final
export const getLuck = (nftLuck) => getRandomArbitrary(0.2, 1) * nftLuck;

// Obtener poder final
export const getPower = (ntfPower) => ntfPower.reduce((a, b) => a + b);

// Obtener el usuario con mayor poder
export const getWinnerPower = (ownPower, rivalPower) =>
  ownPower > rivalPower ? ownPower : rivalPower;

export const getWinnerUser = (ownPower, ownUid, rivalPower, rivalUid) =>
  ownPower > rivalPower ? ownUid : rivalUid;

export const getLoserUser = (ownPower, ownUid, rivalPower, rivalUid) =>
  ownPower < rivalPower ? ownUid : rivalUid;

//
export const getTotalPower = (nftItems) => {
  const nftPower = [];
  for (const item of nftItems) {
    switch (item.type) {
      case "attack":
        nftPower.push(getAttack(item.power));
        break;
      case "defense":
        nftPower.push(getDefense(item.power));
        break;
      case "luck":
        nftPower.push(getLuck(item.power));
        break;
    }
  }
  return getPower(nftPower);
};

/* // TODO: 20/9-> borrar cuando ya esté implementado Funciones de prueba
// Contar cantidad de victorias de cada usuario
let userOneWins = 0;
let userTwoWins = 0;
function countWins(powerUserOne, powerUserTwo) {
  powerUserOne > powerUserTwo ? userOneWins++ : userTwoWins++;
}
// Loopear muchas veces para obtener estadistica
for (let i = 0; i < 100000; i++) {
  // console.log(getWinner(getPower(40,4,4), getPower(42,4,4)))
  countWins(getPower(40, 4, 4), getPower(34, 4, 13));
}
console.log(userOneWins);
console.log(userTwoWins); */
