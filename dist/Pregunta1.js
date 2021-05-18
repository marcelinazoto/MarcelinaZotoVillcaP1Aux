"use strict";
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
//********************* 1 *******************
var jugadores1 = [];
var j = 0;
for (let i = 0; i < game.players[0][10].length; i++) {
    jugadores1[j] = game.players[0][i];
    j++;
}
j = 0;
var jugadores2 = [];
for (let i = 0; i < game.players[1][10].length; i++) {
    jugadores2[j] = game.players[1][i];
    j++;
}
j = 0;
console.log('1. ');
console.log('jugadores1: ' + jugadores1);
console.log('jugadores2: ' + jugadores2);
//********************* 2 *******************
var fieldplayers = [];
for (let i = 1; i < game.players[0][10].length; i++) {
    fieldplayers[j] = game.players[0][i];
    j++;
}
j = 0;
console.log('2. ');
console.log('gk: ' + jugadores1[0]);
console.log('fieldplayers: ' + fieldplayers);
//********************* 3 *******************
var allPlayers = [...jugadores1, ...jugadores2];
console.log('3. ' + 'allPlayers: ' + allPlayers);
//********************* 4 *******************
var players1Final = jugadores1;
players1Final.push('Thiago', 'Coutinho', 'Perisic');
console.log('4. ' + 'players1Final: ' + players1Final);
//********************* 5 *******************
var equipo1 = game.odds.team1;
var empate = game.odds.x;
var equipo2 = game.odds.team2;
//********************* 6 *******************
console.log('6. ');
var n1 = 0;
var n2 = 0;
function printGoals(jugador) {
    for (let i = 0; i < jugadores1.length; i++)
        if (jugador == jugadores1[i]) {
            n1++;
            break;
        }
        else if (jugador == jugadores2[i]) {
            n2++;
            break;
        }
    console.log('jugador: ', jugador);
}
printGoals(allPlayers[Math.floor(Math.random() * allPlayers.length)]);
printGoals(allPlayers[Math.floor(Math.random() * allPlayers.length)]);
printGoals(allPlayers[Math.floor(Math.random() * allPlayers.length)]);
console.log('Goles del equipo 1: ', n1, '-', 'Goles del equipo 2: ', n2);
//********************* 7 *******************
let team1 = 'Bayern Munich';
let team2 = 'Borrussia Dortmund';
console.log('7. ');
let EquipoGanador = (n1 > n2) ? (console.log('Equipo ganador: ' + team1)) : (n1 < n2) ? (console.log('Equipo ganador: ' + team2)) : (console.log('Empate'));
