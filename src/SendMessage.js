import React, {useState } from "react";

const SendMessage = ({ scroll, users, setMessages }) => {
  const [message, setMessage] = useState('');
  const [currentUser, setCurrentUser] = useState('Select role')
  const [firstOptionHidden, setFirstOptionHidden] = useState(false);

  const handleRoleChange = (event) => {
    const selectedOption = event.target.selectedOptions[0];
    const selectedUserId = +selectedOption.getAttribute('user');
    setCurrentUser(users.find((user) => user.id === selectedUserId));
    setFirstOptionHidden(true);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    if (currentUser === 'Select role') {
      alert("Select the proper role");
      return;
    }
    setMessages((prevMessages) => [...prevMessages, {messageID: Date.now(), user:{id:currentUser.id, name:currentUser.name, avatar:currentUser.avatar}, text:message}])
    setMessage('');
    scroll.current.scrollIntoView({ behavior: "smooth" });

  };
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <select value={currentUser.name} onChange={handleRoleChange} className="form-input__select">
        {!firstOptionHidden && <option value="">Choose a role</option>}
        {users.map((user) => (<option key={user.id} user ={user.id} >{user.name}</option>))}
      </select>
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;