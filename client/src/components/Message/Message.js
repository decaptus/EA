import "./message.css";
import axios from "axios";
import {useEffect, useState } from "react";

export default function Message({ message, own, currentChat, currentUser }) {
  const [user,setUser] = useState(null);

    useEffect(() => {
        const receiver = currentChat.members.find((m) => m !== currentUser.result._id)
        const getUser = async () => {
            try{
                const res = await axios("http://localhost:4000/users/" + receiver);
                setUser(res.data);
            }
            catch (err){
                console.log(err);
            }
        }
        getUser();
    }, [currentUser,currentChat]);

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
            <img
              className="messageImg"
              src={own ? currentUser.result.picture : user?.picture}
              alt=""
            />
                
        <p className="messageText">{message.text}</p>
      </div>
    </div>
  );
}