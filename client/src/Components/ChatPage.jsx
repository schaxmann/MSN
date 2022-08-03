import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Contexts/User";
import io from "socket.io-client"
const socket = io.connect("http://localhost:3001")
export default function ChatPage() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [isLoggedIn, SetIsLoggedIn] = useState();
  const [message, setMessage] = useState("");

  const sendMessage =(e)=>{
    socket.emit("send_message", message)
  }

//   useEffect(()=>{
// socket.on("receive_message", (data)=>{
//   console.log(data.message)
// })
//   }, [socket])

  return (
    <div>
    <header>
      <h1>MSN</h1>
    </header>
    <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
<button onClick={sendMessage}>send</button>
    </div>

  );
}
