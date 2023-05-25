import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import man1Icon from './images/man_icon.png'
import man2Icon from './images/man_2_icon.png'

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([
    {id:1, name:'John Doe', avatar:man1Icon},
    {id:2, name:'Carl Black', avatar:man2Icon},
  ]);
  const scroll = useRef();
  const storedMessages = localStorage.getItem('chatMessages');
  localStorage.setItem('storedUsers', JSON.stringify(users))

  useEffect(() => {
    // Retrieve chat messages from localStorage
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages);
      setMessages(parsedMessages);
    } 
  }, []);

  useEffect(() => {
    // Store chat messages in localStorage whenever it changes
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message 
            key={message.messageID}
            message={message} 
            allMessages={messages}/>
        ))}
      </div>
      <span ref={scroll}></span>
      <SendMessage 
        scroll={scroll} 
        messages={messages} 
        setMessages={setMessages} 
        users={users}/>
    </main>
  );
};

export default ChatBox;