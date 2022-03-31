import { Socket } from "socket.io";




const messageHandler = (io:any, socket:Socket) => {
const sendMessage = (payload:any)=>{
console.log("message recieved by server", payload)
}


//-----

socket.on("send_message", sendMessage);

}


export default messageHandler