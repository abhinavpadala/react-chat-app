import React, { useRef } from "react";
import "../Styles/App.css";
import Messages from "./Messages";
import Compose from "./Compose";

function Chat(props) {
  const elementRef = useRef();

  return (
    <div className="chat-container" ref={elementRef}>
      <div className="chat-header">
        <b>{props.activeName}</b>
      </div>
      <div className="chat-messages">
        <Messages messages={props.data} />
      </div>
      <div className="message-input">
        <Compose sendMsg={props.sendMsg} />
      </div>
    </div>
  );
}

export default Chat;
