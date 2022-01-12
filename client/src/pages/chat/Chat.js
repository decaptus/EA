import Navbar from "../../components/Navbar/Navbar";
import Conversation from "../../components/Conversations/Conversation";
import Message from "../../components/Message/Message";
import ChatUsers from "../../components/ChatUsers/ChatUsers";
import { useDispatch,useSelector   } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {getUsers} from '../../actions/users';
import axios from "axios";
import {io} from "socket.io-client";
import "./chat.css";

export default function Chat() {
    const url_conv = 'http://localhost:4000/conversation'; 
    const url_mess = 'http://localhost:4000/message';
    const [user] = useState(JSON.parse(window.localStorage.getItem('profile')));
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messagesUpdate, setMessagesUpdate] = useState(false);
    const [conversationUpdate, setConversationUpdate] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const scrollRef = useRef();
    const socket = useRef();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    
   useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", data => {
        setArrivalMessage({
            sender:data.senderId,
            text:data.text,
        });
    });  
    }, [user]);

    useEffect(() => {
        socket.current.on("getUsers", (usersSocket) => {
            setOnlineUsers(usersSocket);
        });
        console.log(onlineUsers);
    }, [user]);

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && 
        setMessages((prev)=>[...prev, arrivalMessage])
    },[arrivalMessage, currentChat]);

    useEffect(() => {
        if (user)
        {
            dispatch(getUsers());
            socket.current.emit("addUser", user.result._id);
            const getConversations = async () => {
                try {
                    const res = await axios.get(url_conv + "/" + user.result._id);
                    setConversations(res.data);
                } catch (err) {
                    console.log(err);
                }
            };
            getConversations();
        }

        if (conversationUpdate)
        {
            const getConversations = async () => {
                try {
                    const res = await axios.get(url_conv + "/" + user.result._id);
                    setConversations(res.data);
                } catch (err) {
                    console.log(err);
                }
            };
            getConversations();
        }
        setConversationUpdate(false);
        
    }, [user,conversationUpdate]);

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
        const receiverId = currentChat.members.find(member => member !== user.result._id);
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
                <input placeholder="Conversations" className="chatMenuInput" />
                <div className="conversationsScroll">
                    {conversations.map((c) => (
                        <div onClick={()=>setCurrentChat(c)}>
                            <Conversation conversation={c} currentUser={user} key={c._id}  />
                        </div>
                    ))}
                </div>
                    
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {currentChat ? (
                        <>
                            <div className="chatBoxTop">
                                {messages.map((m) => (
                                    <div ref={scrollRef}>
                                        <Message message={m} own={m.sender === user.result._id} currentChat={currentChat} currentUser={user} key={m._id} />
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
                    <div className="usersScroll">
                        <ChatUsers 
                        usersBBDD={users}
                        onlineUsers={onlineUsers}
                        currentId={user.result._id}
                        key={user.result._id} 
                        setCurrentChat = {setCurrentChat}
                        setConversationUpdate = {setConversationUpdate}
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
