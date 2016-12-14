import React, {PropTypes} from "react";

const Message = ({xWon, oWon, draw}) => {
    let text = "";
    if(xWon) {
        text = "X Win";
    }
    else {
        if(oWon) {
            text = "O Win";
        }
        else {
            if(draw) {
                text = "Game Draw";
            }
        }
    }
    return (
      <h1 className="message">{text}</h1>
    );
};

Message.propTypes = {
  xWon: PropTypes.bool.isRequired,
  oWon: PropTypes.bool.isRequired,
  draw: PropTypes.bool.isRequired
};

export default Message;