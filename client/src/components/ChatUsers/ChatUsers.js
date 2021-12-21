import "./chatUsers.css";
import {useEffect, useState} from "react";

export default function ChatOnline({usersBBDD, onlineUsers, currentId}) {
    const [users, setUsers] = useState([]);
    const [usersDesconected, setUsersDesconected] = useState([]);
    const [usersOnline, setUsersOnline] = useState([]);

    useEffect(() => {
        setUsers(usersBBDD.filter((u) => u._id !== currentId) );
        setUsersOnline(onlineUsers.filter((u) => u._id !== currentId) );
        setUsersDesconected(users.filter((f) => onlineUsers.some((u) => u._id !== f._id)));
    }, []);
    
    

    return (
        <div className="chatUsers">
            {usersOnline?.map((o) => (
            <div className="chatUser">
                <div className="chatImgContainer">
                    <img className="chatOnlineImg" src={o.picture} alt="" />
                    <div className="userStatusPoint"></div>
                </div>
                <span className="chatUserName">
                    {o.name}
                </span>
            </div>
            ))}
            {usersDesconected?.map((m) => (
            <div className="chatUserDisc">
                <div className="chatImgContainerDisc">
                    <img className="chatOnlineImgDisc" src={m.picture} alt="" />
                    <div className="userStatusPointRed"></div>
                </div>
                <span className="chatUserNameDisc">
                    {m.name}
                </span>
            </div>
            ))}
        </div>
    )
}
