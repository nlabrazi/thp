const shuffleArray = require ('./03_setup/shuffleArray');


/* ######################   GAME   ########################## */

class Game {
  constructor(players, turnLeft=10, status = 'onPlaying') {
    this.turnLeft = 2;
    this.status = status;
    this.players = players;
  }

  turnLessOne(){
    this.turnLeft -= 1;
  }

  watchStats() {
    this.updatePlayers();
    console.log("************************");
    console.log("Liste des joueurs :");
    this.players.forEach((player, index) => {
      console.log(`${index} - ${player.name} - ${player.character} - HP : ${player.hp} `);
    });
    console.log("************************");
  }


  /* ######################   DEBUT DU JEU   ########################## */

  startGame() {
    for (let i = 1; i <= 11; i++) {
      if (this.isEndGame()) {
        return;
      }
      this.startTurn(i);
    }
  }
  isEndGame() {
    return this.status != 'onPlaying';
  }
  updatePlayers() {
    if (this.isEndGame()) return;
    this.players = this.players.filter((x) => x.hp > 0);
  }


  /* ######################   BOUCLE DU JEU   ########################## */

  startTurn(num, players = this.players) {
    this.updatePlayers();
    if (this.isEndGame()) return;
    console.log(`Tour numéro ${num}`);
    let newAction = shuffleArray(players);
    for (let i = 0; i < newAction.length; i++) {
      let attacker = newAction[i];
      let enemy = i == newAction.length - 1 ? newAction[0] : newAction[i + 1];
      newAction = newAction.filter((x) => x.hp > 0);
    }
    this.watchStats();
    console.log("************************");
  }

}

module.exports = Game;
