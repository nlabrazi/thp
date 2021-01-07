/* ######################   Paladin   ########################## */

const Character = require('./Character');
const HealingLighting = require('../01_spells/HealingLighting');

class Paladin extends Character {
  constructor(name, hp=16, dmg=3, mana=160, status="playing", spell=new HealingLighting()) {
    super(hp, dmg, mana, status);
    this.name = name;
    this.spell = spell;
  }
}

module.exports = Paladin;
