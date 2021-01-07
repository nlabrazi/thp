const SpecialSpell = require ('./SpecialSpell');

class Rage extends SpecialSpell {
  constructor(dmg=4, mana=0, dmgCount=0, dmgBonus=1, hpBonus=-1) {
    super(dmg, mana, dmgCount, dmgBonus, hpBonus);
    this.hpBonus = hpBonus;
  }
}

module.exports = Rage;
