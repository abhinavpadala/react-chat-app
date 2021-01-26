import React from "react";
import "../Styles/App.css";

function FriendItem(props) {
  const handleClick = () => {
    props.handleClick(props.name);
  };

  return (
    <div className="friend-item" onClick={handleClick}>
      <h1 className="friend-title">{props.name}</h1>
      <p className="friend-snippet">{props.snippet}</p>
    </div>
  );
}

export default FriendItem;
