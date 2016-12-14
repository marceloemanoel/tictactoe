import React, {PropTypes} from "react";
import x from "./x.png";
import o from "./circle.png";
const Cell = ({className, value, onClick}) => {
  return (
    <div className={`cell ${className}`} onClick={onClick}>
        {(
          value === "_" 
            ? null
            : (<img src={(value === "x" ? x : o)} alt={value} className="centered-img"/>)
        )}    
    </div>
  );
};

Cell.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.oneOf(["_", "x", "o"]).isRequired
};

export default Cell;