const app = require("express")();
const httpServer = require("http").createServer(app);
import { Request, Response } from "express";
import { Server, Socket } from "socket.io";

import connectionHandler from "./src/events/initConnection";
import messageHandler from './src/events/MessageHandler'


const io = new Server(httpServer, { cors:{
  origin:"*",
},
path: '/chat'
// transports: ['websocket', 'polling']

});

const onConnection = (socket:Socket) => {
  connectionHandler(io, socket)
  messageHandler(io, socket);
}

io.on("connection",onConnection );


// (socket) => {
//   socket.emit("connected", "some message from server")
//   console.log("socket id",socket.id); 

//   //handle all events here



// }

app.get('/testing', (req:Request, res:Response) => {
    res.send('chat world!!!!#!');
});


httpServer.listen(8080, ()=>{
    console.log("chat ready to go!")
});


//Run app, then load http://localhost:port in a browser to see the output.