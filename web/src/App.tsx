import React from 'react';
import { io } from "socket.io-client";

const socket = io("http://localhost/chat", {
});

socket.on('connection',()=>{
  console.log
})

function App() {

  return (
    <div className="App">

      {




      }

    </div>
  );
}

export default App;
