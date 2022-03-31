import React from 'react';
import { io } from "socket.io-client";

const socket = io("http://localhost",
{
  path: '/chat'
}
);


function App() {
  
  // socket.on("connected", (msg) => {
  //   console.log(msg); // ojIckSD2jqNzOqIrAGzL

  // });
  socket.emit("send_message", {message:"my message from client"})

  
  return (
    <div className="App">
      <p>hello there</p>

    </div>
  );
}

export default App;
