const fs = require('fs');

function read() {
  const path = './puzzles.txt';
  // извлекаем содержимое puzzles.txt
  const board = fs.readFileSync(path, 'utf8');
  // разбиваем содержимое на отдельные строки
  const minBoard = board.split('\n').filter((line) => line !== '');
  // номер судоку
  let minBoardNum = Number(process.argv[2]) || 2;
  // ограничиваем номер судоку (длина массива)
  if (minBoardNum > minBoard.length) {
    minBoardNum = minBoard.length;
  }

  const sudoku = minBoard[minBoardNum - 1];
  console.log(`судоку № ${minBoardNum}`);
  return sudoku;
}
console.log(read());

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
