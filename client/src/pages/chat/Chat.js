import Navbar from "../../components/Navbar/Navbar";
import Conversation from "../../components/Conversations/Conversation";
import Message from "../../components/Message/Message";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import "./chat.css";

export default function Chat() {
    const url_conv = 'http://localhost:4000/conversation'; 
    const url_mess = 'http://localhost:4000/message';

    const [user] = useState(JSON.parse(window.localStorage.getItem('profile')));
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messagesUpdate, setMessagesUpdate] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const scrollRef = useRef();
    

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
        const getMessages = async() => {
            try {
                const res = await axios.get(url_mess + "/" + currentChat?._id);
                setMessages(res.data);
            } catch(err){
                console.log(err);
            }
        };
        getMessages();

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
        e.preventDefault(); //refresh the page cuando pulsas send
        const message = {
            conversationId: currentChat._id,
            sender: user.result._id,
            text:newMessage            
        }
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
        </div>
        </>
    )
}
