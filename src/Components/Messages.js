import React, { useEffect, useRef } from "react";
import "../Styles/App.css";
import Message from "./Message.js";

function Messages(props) {
  const messagesEnd = useRef();
  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });

  const nMessages = props.messages;
  return (
    <div>
      <div>
        {nMessages.map((message, i) => {
          return (
            <Message
              message={message.message}
              fromMe={message.fromMe}
              key={i}
            />
          );
        })}
      </div>
      <div style={{ float: "left", clear: "both" }} ref={messagesEnd}></div>
    </div>
  );
}

export default Messages;
