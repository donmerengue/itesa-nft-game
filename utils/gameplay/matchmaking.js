import { getDailyMatches } from "../../fetchData/controllers";

// Obtener los rivals que quieran apostar y hayan peleado 5 veces o mas
export const getRivalsBet = async (rivals) => {
  const rivalsBet = [];

  for await (const rival of rivals) {
    // Si el rival quiere apostar
    if (rival.wannaBet) {
      // Obtener cantidad de peleas de cada rival
      const dailyMatchesRival = await getDailyMatches(rival.uid);

      // Si son mas de 5, postularlo como posible rival
      if (dailyMatchesRival.length >= 5) {
        rivalsBet.push(rival);
      }
    }
  }
  return rivalsBet;
};
