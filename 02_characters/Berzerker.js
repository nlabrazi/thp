/* ######################   Berzerker   ########################## */

const Character = require('./Character');
const Rage = require('../01_spells/Rage');

class Berzerker extends Character {
  constructor(name, hp=8, dmg=4, mana=0, status="playing", spell=new Rage()) {
    super(hp, dmg, mana, status);
    this.name = name;
    this.spell = spell
  }
}

module.exports = Berzerker;
