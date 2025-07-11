// src/components/Message.js
import React from 'react';
import './Message.css';

function Message({ text, sender }) {
  const isUser = sender === 'user';

  const avatar = isUser
    ? 'https://cdn-icons-png.flaticon.com/512/219/219983.png'   // user icon
    : 'https://cdn-icons-png.flaticon.com/512/4712/4712100.png'; // bot icon

  return (
    <div className={`message-row ${isUser ? 'user' : 'bot'}`}>
      <img src={avatar} alt={sender} className="avatar" />
      <div className={`message-bubble ${isUser ? 'user' : 'bot'}`}>
        {text}
      </div>
    </div>
  );
}

export default Message;
