/* ######################   Assassin   ########################## */

const Character = require('./Character');
const ShadowHit = require('../01_spells/ShadowHit');

class Assassin extends Character {
    constructor(name, hp=6, dmg=6, mana=20, status="playing", spell = new ShadowHit()) {
        super(hp, dmg, mana, status);
        this.name = name;
        this.spell = spell;
    }
}

module.exports = Assassin;
