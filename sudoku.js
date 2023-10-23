/* eslint-disable */

const fs = require("fs");

function read() {
  const path = "./puzzles.txt";
  // извлекаем содержимое puzzles.txt
  const board = fs.readFileSync(path, "utf8");
  // разбиваем содержимое на отдельные строки
  const minBoard = board.split("\n").filter((line) => line !== "");
  // номер судоку
  let minBoardNum = Number(process.argv[2]) || 15;
  // ограничиваем номер судоку (длина массива)
  if (minBoardNum > minBoard.length) {
    minBoardNum = minBoard.length;
  }

  const sudoku = minBoard[minBoardNum - 1];
  return sudoku; 
}

// isWork
function transformFromSptring(str) {
    const arr = [...str];
  
    const arrSize = 9;
    const newArr = [];
  
    for (let i = 0; i < arr.length; i += arrSize) {
      const periodArray = arr
        .slice(i, i + arrSize)
        .map((item) => (item === "-" ? 0 : parseInt(item, 10)));
      newArr.push(periodArray);
    }
    return newArr;
  }

// **********************************************************************************************

function isValid(board, row, column, number) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === number || board[i][column] === number) {
      return false;
    }
  }

    const startRow = Math.floor(row / 3) * 3;
    const startColumn = Math.floor(column / 3) * 3;
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (board[j + startRow][k + startColumn] === number) {
          return false;
        }
      }
    }
  return true;
}

function solve(board) {
  let emptyPlace = findEmpty(board);

  // basic conditions for leaving
  if (!emptyPlace) {
    return board;
  }

  let row = emptyPlace[0];
  let column = emptyPlace[1];

  for (let num = 1; num <= 9; num++) {
    if (isValid(board, row, column, num)) {
      board[row][column] = num;

      if (solve(board)) {
        return board.map(el => el.join('|'))
      }
      board[row][column] = 0;
    }
  }
  return false;

  function findEmpty(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return null;
  }
}

// **********************************************************************************************

function isSolved(board) {
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

const stringSudoku = read();

const board = transformFromSptring(stringSudoku);

const solvedBoard = solve(board);

console.table(solvedBoard);

