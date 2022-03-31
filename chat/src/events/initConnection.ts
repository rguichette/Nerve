import { Socket } from "socket.io";




const connectionHandler = (io:any, socket:Socket) => {

    const connectedMsg = (payload:any)=>{
    console.log("Connected!", payload)
    }


    //-----

    
    socket.on("disconnect",()=>{
        console.log("disconnected")
    } )
    socket.on("connection", ()=>{

        
        console.log("connected live!")
    });

}


export default connectionHandler