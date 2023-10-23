
/* eslint-disable */

const fs = require("fs");

function read() {
  const path = "./puzzles.txt";
  // извлекаем содержимое puzzles.txt
  const board = fs.readFileSync(path, "utf8");
  // разбиваем содержимое на отдельные строки
  const minBoard = board.split("\n").filter((line) => line !== "");
  // номер судоку
  let minBoardNum = Number(process.argv[2]) || 2;
  // ограничиваем номер судоку (длина массива)
  if (minBoardNum > minBoard.length) {
    minBoardNum = minBoard.length;
  }

  const sudoku = minBoard[minBoardNum - 1];
  // console.log(`судоку № ${minBoardNum}`);
  return sudoku; 
}

// function transformFromSptring() {
//   const arr = [...str];

//   const arrSize = 9;
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += arrSize) {
//     const periodArray = arr
//       .slice(i, i + arrSize)
//       .map((item) => (item === "-" ? 0 : parseInt(item, 10)));
//     newArr.push(periodArray);
//   }
//   return newArr;
// }



// console.log(read())

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved(board) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}
const fromSolve = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

function gorizontCheck(arr) {
  for (let i = 0; i < arr.length; i++) {
    const flattened = [].concat(...arr[i]);
    const сheckNumbers = Array.from({ length: 9 }, (_, i) => i + 1).every(
      (num) => flattened.includes(num)
    );
    if (!сheckNumbers) {
      return false;
    }
  }
  return true;
}

function vertikalCheck(arr) {
  for (let i = 0; i < arr.length; i++) {
    const column = [];
    for (let j = 0; j < arr.length; j++) {
      column.push(arr[j][i]);
    }
    const сheckNumbers = Array.from({ length: 9 }, (_, i) => i + 1).every(
      (num) => column.includes(num)
    );
    if(!сheckNumbers){
      return false
    }
  } return true
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


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


function isValid(board, row, column, number) {
  for (let i = 0; i < row.length; i++) {
    if (board[row][i] === number) {
      return false;
    }

    for (let i = 0; i > row.length; i++) {
      if (board[column][i] === number) {
        return false;
      }
    }
  }
}

// isWork
// function transformTo3x3(arr) {

// const arrSize = 3;
const stringSudoku = read();

// console.log(transformFromSptring(stringSudoku));

function transformTo3x3(arr) {
  const arrSize = 3;

  const newArr = [];

  for (let i = 0; i < arr.length; i += arrSize) {
    newArr.push(arr.slice(i, i + arrSize));
  }
  return newArr;
}

// Work with solver

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

function solver(board) {
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

      if (solver(board)) {
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



const board = transformFromSptring(stringSudoku);

const solvedBoard = solver(board);

console.table(solvedBoard);

