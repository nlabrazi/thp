const SpecialSpell = require ('./SpecialSpell');

class DarkVision extends SpecialSpell {
  constructor(dmg=5, mana=20, dmgCount=2, dmgBonus=0, hpBonus=0) {
    super(dmg, mana, dmgCount, dmgBonus, hpBonus);
  }
}

module.exports = DarkVision;
