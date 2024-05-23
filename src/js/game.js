import Character from "./domain";

class Game {
    start() {
      console.log('game started');
    }
}
  
class GameSavingData {
    characterView() {
        console.log(Character);
    }
}
  
function readGameSaving() {
    console.log('Игра загружена');
}
  
function writeGameSaving() {
    console.log('Игра сохранена');
}

export { GameSavingData, readGameSaving, writeGameSaving }

export default Game;
