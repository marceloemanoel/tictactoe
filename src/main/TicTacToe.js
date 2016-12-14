import React, {PropTypes, Component} from "react";
import Board from "./Board";

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
    player: "x",
    gameOver: false
  };

  constructor(props) {
    super(props);
    this.state = {
      board: props.board,
      player: props.player,
      gameOver: props.gameOver,
      movesLeft: 9
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
      gameOver: this.isGameOver(movesLeft) 
    }));
  };

  isGameOver = (movesLeft) => {
    return movesLeft === 0;
  };

  render() {
    const board = this.state.board;
    const gameOver = this.state.gameOver;

    return (
      <div>
        <h1 className="message">{gameOver ? "Game Over!" : ""}</h1>
        <Board board={board} onChange={this.playerClickedCell}/>
      </div>      
    );
  }
};