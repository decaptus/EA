import Navbar from "../../components/Navbar/Navbar";
import Conversation from "../../components/Conversations/Conversation";
import Message from "../../components/Message/Message";
import ChatUsers from "../../components/ChatUsers/ChatUsers";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import {io} from "socket.io-client";

import "./chat.css";

export default function Chat() {
    const url_conv = 'http://localhost:4000/conversation'; 
    const url_mess = 'http://localhost:4000/message';
    const url_usr = 'http://localhost:4000/users';

    const [user] = useState(JSON.parse(window.localStorage.getItem('profile')));
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messagesUpdate, setMessagesUpdate] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [usersReg, setUsersReg] = useState([]);
    const scrollRef = useRef();
    const socket = useRef();
    
    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                sender:data.senderId,
                text:data.text,
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && 
        setMessages((prev)=>[...prev, arrivalMessage])
    },[arrivalMessage, currentChat]);

    useEffect(() => {
        const getUsers = async () => {
            try {
              const res = await axios.get(url_usr);
              setUsersReg(res.data);
            } catch (err) {
              console.log(err);
            }
          };
          getUsers();
    },[user.result._id]);
    useEffect(() => {
        socket.current.emit("addUser", user.result._id);
        socket.current.on("getUsers", (users) => {
            setOnlineUsers(
                usersReg.filter((f) => users.some((u) => u.userId === f._id))
              );
        });
      }, [user]);

    console.log(onlineUsers);

    useEffect(() => {
        const getConversations = async () => {
          try {
            const res = await axios.get(url_conv + "/" + user.result._id);
            setConversations(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getConversations();
    }, [user.result._id]);

    useEffect(()=>{
        if (currentChat){
            const getMessages = async() => {
                try {
                    const res = await axios.get(url_mess + "/" + currentChat?._id);
                    setMessages(res.data);
                } catch(err){
                    console.log(err);
                }
            };
            getMessages();
        }
            

        if(messagesUpdate){
            const getMessages = async() => {
                try {
                    const res = await axios.get(url_mess + "/" + currentChat?._id);
                    setMessages(res.data);
                } catch(err){
                    console.log(err);
                }
            };
            getMessages();
            setMessagesUpdate(false);
        }

    }, [currentChat,messagesUpdate]);

    
    const handleSubmit = async(e)=>{
        e.preventDefault(); 
        const message = {
            conversationId: currentChat._id,
            sender: user.result._id,
            text:newMessage            
        }
        const receiverId = currentChat.members.find(member => member !== user.result._id)
        socket.current.emit("sendMessage", {
            senderId: user.result._id,
            receiverId,
            text: newMessage
        });
        try{
            const res = await axios.post(url_mess, message);
            setMessages([...messages,res.data]);
            setNewMessage("");
            setMessagesUpdate(true);
        }catch(err){
            console.log(err);
        }
    }
    
    useEffect(() => {
        scrollRef?.current?.scrollIntoView({behavior:"smooth"});
    }, [messages]);

    return (
        <>
        <Navbar/>
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                <input placeholder="Search for friends" className="chatMenuInput" />
                    {conversations.map((c) => (
                        <div onClick={()=>setCurrentChat(c)}>
                            <Conversation conversation={c} currentUser={user} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {currentChat ? (
                        <>
                            <div className="chatBoxTop">
                                {messages.map((m) => (
                                    <div ref={scrollRef}>
                                        <Message message={m} own={m.sender === user.result._id} />
                                    </div>
                                ))}
                            </div>
                            <div className="chatBoxBottom">
                                <textarea
                                    className="chatMessageInput"
                                    placeholder="write something..."
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    value={newMessage}
                                ></textarea>
                                <button className="chatSubmitButton" onClick={handleSubmit}>
                                    Send
                                </button>
                            </div>
                        </>
                        ) : (
                        <span className="noConversationText">Open a conversation to start a chat...</span>
                        )}
                </div>
            </div>
            <div className="chatUsers">
                <div className="chatUsersWrapper">
                    <ChatUsers 
                    usersBBDD={usersReg}
                    onlineUsers={onlineUsers}
                    currentId={user.result._id}
                    />
                </div>
            </div>
        </div>
        </>
    )
}
