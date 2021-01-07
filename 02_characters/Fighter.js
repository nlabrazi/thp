/* ######################   Fighter   ########################## */

const Character = require('./Character');
const DarkVision = require('../01_spells/DarkVision');

class Fighter extends Character {
  constructor(name, hp=12, dmg=4, mana=40, status="playing", spell=new DarkVision()) {
    super(hp, dmg, mana, status);
    this.name = name;
    this.spell = spell;
  }
}

module.exports = Fighter;
