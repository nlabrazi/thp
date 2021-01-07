/* ######################   Character   ########################## */

class Character {
  constructor(hp, dmg, mana, status = 'playing', spell) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
    this.spell = spell;
  }
  takeDamage(nbDamage) {
    this.hp = this.hp - nbDamage;
    this.checkStatus();
  }
  dealDamage(target) {
    target.takeDamage(this.dmg);
    if (target.status === "loser") {
      this.hp += 20;
    }
  }
  dealSpellDamage(target) {
    if (this.mana < this.spell.mana) {
      console.log ("Vous n'avez pas assez de mana pour ce sort ---> Attaque normal lancée !");
      target.takeDamage(this.dmg);
      if (target.status === "loser") {
        this.hp += 20;
      }
      return;
    }
    this.mana -= this.spell.mana;
    target.takeDamage(this.spell.dmg);
    if (target.status === "loser") {
      this.hp += 20;
    }
  }
  setWinner() {
    this.status = "winner";
  }
  checkStatus() {
    if (this.hp <= 0) {
      this.status = "loser";
    }
  }
  isAlive(){
    this.checkStatus();
    return this.status == "playing";
  }

}

module.exports = Character;
