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

  render() {
    const board = this.props.board;
    return (
      <div className="board">
        <div className="cell cell_11">{board[1][1]}</div>
        <div className="cell cell_12">{board[1][2]}</div>
        <div className="cell cell_13">{board[1][3]}</div>
        <div className="cell cell_21">{board[2][1]}</div>
        <div className="cell cell_22">{board[2][2]}</div>
        <div className="cell cell_23">{board[2][3]}</div>
        <div className="cell cell_31">{board[3][1]}</div>
        <div className="cell cell_32">{board[3][2]}</div>
        <div className="cell cell_33">{board[3][3]}</div>
      </div>      
    );
  }
};