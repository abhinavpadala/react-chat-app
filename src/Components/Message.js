import React from "react";
import "../Styles/App.css";

function Message(props) {
  return (
    <div className="message">
      {props.fromMe ? (
        <div className="message-from-me">{props.message}</div>
      ) : (
        <div className="message-from-other">{props.message}</div>
      )}
    </div>
  );
}

export default Message;
