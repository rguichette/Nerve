import React, { useState } from 'react';
import { io } from "socket.io-client";

const socket = io("http://localhost",
{
  path: '/chat'
}
);


function App() {
  const [input, setInput] = useState("")
  
  // socket.on("connected", (msg) => {
  //   console.log(msg); // ojIckSD2jqNzOqIrAGzL

  // });
  socket.emit("send_message", {message:"my message from client"})

  



  const handleLogin = ()=>{
    console.log("Login with socket id: ", socket.id)
    //send name and socket id to server -- fake
    console.log({user: input, socketId: socket.id})
  }



  const handleInput = (e:any) =>{
    console.log(e.target.value);
    setInput(e.target.value)
  }



  return (
    <div className="App">
      <input onChange={handleInput}></input>
      <p>hello there</p>
      <button onClick={handleLogin}>login In</button>

    </div>
  );
}

export default App;
