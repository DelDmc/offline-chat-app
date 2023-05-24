import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() === '' || selectedRole === '') {
      return;
    }
    const newMessage = `${selectedRole}: ${inputText}`;
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <select value={selectedRole} onChange={handleRoleChange}>
          <option value="">Choose a role</option>
          <option value="Person 1">Person 1</option>
          <option value="Person 2">Person 2</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Chat;
