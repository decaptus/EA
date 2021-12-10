import axios from "axios";
import "./conversation.css";
import {useEffect, useState } from "react";

export default function Conversation({conversation, currentUser}) {
    const [user,setUser] = useState(null);

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser.result._id)
        const getUser = async () => {
            try{
                const res = await axios("http://localhost:4000/users/" + friendId);
                setUser(res.data);
            }
            catch (err){
                console.log(err);
            }
        }
        getUser();
    }, [currentUser,conversation]);



    return (
        <div className="conversation">
            <img className="conversationImg" src="" alt="" />
            <span className="conversiationName"> {user?.name} </span>
        </div>
    )
}
