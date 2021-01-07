const SpecialSpell = require ('./SpecialSpell');

class Heal extends SpecialSpell {
  constructor(dmg=0, mana=25, dmgCount=0, dmgBonus=0, hpBonus=8) {
    super(dmg, mana, dmgCount, dmgBonus, hpBonus);
    this.hpBonus = hpBonus;
  }
}

module.exports = Heal;
