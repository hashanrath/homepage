import React, { useState } from 'react';
import '../pages/chatt.css';

function Chatt() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Function to simulate sending a message
  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user', timestamp: new Date().toISOString() }]);
      setInput('');
    }
  };

  return (
    <div className="app">
      <div className="app__header">
        <h2>React Messenger</h2>
      </div>
      <div className="app__body">
        <div className="chat__window">
          {messages.map((msg, index) => (
            <p key={index} className={`chat__message ${msg.sender === 'user' && 'chat__receiver'}`}>
              {msg.text}
              <span className="chat__timestamp">{new Date(msg.timestamp).toLocaleTimeString()}</span>
            </p>
          ))}
        </div>
        <div className="chat__input">
          <form onSubmit={sendMessage}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatt;
