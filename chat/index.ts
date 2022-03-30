const app = require("express")();
const httpServer = require("http").createServer(app);
import { Request, Response } from "express";
import { Server } from "socket.io";

// const options = { origin: "*" };


// const io = require("socket.io")(httpServer);

const io = new Server(httpServer, {
    cors: {
      origin: "*"
    }
  });

// io.on("connection", socket => { console.log("connected")});


app.get('/', (req:Request, res:Response) => {
    res.send('chat world!!!!#!');
});









httpServer.listen(80, ()=>{
    console.log("chat ready to go!")
});


//Run app, then load http://localhost:port in a browser to see the output.