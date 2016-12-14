import React, {PropTypes, Component} from "react";
import Cell from "./Cell";

export default class Board extends Component {
  
  static propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOf(["x", "o", "_"]))),
    onChange: PropTypes.func.isRequired
  };

  onCellClick = (row, col) => {
      return () => {
          this.props.onChange(row, col);
      };
  }

  render() {
    const board = this.props.board;
    return (
      <div className="board">
        <Cell className="cell_00" onClick={this.onCellClick(0, 0)} value={board[0][0]} />
        <Cell className="cell_01" onClick={this.onCellClick(0, 1)} value={board[0][1]} />
        <Cell className="cell_02" onClick={this.onCellClick(0, 2)} value={board[0][2]} />
        <Cell className="cell_10" onClick={this.onCellClick(1, 0)} value={board[1][0]} />
        <Cell className="cell_11" onClick={this.onCellClick(1, 1)} value={board[1][1]} />
        <Cell className="cell_12" onClick={this.onCellClick(1, 2)} value={board[1][2]} />
        <Cell className="cell_20" onClick={this.onCellClick(2, 0)} value={board[2][0]} />
        <Cell className="cell_21" onClick={this.onCellClick(2, 1)} value={board[2][1]} />
        <Cell className="cell_22" onClick={this.onCellClick(2, 2)} value={board[2][2]} />
      </div>        
    );
  }
}