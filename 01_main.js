const Fighter = require('./02_characters/Fighter');
const Paladin = require('./02_characters/Paladin');
const Monk = require('./02_characters/Monk');
const Berzerker = require('./02_characters/Berzerker');
const Assassin = require('./02_characters/Assassin');
const Game = require('./02_game');

const Grace = new Fighter('Grace');
const Ulder = new Paladin('Ulder');
const Moanna = new Monk('Moanna');
const Draven = new Berzerker('Draven');
const Carl = new Assassin('Carl');

console.log("************************************************************************");
console.log("**                                                                    **");
console.log("** ██████╗ ██████╗  ██████╗      ██████╗  █████╗ ███╗   ███╗███████╗  **");
console.log("** ██╔══██╗██╔══██╗██╔════╝     ██╔════╝ ██╔══██╗████╗ ████║██╔════╝  **");
console.log("** ██████╔╝██████╔╝██║  ███╗    ██║  ███╗███████║██╔████╔██║█████╗    **");
console.log("** ██╔══██╗██╔═══╝ ██║   ██║    ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝    **");
console.log("** ██║  ██║██║     ╚██████╔╝    ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗  **");
console.log("** ╚═╝  ╚═╝╚═╝      ╚═════╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝  **");
console.log("**                                                                    **");
console.log("**                            Created By                              **");
console.log("**                                                                    **");
console.log("**                           Nabil & Simon                            **");
console.log("**                                                                    **");
console.log("************************************************************************");
console.log("");

let heroes = [Grace, Ulder, Moanna, Draven, Carl];

const runNewGame = new Game(heroes);
runNewGame.startGame();
