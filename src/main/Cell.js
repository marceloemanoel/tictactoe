import React, {PropTypes} from "react";

const Cell = ({className, value, onClick}) => {
  return (
    <div className={`cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

Cell.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.oneOf(["_", "x", "o"]).isRequired
};

export default Cell;