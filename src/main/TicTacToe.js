import React, {PropTypes, Component} from "react";

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

  playerClickedCell = (evt) => {
    const target = evt.target;
    const row = Number(target.dataset.row);
    const col = Number(target.dataset.column);

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
        <div className="board">
          <div className="cell cell_11" onClick={this.playerClickedCell} data-row="0" data-column="0">{board[0][0]}</div>
          <div className="cell cell_12" onClick={this.playerClickedCell} data-row="0" data-column="1">{board[0][1]}</div>
          <div className="cell cell_13" onClick={this.playerClickedCell} data-row="0" data-column="2">{board[0][2]}</div>
          <div className="cell cell_21" onClick={this.playerClickedCell} data-row="1" data-column="0">{board[1][0]}</div>
          <div className="cell cell_22" onClick={this.playerClickedCell} data-row="1" data-column="1">{board[1][1]}</div>
          <div className="cell cell_23" onClick={this.playerClickedCell} data-row="1" data-column="2">{board[1][2]}</div>
          <div className="cell cell_31" onClick={this.playerClickedCell} data-row="2" data-column="0">{board[2][0]}</div>
          <div className="cell cell_32" onClick={this.playerClickedCell} data-row="2" data-column="1">{board[2][1]}</div>
          <div className="cell cell_33" onClick={this.playerClickedCell} data-row="2" data-column="2">{board[2][2]}</div>
        </div>
      </div>      
    );
  }
};