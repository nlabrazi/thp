/* ######################   Monk   ########################## */

const Character = require('./Character');
const Heal = require('../01_spells/Heal');

class Monk extends Character {
    constructor(name, hp=8, dmg=2, mana=200, status="playing", spell=new Heal()) {
        super(hp, dmg, mana, status);
        this.name = name;
        this.spell = spell;
    }
}

module.exports = Monk;
