import { getDocumento } from "../../fetchData/controllers";

// La experiencia necesaria para pasar de nivel es 5 veces el nivel actual
export const experienceLimitPerLevel = async (level) => {
  const battleParams = await getDocumento("gameParams", "battleParams");
  const { expPerLevel } = battleParams;
  return level * expPerLevel;
};

// Obtener total de experiencia al ganar batalla (cada batalla ganada suma un punto de experiencia)
export const experiencePerBattle = async (experience) => {
  const battleParams = await getDocumento("gameParams", "battleParams");
  const { expPerWin } = battleParams;
  console.log("expPerWin", expPerWin);
  console.log(expPerWin + experience);
  return experience + expPerWin;
};

// Pasar de nivel cuando la experiencia actual supera el limite
export const levelUp = async (experience, level) => {
  if (experience >= (await experienceLimitPerLevel(level))) {
    experience = 0;
    level++;
  }
  return { experience, level };
};
