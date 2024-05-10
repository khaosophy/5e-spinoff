export function getFullAttributeName(attribute) {
  switch (attribute) {
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
      return attribute;
  }
}