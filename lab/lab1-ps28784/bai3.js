const players = [
  { name: 'Messi', goals: 30 },
  undefined,
  { name: 'Ronaldo', goals: 28 },
  { name: 'Neymar', goals: 22 },
  { goals: 2 },
  { name: 'Mbappé', goals: 25 },
  { name: 'Pele', goals: null },
];

const validPlayer = ({name, goals} = {}) => !!name && typeof goals === 'number';

let topScorer = { name: '', goals: 0 };
let validPlayers = [];

players.forEach(player => {
  if (validPlayer(player)) {
    validPlayers.push(player);
    if (player.goals > topScorer.goals) {
      topScorer = player;
    }
  }
});

console.log('Danh sách cầu thủ hợp lệ:', validPlayers);
console.log('Cầu thủ ghi bàn thắng nhiều nhất:', topScorer);
