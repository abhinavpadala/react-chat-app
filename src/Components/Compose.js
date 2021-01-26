import React, { useState } from "react";
import "../Styles/App.css";

function Compose(props) {
  const [msg, setMsg] = useState(undefined);
  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.sendMsg(msg);
    setMsg("");
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
        value={msg || ""}
        onChange={handleChange}
        style={inputStyle}
      />
    </form>
  );
}

export default Compose;
