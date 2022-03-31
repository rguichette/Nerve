import { Socket } from "socket.io";




const connectionHandler = (io:any, socket:Socket) => {

 
    
    
        socket.on("login", (payload)=>{
    
            
            console.log(payload.id)
        });
    
    socket.on("disconnect",()=>{
        console.log("disconnected")
    } )


    

}


export default connectionHandler