import React from "react";
import "../Styles/App.css";
import FriendItem from "./FriendItem";

function FriendsList(props) {
  return (
    <div className="friends-list">
      {props.mockList.map((friend, i) => {
        return (
          <FriendItem
            key={i}
            name={friend.name}
            snippet={friend.snippet}
            handleClick={props.handleClick}
          />
        );
      })}
    </div>
  );
}

export default FriendsList;
