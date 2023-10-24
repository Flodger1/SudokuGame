/* eslint-disable */
const fs = require("fs");
const { table } = require("table");
// ******************************************************************************************
function read() {
  const path = "./puzzles.txt";
  // извлекаем содержимое puzzles.txt
  const board = fs.readFileSync(path, "utf8");
  // разбиваем содержимое на отдельные строки
  const minBoard = board.split("\n").filter((line) => line !== "");
  // номер судоку
  let minBoardNum = Number(process.argv[2]) || 1;
  // ограничиваем номер судоку (длина массива)
  // если ввели несуществующий номер судоку, то вывести последний(15)
  if (minBoardNum > minBoard.length) {
    minBoardNum = minBoard.length;
  }
  // выводим строку с номером судоку, чтобы понимать какой у нас судоку
  const sudoku = minBoard[minBoardNum - 1];
<<<<<<< HEAD
  console.log(`Решение судоку № ${minBoardNum}`);
  return sudoku;
}
// ******************************************************************************************
// isWork
// формируем массив: на входе строка, на выходе массив из чисел ===>
// преобразование входящего судоку в виде строки в массив
// делим строку по 9 элементов и добавляем в массив
// проверяем наличие числа ( если число, то преобразуем из строкового типа в тип number, если "-", меняем его на 0)

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
=======
  console.log(`Вы приступили к решению судоку № ${minBoardNum}`);
  return sudoku; 
>>>>>>> 595e19a129a83c59e8a1ff577feb001c32a970fd
}

// ******************************************************************************************
function isSolved(board, row, column, number) {
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
    let boardDone = [];
    if (isSolved(board, row, column, num)) {
      board[row][column] = num;

      if (solve(board)) {
        return board;
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

// ******************************************************************************************
const stringSudoku = read();
const board = transformFromSptring(stringSudoku);
const solvedBoard = solve(board);
// ******************************************************************************************
// меняем формат массива на выходе
// использовали библиотеку table
function prettyBoard(solvedBoard) {
  const boardDone = solvedBoard;
  const config = {
    columnDefault: {
      width: 1,
    },
    header: {
      alignment: "center",
      content: "Судоку приносит чувство спокойствия и порядка",
    },
  };

  // console.log(table(boardDone, config));
  return table(boardDone, config);
}
console.log(prettyBoard(solvedBoard));


module.exports = {
  read,
  transformFromSptring,
  solve,
  isSolved,
  prettyBoard
}



