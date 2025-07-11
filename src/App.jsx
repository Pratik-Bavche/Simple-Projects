// App.js
import React from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <div className="app-container">
      <h2 className="chat-title">React Chat UI 💬</h2>
      <ChatWindow />
    </div>
  );
}

export default App;
