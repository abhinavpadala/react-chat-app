import React, { useState } from "react";
import "../Styles/App.css";

function Compose(props) {
  const tempMessages = {
    Eren: "",
    Armin: "",
  };

  const [msgs, setMsgs] = useState(tempMessages);

  const handleChange = (e) => {
    setMsgs({ ...msgs, [props.activeName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.sendMsg(msgs[props.activeName]);
    setMsgs({ ...tempMessages, [props.activeName]: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 18px",
    borderSizing: "borderBox",
    position: "absolute",
    bottom: "2px",
    borderRadius: "15px",
    outline: "None",
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="message-compose"
        value={msgs[props.activeName] || ""}
        onChange={handleChange}
        style={inputStyle}
      />
    </form>
  );
}

export default Compose;
