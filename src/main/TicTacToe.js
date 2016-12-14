import React, {PropTypes, Component} from "react";
import Board from "./Board";
import Message from "./Message";

export default class TicTacToe extends Component {
  
  static propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOf(["x", "o", "_"]))),
    player: PropTypes.oneOf(["x", "o"]),
    gameOver: PropTypes.bool,
  };

  static defaultProps = {
    board: [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"]
    ],
    player: "x"
  };

  constructor(props) {
    super(props);
    this.state = {
      board: props.board,
      player: props.player,
      movesLeft: 9,
      draw: false,
      xWon: false,
      oWon: false
    };
  }

  playerClickedCell = (row, col) => {
    const newBoard = this.state.board.slice();
    const boardRow = this.state.board[row].slice();
    boardRow[col] = this.state.player;
    newBoard[row] = boardRow;

    const movesLeft = this.state.movesLeft - 1;

    this.setState(Object.assign({
      board: newBoard,
      player: (this.state.player === "x" ? "o" : "x"),
      movesLeft: movesLeft,
      draw: (movesLeft === 0),
      xWon: this.playerWon(newBoard, "x"),
      oWon: this.playerWon(newBoard, "o")
    }));
  };

  playerWon(board, playerMark) {
    const row0 = board[0];
    const row1 = board[1];
    const row2 = board[2];

    const col0 = [board[0][0], board[1][0], board[2][0]];
    const col1 = [board[0][1], board[1][1], board[2][1]];
    const col2 = [board[0][2], board[1][2], board[2][2]];

    return (
      this.check(row0, playerMark) ||
      this.check(row1, playerMark) ||
      this.check(row2, playerMark) ||
      this.check(col0, playerMark) ||
      this.check(col1, playerMark) ||
      this.check(col2, playerMark) ||
      this.checkDiagonals(board, playerMark)
    ); 
  }

  check(values, playerMark) {
    const value = values.join(""); 
    return value === playerMark.repeat(3);  
  }

  checkDiagonals(board, player) {
    const leftToRight = board[0][0] + board[1][1] + board[2][2];
    const rightToLeft = board[0][2] + board[1][1] + board[2][0];

    const playerGame = player.repeat(3);
    return (
      leftToRight === playerGame ||
      leftToRight === playerGame ||
      rightToLeft === playerGame ||
      rightToLeft === playerGame
    );
  }

  render() {
    const board = this.state.board;
    const {xWon, oWon, draw} = this.state;
    console.log(xWon, oWon, draw);
    return (
      <div>
        <Message xWon={xWon} oWon={oWon} draw={draw} />
        <Board board={board} onChange={this.playerClickedCell}/>
      </div>      
    );
  }
};