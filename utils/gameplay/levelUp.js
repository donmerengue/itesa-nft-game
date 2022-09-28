// La experiencia necesaria para pasar de nivel es 7.5 veces el nivel actual
// TODO: 28/9 traer data de la DB para que la pueda modificar el Admin
export const experienceLimitPerLevel = (level) => 7.5 * level;

// Cada batalla ganada suma un punto de experiencia
// TODO: 28/9 traer data de la DB para que la pueda modificar el Admin
export const experiencePerBattle = (experience) => experience++;

// Pasar de nivel cuando la experiencia actual supera el limite
export const levelUp = (experience, level) => {
  if (experience >= experienceLimitPerLevel(level)) {
    experience = 0;
    level++;
  }
  return { experience, level };
};
