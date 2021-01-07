const SpecialSpell = require ('./SpecialSpell');

class HealingLighting extends SpecialSpell {
  constructor(dmg=4, mana=40, dmgCount=0, dmgBonus=0, hpBonus=5) {
    super(dmg, mana, dmgCount, dmgBonus, hpBonus);
  }
}

module.exports = HealingLighting;
