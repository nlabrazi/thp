const shuffleArray = require ('./03_setup/shuffleArray');
const getPlayerMaxHp = require ('./03_setup/getPlayerMaxHp');


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

  watchStats() {
    this.updatePlayers();
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
      if (this.isEndGame()) {
        return;
      }
      this.startTurn(i);
    }
  }
  updatePlayers() {
    if (this.isEndGame()) return;
    this.players = this.players.filter((x) => x.hp > 0);
  }

  isEndGame() {
    return this.status != 'onPlaying';
  }

  getWinner(player) {
    if (player) {
      player.setWinner();
      console.log("**********");
      console.log(`Le gagnant est : ${player.name}`);
      console.log("**********");
    }
  }
  checkGame() {
    this.updatePlayers();
    if (this.turnLeft < 1 || this.players.length < 2) {
      const winner = getPlayerMaxHp(this.players);
      this.status = 'endGame';
      this.isEndGame();
      console.log('Fin de la partie');

      this.getWinner(winner);
      return;
    }
  }

  /* ######################   BOUCLE DU JEU   ########################## */

  startTurn(num, players = this.players) {
    this.updatePlayers();
    this.checkGame();
    if (this.isEndGame()) return;
    console.log(`Tour numéro ${num} :`);
    console.log("------------------");
    let newAction = shuffleArray(players);
    for (let i = 0; i < newAction.length; i++) {
      let attacker = newAction[i];
      let target = i == newAction.length - 1 ? newAction[0] : newAction[i + 1];
      this.attackPlayers(attacker, target);
      newAction = newAction.filter((x) => x.hp > 0);
    }
    this.watchStats();
    this.turnLessOne();
  }


  /* ######################   ATTAQUE JOUEURS   ########################## */

  attackPlayers(attacker, enemy) {
    console.log(`C'est l'heure du dududueeel: ${attacker.name} attaque`);
    let attackDmg = 0;
    attacker.dealDamage(enemy);
    attackDmg = attacker.dmg;
    console.log(
      `${attacker.name} lance une attaque sur ${enemy.name}.
      Il fait ${attackDmg} damages.`
      );

    if (enemy.isAlive()) {
      console.log(`      ${enemy.name} a ${attackDmg} HP restant.`);
    } else {
      console.log(`      ${enemy.name} mort.`);
    }
  }


}

module.exports = Game;
