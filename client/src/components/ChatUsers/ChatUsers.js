import "./chatUsers.css";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ChatOnline({usersBBDD, onlineUsers, currentId, setCurrentChat, setConversationUpdate}) {
    const [users, setUsers] = useState([]); //Lista de usuarios de la BBDD sin el usuario que ha iniciado sesion
    const [usersSocket, setUsersSocket] = useState([]); //Lista de id usuarios con id de sockets
    const [usersDesconected, setUsersDesconected] = useState([]); //Lista de usuarios desconectados
    const [usersOnline, setUsersOnline] = useState([]); //Lista de usuarios conectados sin el que ha iniciado sesion
    const url_conv = 'http://localhost:4000/conversation'; 

    useEffect(() => {
        console.log("onlineUsers", onlineUsers);
        setUsers(usersBBDD.filter((u) => u._id !== currentId));
        console.log("users",users);
        setUsersSocket(users.filter((f) => onlineUsers.some((u) => u.userId === f._id)));       
        console.log("usersSocket",usersSocket);
        setUsersOnline(usersSocket.filter((u) => u._id !== currentId));
        console.log("usersOnline",usersOnline);
        setUsersDesconected(users.filter((f) => usersSocket.some((u) => u._id !== f._id)));
        console.log("usersDesconected", usersDesconected);
    }, [usersBBDD,onlineUsers, currentId, setCurrentChat, setConversationUpdate]);


    const handleClick = async (user) =>{
        console.log(user);
        try{
            const res = await axios.get(url_conv + "/find/" + user._id+"/"+currentId);
            console.log(res.data);
            console.log(res.status);
            if(res.data != null)
            {
                console.log("hay conver");
                setCurrentChat(res.data);
            }
            else{
                const usr1 = new String(currentId);
                const usr2 = new String(user._id);
                
                const conversation = {
                    members: [usr1,usr2]            
                }
                try{
                    await axios.post(url_conv, conversation);
                    setConversationUpdate(true);
                    const res2 = await axios.get(url_conv + "/find/" + user._id+"/"+currentId);
                    if(res2.data != null)
                    {
                        console.log("he creado la conver");
                        setCurrentChat(res2.data);
                    }
                }catch(err){
                    console.log(err);
                }
            }
        }catch(err){
            console.log(err);
        }

    }
    
    return (
        <div className="chatUsers">
            {usersOnline?.map((o) => (
            <div className="chatUser" onClick={()=>handleClick(o)} key={o._id} >
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
            <div className="chatUserDisc" onClick={()=>handleClick(m)} key={m._id}>
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
