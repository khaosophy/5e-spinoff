export function getFullAbilityeName(ability) {
  switch (ability) {
    case 'STR':
      return 'Strength';
    case 'DEX':
      return 'Dexterity';
    case 'CON':
      return 'Constitution';
    case 'INT':
      return 'Intelligence';
    case 'WIS':
      return 'Wisdom';
    case 'CHA':
      return 'Charisma';
    default:
      return ability;
  }
}

export function getRacialAbilityIncreaseText(race, abilities) {
  if (race === 'human') return 'Your ability scores each increase by 1.';
  if (race === 'half-elf') return 'Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.';
  const text = 'Your ' + abilities.map(({ability_score, bonus}) => {
    return `${getFullAbilityeName(ability_score.name)} score increases by ${bonus}`
  }).join(', and your ') + '.';
  return text;
}