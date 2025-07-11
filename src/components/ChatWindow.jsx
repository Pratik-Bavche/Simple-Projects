import React, { useState } from 'react';
import Message from './Message';
import './ChatWindow.css';

function ChatWindow() {
  const [messages, setMessages] = useState([
    { text: "Hello lets starts conversion!"},
  ]);
  //messages holds all messages in the chat
  const [input, setInput] = useState("");
  //input holds the current text typed into the input box.

  const handleSend = () => {
    if (input.trim() === "") return;
    //trim():it remove spaces

    const userMessage = { text: input, sender: "user" };
    // Add user message
    setMessages(prev => [...prev, userMessage]);
    //Adds the messages array using setMessages.
    setInput("");//Clears the input box

    // Add bot reply after short delay
    setTimeout(() => {
      const botReply = {
        text: `You said: ${userMessage.text}`,
        sender: "bot",
      };
      setMessages(prev => [...prev, botReply]);
    }, 500); // 500ms delay
  };

  return (
    <div className="chat-window">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <Message key={idx} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
