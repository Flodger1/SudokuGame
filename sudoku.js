/* eslint-disable */

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

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

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
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
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

[
    [
        [5, 3, 4], [6, 7, 8], [9, 1, 2]
    ],
    [
        [6, 7, 2], [1, 9, 5], [3, 4, 8]
    ],
    [
        [1, 9, 8], [3, 4, 2], [5, 6, 7]
    ],
    [
        [8, 5, 9], [7, 6, 1], [4, 2, 3]
    ],
    [
        [4, 2, 6], [8, 5, 3], [7, 9, 1]
    ],
    [
        [7, 1, 3], [9, 2, 4], [8, 5, 6]
    ],
    [
        [9, 6, 1], [5, 3, 7], [2, 8, 4]
    ],
    [
        [2, 8, 7], [4, 1, 9], [6, 3, 5]
    ],
    [
        [3, 4, 5], [2, 8, 6], [1, 7, 9]
    ]
];


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// isWork
function transformFromSptring(str) {
  const arr = [...str];

  const arrSize = 9;
  const newArr = [];

  for(let i=0; i<arr.length; i+= arrSize) {
    const periodArray = arr.slice(i,i+arrSize).map(item => item === '-' ? 0 : parseInt(item, 10));
    newArr.push(periodArray)
  }
  return newArr
}

console.log(transformTo9x9('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))


function isValid(board, row, column, number) {
  for (let i=0; i<row.length; i++) {
    if (board[row][i] === number) {
      return false 
    }

  for (let i =0; i>row.length; i++) {
    if (board[column][i] === number) {
      return false
    }
  }
  }
}






// isWork
// function transformTo3x3(arr) {

// const arrSize = 3;

// const newArr = []

// for (let i=0; i<arr.length; i += arrSize){
//   newArr.push(arr.slice(i, i + arrSize))
// }
// return newArr
// }

// console.log(transformTo3x3(arr));




