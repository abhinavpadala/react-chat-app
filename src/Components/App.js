import "../Styles/App.css";
import React, { useState } from "react";
import Chat from "./Chat";
import FriendsList from "./FriendsList";
import { mockData } from "./Seed.js";

function App() {
  const [data, setData] = useState(mockData);
  const [activeName, setActiveName] = useState("Nildo");

  // Generate list of Friends
  const mockList = [];
  for (const friend in mockData) {
    mockList.push({
      name: friend,
      snippet: mockData[friend][mockData[friend].length - 1].message,
    });
  }

  const sendMsg = (msg) => {
    const newMsg = {
      id: data[activeName].length + 1,
      message: msg,
      fromMe: true,
    };
    let newData = { ...data };
    newData[activeName].push(newMsg);
    setData(newData);
  };

  const handleClick = (name) => {
    setActiveName(name);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <FriendsList mockList={mockList} handleClick={handleClick} />
      </div>
      <div className="content">
        <Chat
          data={data[activeName]}
          sendMsg={sendMsg}
          activeName={activeName}
        />
      </div>
    </div>
  );
}

export default App;
