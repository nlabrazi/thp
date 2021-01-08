const shuffleArray = require ('./03_setup/shuffleArray');
const checkPlayerMaxHp = require ('./03_setup/checkPlayerMaxHp');


/* ######################   GAME   ########################## */

class Game {
  constructor(players, turnLeft=10, status = 'onPlaying') {
    this.turnLeft = turnLeft;
    this.status = status;
    this.players = players;
  }

  turnLessOne(){
    this.turnLeft -= 1;
  }

  checkStats() {
    this.checkPlayers();
    console.log("Liste des joueurs :");
    console.log("............................................");
    this.players.forEach((player, index) => {
      console.log(
        `..   ${index}  -  ${player.name}  -  ${player.character}  -  Hp: ${player.hp}   ..`
        );
    });
    console.log("............................................");
    console.log("");
  }


  /* ######################   SETUP DU JEU   ########################## */

  startGame() {
    for (let i = 1; i <= 11; i++) {
      if (this.checkEndGame()) {
        return;
      }
      this.startTurn(i);
    }
  }
  checkPlayers() {
    if (this.checkEndGame()) return;
    this.players = this.players.filter((x) => x.hp > 0);
  }

  checkEndGame() {
    return this.status != 'onPlaying';
  }

  checkWinner(player) {
    if (player) {
      player.setWinner();
      console.log("******************************");
      console.log("**                          **");
      console.log(`** Le gagnant est : ${player.name} **`);
      console.log("**                          **");
      console.log("******************************");
    }
  }
  checkGame() {
    this.checkPlayers();
    if (this.turnLeft < 1 || this.players.length < 2) {
      const winner = checkPlayerMaxHp(this.players);
      this.status = 'endGame';
      this.checkEndGame();
      console.log("");
      console.log('Fin de la partie');
      console.log("");
      this.checkWinner(winner);
      return;
    }
  }

  /* ######################   BOUCLE DU JEU   ########################## */

  startTurn(num, players = this.players) {
    this.checkPlayers();
    this.checkGame();
    if (this.checkEndGame()) return;
    console.log(`Tour numéro ${num} :`);
    console.log("------------------");
    let newAction = shuffleArray(players);
    for (let i = 0; i < newAction.length; i++) {
      let attacker = newAction[i];
      let target = i == newAction.length - 1 ? newAction[0] : newAction[i + 1];
      this.attackPlayers(attacker, target);
      newAction = newAction.filter((x) => x.hp > 0);
    }
    this.checkStats();
    this.turnLessOne();
  }


  /* ######################   ATTAQUE JOUEURS   ########################## */

  attackPlayers(attacker, enemy) {
    console.log(`C'est l'heure du combat: ${attacker.name} attaque`);
    let attackDmg = 0;
    attacker.dealDamage(enemy);
    attackDmg = attacker.dmg;
    console.log(
      `${attacker.name} lance une attaque sur ${enemy.name}.
      Il fait ${attackDmg} damages.`
      );

    if (enemy.checkIsAlive()) {
      console.log(`      ${enemy.name} a ${attackDmg} HP restant.`);
    } else {
      console.log(`      ${enemy.name} est mort.`);
    }
  }


}

module.exports = Game;
