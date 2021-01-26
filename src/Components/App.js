import "../Styles/App.css";
import React, { useState } from "react";
import Chat from "./Chat";
import FriendsList from "./FriendsList";

function App() {
  const mockData = {
    Nildo: [
      {
        id: 0,
        message:
          "First message: This is the first message from the other user.",
        fromMe: false,
      },
      {
        id: 1,
        message:
          "Second message: this is the first message from me. Second message: this is the first message from me.",
        fromMe: true,
      },
    ],

    Daniel: [
      {
        id: 0,
        message:
          "First message: This is the first message from the other user.",
        fromMe: false,
      },
      {
        id: 1,
        message: "Second message: this is the first message from me.",
        fromMe: true,
      },
    ],
  };

  const [data, setData] = useState(mockData);
  const [activeName, setActiveName] = useState("Nildo");
  const mockList = [];
  for (const friend in mockData) {
    mockList.push({
      name: friend,
      snippet: mockData[friend][mockData[friend].length - 1].message,
    });
  }

  const sendMsg = (msg) => {
    console.log(data);
    console.log(activeName);
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
    console.log(name);
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
