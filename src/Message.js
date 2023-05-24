import React from "react";

const Message = ({ message, allMessages }) => {
  const lastMessage = allMessages[allMessages.length - 1];
  const isLastUser = message.user.id === lastMessage.user.id;
  const bubbleClassName = `chat-bubble ${isLastUser ? "right" : ""}`;
  return (
    <div className={bubbleClassName}>
      <img
        className="chat-bubble__left"
        src={message.user.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.user.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;