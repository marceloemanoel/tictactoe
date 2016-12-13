import React, {PropTypes, Component} from "react";

export default class TicTacToe extends Component {
  
  static propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOf(["x", "o", "_"]))),
    player: PropTypes.oneOf(["x", "o"])
  };

  static defaultProps = {
    board: [
      [],
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"]
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      board: props.board,
      player: "x"
    };
  }

  playerClickedCell(evt){
    const target = evt.target;
    const row = target.dataset.row;
    const col = target.dataset.column;

    const newBoard = this.state.board.slice();
    const boardRow = this.state.board[row].slice();
    boardRow[col] = this.state.player;
    newBoard[row] = boardRow;

    this.setState(Object.assign({
      board: newBoard,
      player: this.state.player === "x" ? "o" : "x"
    }));
  }

  render() {
    const board = this.state.board;
    return (
      <div className="board">
        <div className="cell cell_11" onClick={this.playerClickedCell} data-row="1" data-column="1">{board[1][1]}</div>
        <div className="cell cell_12" onClick={this.playerClickedCell} data-row="1" data-column="2">{board[1][2]}</div>
        <div className="cell cell_13" onClick={this.playerClickedCell} data-row="1" data-column="3">{board[1][3]}</div>
        <div className="cell cell_21" onClick={this.playerClickedCell} data-row="2" data-column="1">{board[2][1]}</div>
        <div className="cell cell_22" onClick={this.playerClickedCell} data-row="2" data-column="2">{board[2][2]}</div>
        <div className="cell cell_23" onClick={this.playerClickedCell} data-row="2" data-column="3">{board[2][3]}</div>
        <div className="cell cell_31" onClick={this.playerClickedCell} data-row="3" data-column="1">{board[3][1]}</div>
        <div className="cell cell_32" onClick={this.playerClickedCell} data-row="3" data-column="2">{board[3][2]}</div>
        <div className="cell cell_33" onClick={this.playerClickedCell} data-row="3" data-column="3">{board[3][3]}</div>
      </div>      
    );
  }
};