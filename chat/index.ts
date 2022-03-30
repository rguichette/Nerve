const app = require("express")();
const httpServer = require("http").createServer(app);
import { Request, Response } from "express";
import { Server } from "socket.io";


const io = new Server(httpServer, { cors:{
  origin:"*",
},
path: '/chat'
// transports: ['websocket', 'polling']

});


io.on("connection", (socket) => {
  socket.emit("connected", "some message from server")
  console.log("socket id",socket.id); 
});

app.get('/testing', (req:Request, res:Response) => {
    res.send('chat world!!!!#!');
});


httpServer.listen(8080, ()=>{
    console.log("chat ready to go!")
});


//Run app, then load http://localhost:port in a browser to see the output.