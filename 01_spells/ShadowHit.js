const SpecialSpell = require ('./SpecialSpell');

class ShadowHit extends SpecialSpell {
  constructor(dmg=7, mana=20, dmgCount=0, dmgBonus=0, hpBonus=-7) {
    super(dmg, mana, dmgCount, dmgBonus, hpBonus);
    this.hpBonus = hpBonus;
  }
}

module.exports = ShadowHit;
